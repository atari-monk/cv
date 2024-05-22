import { generateSection } from "./contact.js";
import { loadJSON } from "./loader.js";
import { createContactHTML } from "./createContactHTML.js";

const config = await loadJSON("./../data/en/config.json");
generateSection(config, "contact", createContactHTML);
