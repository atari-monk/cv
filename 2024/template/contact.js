import { loadJSON } from "./loader.js";

export async function generateSection(config, sectionId, createHTMLContentFn) {
    const labelData = await loadJSON(config.folderPath + config.contactlabel);
    const contactData = await loadJSON(config.folderPath + config.contactData);

    const contactDiv = document.getElementById(sectionId);

    const htmlContent = createHTMLContentFn(labelData, contactData);
    contactDiv.innerHTML = htmlContent;
}
