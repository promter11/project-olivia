import { makeObservable, observable, action } from "mobx";

class SortStore {
  constructor() {
    makeObservable(this, {
      active: observable,
      current: observable,
      selectItem: action,
      toggleSort: action,
    });
  }

  items = [
    "по популярности",
    "по цене (возрастанию)",
    "по цене (убыванию)",
    "по названию",
  ];
  current = "по популярности";
  active = false;

  selectItem(item) {
    this.current = item;
  }

  toggleSort = () => {
    this.active = !this.active;
  };
}

export default new SortStore();
