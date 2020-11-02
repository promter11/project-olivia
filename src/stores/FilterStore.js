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
    active: [{ value: "active", checked: false }],
    gender: [
      { value: "male", checked: false },
      { value: "female", checked: false },
    ],
    type: [
      { value: "edt", checked: false },
      { value: "edp", checked: false },
      { value: "cologne", checked: false },
    ],
    rating: [
      { value: ">3", checked: false },
      { value: ">4", checked: false },
      { value: "all", checked: false },
    ],
  };

  get filteredItems() {
    const keys = Object.keys(this.filters);

    const checkedKeys = ["female", "edt"];

    return this.items.filter((item, _) => {
      return checkedKeys.every((key, _) => console.log(item[key]));
    });
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
      const checkbox = this.filters[key].find((el, _) => el.value === value);

      checkbox.checked = !checkbox.checked;
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
