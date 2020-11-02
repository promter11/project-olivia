import { makeObservable, observable, action } from "mobx";

class SearchStore {
  constructor() {
    makeObservable(this, {
      query: observable,
      opened: observable,
      toggleSearch: action,
      updateSearch: action,
      sendRequest: action,
    });
  }

  query = "";
  opened = false;

  toggleSearch = () => {
    this.opened = !this.opened;

    document.body.classList.toggle("modal--opened");
  };

  updateSearch = (value) => {
    this.query = value;
  };

  sendRequest = (event) => {
    event.preventDefault();

    this.query = "";
  };
}

export default new SearchStore();
