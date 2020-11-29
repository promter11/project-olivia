import { makeObservable, observable, computed, action } from "mobx";

class CartStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      count: computed,
      addItem: action,
      removeItem: action,
    });
  }

  items = [];

  get count() {
    return this.items.map((item, _) => {
      return item.options.reduce((acc, option) => acc + option.countInCart, 1);
    });
  }

  addItem = (object) => {
    const sameItem = this.items.find((item, _) => item.id === object.id);

    if (sameItem) {
      const currentOption = sameItem.options.find(
        (option, _) => option.current
      );

      sameItem.options[currentOption.id].countInCart++;
    } else {
      this.items.push(object);
    }
  };

  removeItem = (id) => {
    this.items.splice(id, 1);
  };
}

export default new CartStore();
