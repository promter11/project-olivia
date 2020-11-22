import { makeObservable, observable, action } from "mobx";

import ItemStore from "../stores/ItemStore";

class SearchStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      query: observable,
      opened: observable,
      active: observable,
      toggleSearch: action,
      updateSearch: action,
    });
  }

  items = ItemStore.items;
  query = "";
  opened = false;
  active = false;

  toggleSearch = () => {
    this.query = "";
    this.active = false;
    this.opened = !this.opened;

    document.body.classList.toggle("modal--opened");
  };

  updateSearch = (event) => {
    const {
      target: { value },
    } = event;

    this.query = value;
    this.active = value.length > 1;

    if (value.length > 1) {
      this.items = this.items.filter(({ brand, title }, _) => {
        return (
          brand.toLowerCase().includes(value.toLowerCase()) ||
          title.toLowerCase().includes(value.toLowerCase())
        );
      });
    } else {
      this.items = ItemStore.items;
    }
  };
}

export default new SearchStore();
