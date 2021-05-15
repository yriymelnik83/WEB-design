import Model from "./model/Model.js";
import View from "./view/View.js";

import controller from "./controller/controller.js";

const model = new Model();
const view = new View(model);

const Controller = new controller(model, view);
