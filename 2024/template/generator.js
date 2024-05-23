export async function setDivInnerHTML(data, sectionId, createHTMLFn) {
    const div = document.getElementById(sectionId);
    if (!div) throw new Error(`No div found for id ${sectionId}`);
    div.innerHTML = createHTMLFn(data);
}

export async function setElInnerText(data, sectionId, createTextFn) {
    const element = document.getElementById(sectionId);
    if (!element) throw new Error(`No element found for id ${sectionId}`);
    const text = createTextFn(data);
    element.innerText = text;
}
