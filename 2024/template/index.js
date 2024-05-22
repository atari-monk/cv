import { generateSection } from "./generator.js";
import { loadJSON } from "./loader.js";
import { createContactHTML } from "./creator.js";

const language = "en";
const config = await loadJSON(`./../data/${language}/config.json`);
generateSection(config, "contact", createContactHTML);
