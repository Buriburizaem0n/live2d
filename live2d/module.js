import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display";
import initWidget from "./waifu-tips.js";
import { ap_init, aplayer_panel_toggle } from "./waifu-tips.js";

// expose PIXI to window so that this plugin is able to
// reference window.PIXI.Ticker to automatically update Live2D models
window.PIXI = PIXI;

window.initWidget = initWidget;
window.ap_init = ap_init;
window.aplayer_panel_toggle = aplayer_panel_toggle;