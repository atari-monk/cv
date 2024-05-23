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

export function createLanguagesHTML(fileData) {
    const { languages, english, german, polish } = fileData.languages.label;
    const value = fileData.languages.data;
    return `
        <h2>${languages}</h2>
        <p>${english}: ${value.english}</p>
        <p>${german}: ${value.german}</p>
        <p>${polish}: ${value.polish}</p>
    `;
}

export function createHeaderHTML(fileData) {
    const { name, title } = fileData.header.data;
    return `
        <h1 class="name">${name}</h1>
        <p class="title">${title}</p>
    `;
}
