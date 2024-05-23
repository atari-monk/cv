import { generateSection } from "./generator.js";
import { loadJSON } from "./loader.js";
import {
    createContactHTML,
    createEducationHTML,
    createExpertiseHTML,
} from "./creator.js";

const languages = {
    pl: "pl",
    en: "en",
};
const language = languages.en;
const config = await loadJSON(`./../data/${language}/config.json`);
const data = await loadJSON(config.folderPath + config.dataFile);
generateSection(data, "contact", createContactHTML);
generateSection(data, "education", createEducationHTML);
generateSection(data, "expertise", createExpertiseHTML);
generateSection(data, "languages", createLanguagesHTML);
