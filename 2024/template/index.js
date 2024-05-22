import { generateSection } from "./generator.js";
import { loadJSON } from "./loader.js";
import { createContactHTML, createEducationHTML } from "./creator.js";

const language = "pl";
const config = await loadJSON(`./../data/${language}/config.json`);
const data = await loadJSON(config.folderPath + config.dataFile);
generateSection(data, "contact", createContactHTML);
generateSection(data, "education", createEducationHTML);
