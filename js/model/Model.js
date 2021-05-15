export default class Model {
  constructor() {
    this.expression = "";
    this.notRepeatingSymb = "+-=/*.";
    this.onChangeCallBack = null;
    return this.onModelChange();
  }

  clear() {
    this.expression = "";
    console.log(this.expression);
  }

  push(item) {
    if (
      !(
        this.notRepeatingSymb.indexOf(
          this.expression[this.expression.length - 1]
        ) > -1 && this.notRepeatingSymb.indexOf(item) > -1
      )
    )
      this.expression += item;
  }

  calculate() {
    const solution = eval(this.expression);
    this.expression = solution.toString();
    console.log(this.expression);
  }

  setOnChangeCallback(funcCallback) {
    this.onChangeCallBack = funcCallback;
  }
  onModelChange() {
    const handler = {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.onChangeCallBack) this.onChangeCallBack();
        return true;
      },
    };
    return new Proxy(this, handler);
  }
}
