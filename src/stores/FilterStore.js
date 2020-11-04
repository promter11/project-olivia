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
      maxPrice: computed,
      handleCheckbox: action,
      handleRadio: action,
      handleRange: action,
      clearFilters: action,
    });
  }

  items = SortStore.sortedItems;
  price = {
    min: 0,
    average: this.averagePrice,
    max: this.maxPrice,
  };
  filters = {
    active: ["Y"],
    gender: [],
    price: [],
    type: [],
    rating: [],
  };

  get filteredItems() {
    const entries = Object.entries(this.filters).filter(
      ([key, values], _) => values.length
    );

    return this.items.filter((item, _) => {
      return entries.every(([key, values]) => values.includes(item[key]));
    });
  }

  get count() {
    return this.filteredItems.length;
  }

  get averagePrice() {
    return Math.floor(this.maxPrice / 2);
  }

  get maxPrice() {
    return this.items.reduce((acc, item) => {
      return acc > item.price ? acc : item.price;
    });
  }

  handleCheckbox = (event) => {
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
    }
  };

  handleRadio = (event) => {
    const { target } = event;

    const value = target.getAttribute("value");

    if (target.checked) {
      switch (value) {
        case "3":
          this.filters.rating.replace(
            this.items
              .filter((item, _) => item.rating >= 3)
              .map((item, _) => item.rating)
          );

          break;
        case "4":
          this.filters.rating.replace(
            this.items
              .filter((item, _) => item.rating >= 4)
              .map((item, _) => item.rating)
          );

          break;
        default:
          this.filters.rating.replace(
            this.items
              .filter((item, _) => item.rating >= 0)
              .map((item, _) => item.rating)
          );

          break;
      }
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

    this.filters.price.replace(
      this.items
        .filter(
          (item, _) =>
            item.price >= this.price.min && item.price <= this.price.max
        )
        .map((item, _) => item.price)
    );
  };

  clearFilters = (event) => {
    event.preventDefault();

    this.filters = {
      active: ["Y"],
      gender: [],
      price: [],
      type: [],
      rating: [],
    };
  };
}

export default new FilterStore();
