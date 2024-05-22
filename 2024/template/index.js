import { generateContact } from "./contact.js";

console.log("index.js: Script loaded successfully.");
const config = {
    folderPath: "./../data/",
    labelFileName: "labelData.json",
    contactFileName: "contactData.json",
};

generateContact(config);
