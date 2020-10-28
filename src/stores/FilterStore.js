import { makeObservable, observable, computed, action } from "mobx";

import SortStore from "./SortStore";

class FilterStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      filters: observable,
      filteredItems: computed,
      count: computed,
      handleInput: action,
    });
  }

  items = SortStore.sortedItems;
  filters = {
    active: ["true"],
    gender: [],
    type: [],
  };

  get filteredItems() {
    const keys = Object.keys(this.filters);

    const filtered = this.items.filter((item, _) => {
      return keys.every((key, _) => this.filters[key].includes(item[key]));
    });
    const filteredActive = this.items.filter((item) => item.active === "true");

    return filtered.length ? filtered : filteredActive;
  }

  get count() {
    return this.filteredItems.length;
  }

  handleInput = (event) => {
    const target = event.target;

    const key = target.getAttribute("name");
    const value = target.getAttribute("value");

    if (target.getAttribute("type") === "checkbox") {
      if (target.checked) {
        this.filters[key].push(value);
      } else {
        const index = this.filters[key].indexOf(value);

        this.filters[key].splice(index, 1);
      }
    } else {
      console.log(key, value);
    }
  };
}

export default new FilterStore();
