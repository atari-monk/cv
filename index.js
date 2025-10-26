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
} from "./cv-section.js";

const text = await getJSON(`./text-en.json`);
//const cv = await getJSON(`./cv-en.json`);
const jsonButton = createJSONFileButton((cv) => {
	jsonButton.remove();

	setTextContent("pageTitle", cv.PageTitle);
	setInnerHTML("header", getHeader(cv));
	setInnerHTML("contact", getContact(text, cv));
	setInnerHTML("education", getEducation(text, cv));
	setInnerHTML("expertise", getExpertise(text, cv));
	setInnerHTML("language", getLanguage(text, cv));
	setInnerHTML("experience", getExperience(text, cv));
	setInnerHTML("link", getLink(text, cv));
});
document.body.appendChild(jsonButton);
