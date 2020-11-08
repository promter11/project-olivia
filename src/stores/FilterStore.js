import { makeObservable, observable, computed, action } from "mobx";

import ItemStore from "./ItemStore";
import SortStore from "./SortStore";

class FilterStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      price: observable,
      checked: observable,
      filters: observable,
      sortedItems: computed,
      filteredItems: computed,
      count: computed,
      maxPrice: computed,
      handleCheckbox: action,
      handleRadio: action,
      handleRange: action,
      clearFilters: action,
    });
  }

  items = ItemStore.items;
  price = {
    min: 0,
    average: this.averagePrice,
    max: this.maxPrice,
  };
  checked = {
    active: {
      N: false,
    },
    gender: {
      male: false,
      female: false,
    },
    type: {
      edt: false,
      edp: false,
      cologne: false,
    },
    rating: "all",
  };
  filters = {
    active: ["Y"],
    gender: [],
    price: [],
    type: [],
    rating: [],
  };

  get sortedItems() {
    return this.items
      .slice(0)
      .sort((a, b) =>
        a[SortStore.currentElementInfo.parameter] <
        b[SortStore.currentElementInfo.parameter]
          ? 1
          : -1
      );
  }

  get filteredItems() {
    const entries = Object.entries(this.filters).filter(
      ([key, values], _) => values.length
    );

    return this.sortedItems.filter((item, _) => {
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

    if (target.checked) {
      this.filters[key].push(value);
    } else {
      const index = this.filters[key].indexOf(value);

      this.filters[key].splice(index, 1);
    }

    this.checked[key][value] = !this.checked[key][value];
  };

  handleRadio = (event) => {
    const { target } = event;

    const key = target.getAttribute("name");
    const value = target.getAttribute("value");

    if (target.checked) {
      switch (value) {
        case ">3":
          this.filters.rating.replace(
            this.items
              .filter((item, _) => item.rating >= 3)
              .map((item, _) => item.rating)
          );

          break;
        case ">4":
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

    this.checked[key] = value;
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

    this.price = {
      min: 0,
      average: this.averagePrice,
      max: this.maxPrice,
    };
    this.checked = {
      active: {
        N: false,
      },
      gender: {
        male: false,
        female: false,
      },
      type: {
        edt: false,
        edp: false,
        cologne: false,
      },
      rating: "all",
    };
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
