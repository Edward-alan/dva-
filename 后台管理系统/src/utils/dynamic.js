import dynamic from "dva/dynamic";
import { app } from "@/index.js";

export default (modules = [], component) => {
  return dynamic({
    app,
    models: () => modules.map(item => import(`../models/${item}`)),
    component
  });
};
