import { makeObservable, observable } from "mobx";

class FilterStore {
  constructor() {
    makeObservable(this, {
      filters: observable,
    });
  }

  filters = {
    active: true,
    gender: "all",
    price: "all",
    type: "all",
    rating: "all",
  };
}

export default new FilterStore();
