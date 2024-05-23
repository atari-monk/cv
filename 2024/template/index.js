import { setElInnerText, setDivInnerHTML } from "./generator.js";
import { loadJSON } from "./loader.js";
import {
    getPageTitle,
    createContactHTML,
    createEducationHTML,
    createExpertiseHTML,
    createLanguagesHTML,
    createHeaderHTML,
    createExperienceHTML,
    createLinksHTML,
} from "./creator.js";

const languages = ["pl", "en"];
const languageConfig = await loadJSON(`./../data/config.json`);
const language = languages.find((l) => l === languageConfig.language);
if (!language) throw new Error("Language not selected");
const config = await loadJSON(`./../data/${language}/config.json`);
const data = await loadJSON(config.folderPath + config.dataFile);
setElInnerText(data, "pageTitle", getPageTitle);
setDivInnerHTML(data, "contact", createContactHTML);
setDivInnerHTML(data, "education", createEducationHTML);
setDivInnerHTML(data, "expertise", createExpertiseHTML);
setDivInnerHTML(data, "languages", createLanguagesHTML);
setDivInnerHTML(data, "header", createHeaderHTML);
setDivInnerHTML(data, "experience", createExperienceHTML);
setDivInnerHTML(data, "links", createLinksHTML);
