//
// ------------------------- Document ready function
//
const documentReady = (fn) => {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", fn);
	} else {
		fn();
	}
};

export default documentReady;
