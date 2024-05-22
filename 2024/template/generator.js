import { loadJSON } from "./loader.js";

export async function generateSection(data, sectionId, createHTMLContentFn) {
    const contactDiv = document.getElementById(sectionId);
    const htmlContent = createHTMLContentFn(data);
    contactDiv.innerHTML = htmlContent;
}
