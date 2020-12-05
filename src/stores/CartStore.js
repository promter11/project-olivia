import { makeObservable, observable, computed, action, toJS } from "mobx";

import ItemStore from "../stores/ItemStore";

class CartStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      count: computed,
      totalPrice: computed,
      addItem: action,
      minusItem: action,
      removeItem: action,
      clearCart: action,
      getItemWithTheSameVolume: action,
      getItemsCurrentOption: action,
    });
  }

  items = [];

  get count() {
    return this.items.reduce((acc, item) => {
      return (
        acc + item.options.reduce((acc, option) => acc + option.countInCart, 0)
      );
    }, 0);
  }

  get totalPrice() {
    return this.items.reduce((acc, item) => {
      const options = item.options.filter(
        (option, _) => option.countInCart > 0
      );

      return (
        acc +
        options.reduce(
          (acc, option) =>
            acc +
            ItemStore.getItemPriceWithDiscount(
              option.price,
              option.discountPercentage
            ) *
              option.countInCart,
          0
        )
      );
    }, 0);
  }

  addItem = (object) => {
    const item = this.getItemWithTheSameVolume(object);

    if (item) {
      const current = this.getItemsCurrentOption(item);

      current.countInCart++;
    } else {
      const clone = toJS(object);

      this.items.push(clone);
    }
  };

  minusItem = (id, optionID) => {
    const index = this.items.findIndex((item, _) => item.id === id);

    if (this.items[index].options[optionID].countInCart > 1) {
      this.items[index].options[optionID].countInCart--;
    }
  };

  removeItem = (id) => {
    const index = this.items.findIndex((item, _) => item.id === id);

    this.items.splice(index, 1);

    console.log(this.items);
  };

  clearCart = () => {
    this.items = [];
  };

  getItemWithTheSameVolume = (object) => {
    return this.items.find((item, _) => {
      const currentItemOption = item.options.find(
        (option, _) => option.current
      );
      const currentObjectOption = object.options.find(
        (option, _) => option.current
      );

      return currentItemOption.volume === currentObjectOption.volume;
    });
  };

  getItemsCurrentOption = (object) => {
    return object.options.find((option, _) => option.current);
  };
}

export default new CartStore();
