class Model {
  constructor({ onMemsChange }) {
    this.mems = [];
    this.onMemsChange = onMemsChange;
  }

  setMems(mems) {
    this.mems = mems;

    this.onMemsChange(this.mems);
  }
}
