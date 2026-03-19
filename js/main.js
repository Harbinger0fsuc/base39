//
// ------------------------- Config
//
import configCommon from "./config/config";

//
// ------------------------- Auxiliary functions
//
import documentReady from "./functions/documentReady";

//
// ------------------------- Components
//
import highlightTextOnScroll from "./components/highlightTextOnScroll";
import initRevealTextElems from "./components/revealText";
import workspaceAnimInit from "./components/workspaceAnim";
import audienceAnimInit from "./components/audienceAnim";

window.addEventListener("DOMContentLoaded", () => {
	highlightTextOnScroll();
	initRevealTextElems();
	workspaceAnimInit();
	audienceAnimInit();
});
