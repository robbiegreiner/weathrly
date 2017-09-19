class LocalStorageMock {
  constructor() {
    this.store = [];
  }

  setItem(item, value) {
    this.store.push(value);
  }

  clear() {
    this.store = [];
  }
}

export default LocalStorageMock;
