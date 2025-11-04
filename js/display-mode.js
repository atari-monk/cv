// CV Display State Management - Utility Functions

let isCVLoaded = false;

// Initialize display state
export function initCVDisplay() {
	isCVLoaded = false;
	setCVDisplayMode(false);
}

// Set CV display mode (true = CV loaded, false = generator mode)
export function setCVDisplayMode(cvLoaded) {
	isCVLoaded = cvLoaded;

	if (cvLoaded) {
		// CV is loaded - hide generator elements, show CV content
		document.body.classList.add("cv-loaded");
		toggleHeaderVisibility(true);
	} else {
		// No CV loaded - show generator elements, hide CV content
		document.body.classList.remove("cv-loaded");
		toggleHeaderVisibility(false);
	}
}

// Show/hide header based on data availability
export function toggleHeaderVisibility(show) {
	const header = document.getElementById("header");
	if (header) {
		header.style.display = show ? "block" : "none";
	}
}

// Call when CV data is loaded
export function onCVDataLoaded() {
	setCVDisplayMode(true);
}

// Call when resetting to generator mode
export function resetToGeneratorMode() {
	setCVDisplayMode(false);
}

// Check if CV data is currently loaded
export function isCVDataLoaded() {
	return isCVLoaded;
}

// Toggle between CV and generator modes
export function toggleCVDisplayMode() {
	setCVDisplayMode(!isCVLoaded);
}
