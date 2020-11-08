import { makeObservable, observable, action } from "mobx";

class SortStore {
  constructor() {
    makeObservable(this, {
      elements: observable,
      currentElementInfo: observable,
      activeSortBlock: observable,
      toggleSortBlock: action,
      selectElement: action,
    });
  }

  elements = [
    { id: 0, title: "по популярности", parameter: "rating" },
    { id: 1, title: "по названию бренда", parameter: "brand" },
    { id: 2, title: "по названию аромата", parameter: "title" },
    { id: 3, title: "по цене", parameter: "price" },
  ];
  currentElementInfo = { ...this.elements[0] };
  activeSortBlock = false;

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
