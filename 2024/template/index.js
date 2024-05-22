import { generateContact } from "./contact.js";
import { loadJSON } from "./loader.js";

const config = await loadJSON("./../data/en/config.json");
generateContact(config);
