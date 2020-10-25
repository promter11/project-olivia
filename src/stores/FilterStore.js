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
    active: true,
  };

  get filteredItems() {
    const keys = Object.keys(this.filters);

    return this.items.filter((item, _) => {
      return keys.every((key, _) => item[key] === this.filters[key]);
    });
  }

  get count() {
    return this.filteredItems.length;
  }

  handleCheckbox = (event) => {
    const target = event.target;

    const key = target.getAttribute("name");
    const value = target.getAttribute("value");

    if (key === "active") {
      this.filters[key] = !this.filters[key];
    } else if (key === "gender") {
      this.filters[key] = value;
    }
  };
}

export default new FilterStore();
