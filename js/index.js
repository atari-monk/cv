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

const en = true;
const labels_en = await getJSON(`./assets/data/text-en.json`);
const labels_pl = await getJSON(`./assets/data/text-pl.json`);
let labels;
if (en) labels = labels_en;
else labels = labels_pl;

const photoContainer = document.getElementById("photo-container");
if (!photoContainer) throw new Error("No element with id=");

let jsonButton;
const buttonContainer = document.createElement("div");
buttonContainer.className = "json-button-container";
jsonButton = createJSONFileButton(handleCVData, buttonContainer);
photoContainer.parentNode.insertBefore(
    buttonContainer,
    photoContainer.nextSibling
);

function handleCVData(cv) {
    jsonButton.remove();
    onCVDataLoaded();

    setTextContent("pageTitle", cv.PageTitle);
    setInnerHTML("header", getHeader(cv));
    setInnerHTML("contact", getContact(labels, cv));
    setInnerHTML("education", getEducation(labels, cv));
    setInnerHTML("expertise", getExpertise(labels, cv));
    setInnerHTML("language", getLanguage(labels, cv));
    setInnerHTML("experience", getExperience(labels, cv));
    setInnerHTML("link", getLink(labels, cv));
}

initPhotoUpload();
