import { makeObservable, observable, computed, action } from "mobx";

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
    });
  }

  items = [];

  get count() {
    return this.items.map((item, _) => {
      return item.options.reduce((acc, option) => acc + option.countInCart, 0);
    });
  }

  get totalPrice() {
    return this.items.map((item, _) => {
      const options = item.options.filter(
        (option, _) => option.countInCart > 0
      );

      return options.reduce(
        (acc, option) =>
          acc +
          ItemStore.getItemPriceWithDiscount(
            option.price,
            option.discountPercentage
          ) *
            option.countInCart,
        0
      );
    });
  }

  addItem = (object) => {
    const itemWithTheSameID = this.items.find(
      (item, _) => item.id === object.id
    );

    if (itemWithTheSameID) {
      const currentOption = itemWithTheSameID.options.find(
        (option, _) => option.current
      );

      itemWithTheSameID.options[currentOption.id].countInCart++;
    } else {
      const copy = Object.assign({}, object);

      copy.options.forEach((option, _) => option.countInCart++);

      this.items.push(copy);
    }
  };

  minusItem = (id, optionID) => {
    const itemWithTheSameID = this.items.find((item, _) => item.id === id);

    if (itemWithTheSameID.options[optionID].countInCart > 1) {
      itemWithTheSameID.options[optionID].countInCart--;
    }
  };

  removeItem = (id) => {
    const index = this.items.findIndex((item, _) => item.id === id);

    this.items.splice(index, 1);
  };

  clearCart = () => {
    this.items = [];
  };
}

export default new CartStore();
