import { makeObservable, observable, computed, action } from "mobx";

import ItemStore from "./ItemStore";

class SortStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      elements: observable,
      currentElementInfo: observable,
      activeSortBlock: observable,
      sortedItems: computed,
      toggleSortBlock: action,
      selectElement: action,
    });
  }

  items = ItemStore.items;
  elements = [
    { id: 0, title: "по популярности", parameter: "rating" },
    { id: 1, title: "по названию бренда", parameter: "brand" },
    { id: 2, title: "по названию аромата", parameter: "title" },
    { id: 3, title: "по цене", parameter: "price" },
  ];
  currentElementInfo = { ...this.elements[0] };
  activeSortBlock = false;

  get sortedItems() {
    return this.items
      .slice(0)
      .sort((a, b) =>
        a[this.currentElementInfo.parameter] <
        b[this.currentElementInfo.parameter]
          ? 1
          : -1
      );
  }

  toggleSortBlock = () => {
    this.activeSortBlock = !this.activeSortBlock;
  };

  selectElement = (id) => {
    this.currentElementInfo = {
      title: this.elements[id].title,
      parameter: this.elements[id].parameter,
    };
  };
}

export default new SortStore();
