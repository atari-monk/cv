export function getHeader(cv) {
	const { FullName, JobTitle } = cv;
	return `
        <h1 class="name">${FullName}</h1>
        <p class="title">${JobTitle}</p>
    `;
}

export function getContact(text, cv) {
	const { Title: ti, Label: lb } = text;
	return `
        <h2>${ti.Contact}</h2>
        <div class="separator"></div>
        <p>${lb.Email}: ${cv.Email}</p>
        <p>${lb.Phone}: ${cv.Phone}</p>
        <p>${lb.Address}: ${cv.Address}</p>
    `;
}

export function getEducation(text, cv) {
	const { Title: ti } = text;
	return `
        <h2>${ti.Education}</h2>
        <div class="separator"></div>
        <p>${cv.Education}</p>
    `;
}

export function getExpertise(text, cv) {
	const { Title: ti } = text;
	const { Expertise: ex } = cv;
	let htmlContent = `<h2>${ti.Expertise}</h2>`;
	htmlContent += '<div class="separator"></div>';
	htmlContent += "<ul>";
	ex.forEach((item, _) => {
		htmlContent += `<li><p class="expertise-title"><u>${item.Expertise}:</u></p><p>${item.Description}</p></li>`;
	});
	htmlContent += "</ul>";
	return htmlContent;
}

export function getLanguage(text, cv) {
	const { Title: ti } = text;
	const { Language: ln } = cv;
	let htmlContent = `<h2>${ti.Language}</h2>`;
	htmlContent += '<div class="separator"></div>';
	htmlContent += "<ul>";
	ln.forEach((item, _) => {
		htmlContent += `<li><p>${item.Language}: ${item.Skill}</p></li>`;
	});
	htmlContent += "</ul>";
	return htmlContent;
}

export function getExperience(text, cv) {
	const { Title: ti } = text;
	const { Experience: ex } = cv;
	let htmlContent = `<h2>${ti.Experience}</h2>`;
	htmlContent += '<div class="separator"></div>';
	htmlContent += "<ul>";
	ex.forEach((item, _) => {
		htmlContent += "<li>";
		htmlContent += `<p class="company">${item.Company}</p>`;
		htmlContent += `<p>${item.JobTitle}</p>`;
		htmlContent += `<p class="dates">${item.Dates}</p>`;
		htmlContent += `<p>${item.Description}</p>`;
		htmlContent += "</li>";
	});
	htmlContent += "</ul>";
	return htmlContent;
}

export function getLink(text, cv) {
	const { Title: ti } = text;
	const { Link: ln } = cv;
	let htmlContent = `<h2>${ti.Link}</h2>`;
	htmlContent += '<div class="separator"></div>';
	ln.forEach((item, _) => {
		htmlContent += "<p>";
		htmlContent += `<a href="${item.Link}">${item.Title}</a>`;
		htmlContent += "</p>";
	});
	return htmlContent;
}
