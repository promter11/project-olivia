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
    return this.items.length;
  }

  addItem = (object) => {
    const similarItem = this.items.find((item, _) => item.id === object.id);

    if (similarItem) {
      const currentOption = similarItem.options.find(
        (option, _) => option.current
      );

      this.items[similarItem.id].options[currentOption.id].countInCart++;
    } else {
      this.items.push(object);
    }
  };

  removeItem = (id) => {
    this.items.splice(id, 0);
  };
}

export default new CartStore();
