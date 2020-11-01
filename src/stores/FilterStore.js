import { makeObservable, observable, computed, action } from "mobx";

import SortStore from "./SortStore";

class FilterStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      price: observable,
      filters: observable,
      filteredItems: computed,
      count: computed,
      averagePrice: computed,
      maxPrice: computed,
      handleInput: action,
      handleRange: action,
    });
  }

  items = SortStore.sortedItems;
  price = {
    min: 0,
    average: this.averagePrice,
    max: this.maxPrice,
  };
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

  get averagePrice() {
    return Math.floor(this.maxPrice / 2);
  }

  get maxPrice() {
    return this.items.reduce((acc, item) =>
      acc > item.price ? acc : item.price
    );
  }

  handleInput = (event) => {
    const { target } = event;

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

  handleRange = (event) => {
    const {
      target,
      target: { value },
    } = event;

    target.getAttribute("data-range") === "min"
      ? (this.price.min = Number(value))
      : (this.price.max = Number(value));
  };
}

export default new FilterStore();
