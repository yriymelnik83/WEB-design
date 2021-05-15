export default class View {
  constructor(Model) {
    this.Model = Model;
    this.pushController = null;
    this.calculateController = null;
    this.clearController = null;
    this.screen = document.querySelector(".calculator-screen");
    document.querySelector(".calculator-btn").addEventListener("click", (e) => {
      if (e.target.type == "button") {
        if (e.target.value == "all-clear") {
          this.clearController();
        } else if (e.target.value == "=") {
          this.calculateController();
        } else {
          this.pushController(e.target.value);
        }
      }
    });
  }

  setPushController(func) {
    this.pushController = func;
  }
  setCalculateController(func) {
    this.calculateController = func;
  }
  setClearController(func) {
    this.clearController = func;
  }
  toHTML() {
    this.screen.value = this.Model.expression;
  }
}
