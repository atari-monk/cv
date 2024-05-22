import { loadJSON } from "./loader.js";

export async function generateSection(config, sectionId, createHTMLContentFn) {
    const data = await loadJSON(config.folderPath + config.dataFile);
    const contactDiv = document.getElementById(sectionId);
    const htmlContent = createHTMLContentFn(data);
    contactDiv.innerHTML = htmlContent;
}
