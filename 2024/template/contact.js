import { loadJSON } from "./loader.js";

export async function generateContact(config) {
    console.log("generateContact(): Generating contact information.");

    const labelData = await loadJSON(config.folderPath + config.labelFileName);
    const contactData = await loadJSON(
        config.folderPath + config.contactFileName
    );
    // const labelData = {
    //     emailLabel: "Email",
    //     phoneLabel: "Phone",
    //     addressLabel: "Address",
    // };
    // const contactData = {
    //     email: "your@email.com",
    //     phone: "+123456789",
    //     address: "Your Address",
    // };

    const contactDiv = document.getElementById("contact");

    const htmlContent = createContactHTML(labelData, contactData);
    console.log("Generated HTML content:", htmlContent);
    contactDiv.innerHTML = htmlContent;
}

function createContactHTML(labels, data) {
    let htmlContent = "<h2>Contact</h2>";
    htmlContent += "<p>" + labels.emailLabel + ": " + data.email + "</p>";
    htmlContent += "<p>" + labels.phoneLabel + ": " + data.phone + "</p>";
    htmlContent += "<p>" + labels.addressLabel + ": " + data.address + "</p>";
    return htmlContent;
}
