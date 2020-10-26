import { makeObservable, observable, computed, action } from "mobx";

import ItemStore from "./ItemStore";

class FilterStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      filters: observable,
      filteredItems: computed,
      count: computed,
      handleCheckbox: action,
    });
  }

  items = ItemStore.items;
  filters = {
    active: ["true"],
    gender: ["male", "female", "unisex"],
    type: ["edt", "edp", "cologne"],
  };

  get filteredItems() {
    const keys = Object.keys(this.filters);

    return this.items.filter((item, _) => {
      return keys.every((key, _) => this.filters[key].includes(item[key]));
    });
  }

  get count() {
    return this.filteredItems.length;
  }

  handleCheckbox = (event) => {
    const target = event.target;

    const key = target.getAttribute("name");
    const value = target.getAttribute("value");

    if (target.checked) {
      this.filters[key].push(value);
    } else {
      const index = this.filters[key].indexOf(value);

      this.filters[key].splice(index, 1);
    }
  };
}

export default new FilterStore();
