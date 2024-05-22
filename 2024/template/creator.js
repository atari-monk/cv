export function createContactHTML(fileData) {
    const { contact, email, phone, address } = fileData.contact.label;
    const value = fileData.contact.data;
    return `
        <h2>${contact}</h2>
        <p>${email}: ${value.email}</p>
        <p>${phone}: ${value.phone}</p>
        <p>${address}: ${value.address}</p>
    `;
}

export function createEducationHTML(fileData) {
    const { education } = fileData.education.label;
    const value = fileData.education.data;
    return `
        <h2>${education}</h2>
        <p>${value.education}</p>
    `;
}

export function createExpertiseHTML(fileData) {
    const { expertise } = fileData.expertise.label;
    const value = fileData.expertise.data;
    let htmlContent = `<h2>${expertise}</h2>`;
    htmlContent += "<ul>";
    value.expertise.forEach((expertise, _index) => {
        htmlContent += `<li>${expertise}</li>`;
    });
    htmlContent += "</ul>";
    return htmlContent;
}
