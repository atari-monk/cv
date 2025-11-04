import {
	getJSON,
	createJSONFileButton,
	setTextContent,
	setInnerHTML,
} from "./utils.js";
import {
	getHeader,
	getContact,
	getEducation,
	getExpertise,
	getLanguage,
	getExperience,
	getLink,
} from "./cv.js";
import { initPhotoUpload } from "./photo-upload.js";
import { initCVDisplay, onCVDataLoaded } from "./display-mode.js";

initCVDisplay();

const text = await getJSON(`./assets/data/text-en.json`);

const photoContainer = document.querySelector(".photo-container");
let jsonButton;

if (photoContainer) {
	// Create a container for the button
	const buttonContainer = document.createElement("div");
	buttonContainer.className = "json-button-container";

	// Create the button and add it to the container
	jsonButton = createJSONFileButton(handleCVData, buttonContainer);

	// Insert the button container after the photo
	photoContainer.parentNode.insertBefore(
		buttonContainer,
		photoContainer.nextSibling
	);
} else {
	// Fallback: create the button normally
	jsonButton = createJSONFileButton(handleCVData);
}

function handleCVData(cv) {
	jsonButton.remove();
	onCVDataLoaded();

	setTextContent("pageTitle", cv.PageTitle);
	setInnerHTML("header", getHeader(cv));
	setInnerHTML("contact", getContact(text, cv));
	setInnerHTML("education", getEducation(text, cv));
	setInnerHTML("expertise", getExpertise(text, cv));
	setInnerHTML("language", getLanguage(text, cv));
	setInnerHTML("experience", getExperience(text, cv));
	setInnerHTML("link", getLink(text, cv));
}

// const root = document.getElementById("root");
// if (!root) throw new Error("Cant find element with id=root");

// root.appendChild(jsonButton);

initPhotoUpload();
