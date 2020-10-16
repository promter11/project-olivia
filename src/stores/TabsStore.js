import { makeObservable, observable, action } from "mobx";

class TabsStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      activeID: observable,
      selectItem: action,
    });
  }

  items = ["Характеристики", "Описание", "Композиция"];
  activeID = 0;

  selectItem = (id) => {
    this.activeID = id;
  };
}

export default new TabsStore();
