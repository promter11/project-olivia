import { makeAutoObservable } from "mobx";

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  title = "Olivia";
}

export default AppStore;
