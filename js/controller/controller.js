export default class controller {
  constructor(Model, View) {
    this.Model = Model;
    this.View = View;
    this.View.setPushController(this.push);
    this.View.setCalculateController(this.calculate);
    this.View.setClearController(this.clear);
    this.Model.setOnChangeCallback(() => this.onChangeCallback());
  }
  push(item) {
    this.Model.push(item);
  }
  calculate() {
    this.Model.calculate();
  }
  clear() {
    this.Model.clear();
  }
  onChangeCallback() {
    this.View.toHTML();
  }
}
