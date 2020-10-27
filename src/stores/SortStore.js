import { makeObservable, observable, computed, action } from "mobx";

import ItemStore from "./ItemStore";

class SortStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      elements: observable,
      currentElement: observable,
      activeSortBlock: observable,
      sortedItems: computed,
      toggleSortBlock: action,
      selectElement: action,
      sortItemsBy: action,
    });
  }

  items = ItemStore.items;
  elements = [
    { id: 0, title: "по популярности", parameter: "rating" },
    { id: 1, title: "по названию", parameter: "title" },
    { id: 2, title: "по цене", parameter: "price" },
  ];
  currentElement = "по популярности";
  activeSortBlock = false;

  get sortedItems() {
    return this.items;
  }

  toggleSortBlock = () => {
    this.activeSortBlock = !this.activeSortBlock;
  };

  selectElement = (id) => {
    this.currentElement = this.elements[id].title;
  };

  sortItemsBy = (parameter) => {
    this.items = this.items
      .slice()
      .sort((a, b) => (a[parameter] > b[parameter] ? 1 : -1));
  };
}

export default new SortStore();
