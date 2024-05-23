export function createContactHTML(fileData) {
    const { contact, email, phone, address } = fileData.contact.label;
    const value = fileData.contact.data;
    return `
        <h2>${contact}</h2>
        <div class="separator"></div>
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
        <div class="separator"></div>
        <p>${value.education}</p>
    `;
}

export function createExpertiseHTML(fileData) {
    const { expertise } = fileData.expertise.label;
    const value = fileData.expertise.data;
    let htmlContent = `<h2>${expertise}</h2>`;
    htmlContent += '<div class="separator"></div>';
    htmlContent += "<ul>";
    value.expertise.forEach((item, _index) => {
        htmlContent += `<li>${item.description}</li>`;
    });
    htmlContent += "</ul>";
    return htmlContent;
}

export function createLanguagesHTML(fileData) {
    const { languages, english, german, polish } = fileData.languages.label;
    const value = fileData.languages.data;
    return `
        <h2>${languages}</h2>
        <div class="separator"></div>
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

export function createExperienceHTML(fileData) {
    const { experience } = fileData.experience.label;
    const value = fileData.experience.data.experience;
    let htmlContent = `<h2>${experience}</h2>`;
    htmlContent += '<div class="separator"></div>';
    htmlContent += "<ul>";
    value.forEach((item, _index) => {
        htmlContent += "<li>";
        htmlContent += `<p>${item.dates}</p>`;
        htmlContent += `<p>${item.company}</p>`;
        htmlContent += `<p>${item.description}</p>`;
        htmlContent += "</li>";
    });
    htmlContent += "</ul>";
    return htmlContent;
}

export function createLinksHTML(fileData) {
    const { online_presence } = fileData.links.label;
    const value = fileData.links.data;
    let htmlContent = `<h2>${online_presence}</h2>`;
    htmlContent += '<div class="separator"></div>';
    value.forEach((item, _index) => {
        htmlContent += "<p>";
        htmlContent += `<a href="${item.link}">${item.title}</a>`;
        htmlContent += "</p>";
    });
    return htmlContent;
}
