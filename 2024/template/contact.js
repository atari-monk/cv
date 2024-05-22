import { loadJSON } from "./loader.js";

export async function generateContact(config) {
    const labelData = await loadJSON(config.folderPath + config.contactlabel);
    const contactData = await loadJSON(config.folderPath + config.contactData);

    const contactDiv = document.getElementById("contact");

    const htmlContent = createContactHTML(labelData, contactData);
    contactDiv.innerHTML = htmlContent;
}

function createContactHTML(labels, data) {
    let htmlContent = "<h2>Contact</h2>";
    htmlContent += "<p>" + labels.emailLabel + ": " + data.email + "</p>";
    htmlContent += "<p>" + labels.phoneLabel + ": " + data.phone + "</p>";
    htmlContent += "<p>" + labels.addressLabel + ": " + data.address + "</p>";
    return htmlContent;
}
