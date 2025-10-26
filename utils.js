export async function getJSON(url) {
	const response = await fetch(url);
	return await response.json();
}

export function assertString(text, name = "Value") {
	if (text === null) {
		throw new Error(`${name} must be a string, received null`);
	}

	if (text === undefined) {
		throw new Error(`${name} must be a string, received undefined`);
	}

	if (text instanceof String) {
		throw new Error(
			`${name} must be a string primitive, received String object`
		);
	}

	if (typeof text !== "string") {
		throw new Error(`${name} must be a string type, received ${typeof text}`);
	}

	const cleanText = text.trim();
	if (cleanText === "") {
		throw new Error(`${name} must be a non-empty string`);
	}

	return cleanText;
}

export function setTextContent(id, text) {
	const validId = assertString(id, "Element Id");
	const validText = assertString(text, "Text content");
	const el = document.getElementById(validId);
	if (!el)
		throw new Error(`Element with id "${validId}" not found in the document`);
	el.textContent = validText;
	return el;
}

export function setInnerHTML(id, html) {
	const validId = assertString(id, "Element Id");
	const validHtml = assertString(html, "HTML content");
	const el = document.getElementById(validId);
	if (!el)
		throw new Error(`Element with id "${validId}" not found in the document`);
	el.innerHTML = validHtml;
	return el;
}

export function createJSONFileButton(onLoad) {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = ".json";
	input.style.display = "none";

	const button = document.createElement("button");
	button.textContent = "Load CV JSON File";
	button.className = "json-loader-btn"; // Add the CSS class

	input.addEventListener("change", () => {
		const file = input.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const json = JSON.parse(e.target.result);
				onLoad(json);
			} catch (err) {
				console.error("Invalid JSON file:", err);
				alert("Please select a valid JSON file");
			}
		};
		reader.readAsText(file);
	});

	button.addEventListener("click", () => input.click());

	return button;
}
