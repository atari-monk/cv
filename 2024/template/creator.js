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
