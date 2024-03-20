class Controller {
  constructor() {
    this.api = new Api();

    this.model = new Model({
      onMemsChange: this.handleModelChange,
    });

    this.view = new View();
  }

  handleModelChange = (mems) => {
    this.view.render(mems);
  };

  init() {
    this.api.fetchMems().then((mems) => {
      return this.model.setMems(mems);
    });
  }
}
