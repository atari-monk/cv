export function createContactHTML(labels, data) {
    let htmlContent = "<h2>Contact</h2>";
    htmlContent += "<p>" + labels.emailLabel + ": " + data.email + "</p>";
    htmlContent += "<p>" + labels.phoneLabel + ": " + data.phone + "</p>";
    htmlContent += "<p>" + labels.addressLabel + ": " + data.address + "</p>";
    return htmlContent;
}
