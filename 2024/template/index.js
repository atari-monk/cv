import { generateSection } from "./generator.js";
import { loadJSON } from "./loader.js";
import { createContactHTML, createEducationHTML } from "./creator.js";

const language = "en";
const config = await loadJSON(`./../data/${language}/config.json`);
generateSection(config, "contact", createContactHTML);
generateSection(config, "education", createEducationHTML);
