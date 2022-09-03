var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "icons/call-outline.svg", "icons/checkmark-done-sharp.svg", "icons/chevron-back-outline.svg", "icons/videocam-outline.svg", "images/background-image.jpg", "images/default-profile-picture.png", "images/phone-frame.png", "images/whatsapp-background-without-color.png", "images/whatsapp-background.jpg", "images/whatsapp-site-icon.png", "js/qrcode.js"]),
  mimeTypes: { ".png": "image/png", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".js": "application/javascript" },
  _: {
    entry: { "file": "_app/immutable/start-73fbff60.js", "imports": ["_app/immutable/start-73fbff60.js", "_app/immutable/chunks/index-2741cab5.js", "_app/immutable/chunks/singletons-24c0a246.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js")))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { "layouts": [0], "errors": [1], "leaf": 2 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
