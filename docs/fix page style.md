# Fix page style

This is my main page

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/png" href="./assets/images/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title id="pageTitle"></title>
		<link rel="stylesheet" href="./css/style.css" />
	</head>
	<body>
		<div class="container" id="root">
			<div class="left-column">
				<div class="photo-container">
					<div class="photo">
						<img id="cv-photo" src="./assets/images/cv_photo.png" alt="Photo" />
						<div
							id="photo-upload-container"
							class="photo-upload-container"
						></div>
					</div>
				</div>
				<div id="contact" class="contact"></div>
				<div id="education" class="education"></div>
				<div id="expertise" class="expertise"></div>
				<div id="language" class="language"></div>
			</div>
			<div class="right-column">
				<div id="header" class="header">
					<h1 class="name">[Your Name]</h1>
					<p class="title">[Your Title]</p>
				</div>
				<div id="experience" class="experience"></div>
				<div id="link" class="link"></div>
			</div>
		</div>
		<script type="module" src="./js/index.js"></script>
	</body>
</html>
```

With styles

```css
:root {
	/* Colors */
	--primary-blue: #273b70;
	--text-light: #ffffff;
	--text-gray: #797575;
	--separator-color: #ccc;

	/* Font Sizes */
	--font-large: 24px;
	--font-medium: 18px;
	--font-regular: 16px;

	/* Spacing */
	--spacing-mega: 60px;
	--spacing-huge: 40px;
	--spacing-large: 20px;
	--spacing-medium: 10px;
	--spacing-small: 5px;

	/* Layout */
	--container-max-width: 800px;
	--left-column-width: 40%;
	--right-column-width: 66.66%;
	--header-height: 90px;
	--photo-size: 120px;
}

body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
}

.container {
	max-width: var(--container-max-width);
	margin: 0 auto;
	display: flex;
}

.left-column {
	width: var(--left-column-width);
	background-color: var(--primary-blue);
	color: var(--text-light);
	padding: var(--spacing-large);
	text-align: center;
}

.photo {
	margin-bottom: var(--spacing-large);
	display: inline-block;
}

.photo img {
	width: var(--photo-size);
	height: var(--photo-size);
	border-radius: 50%;
	object-fit: cover;
}

.header {
	height: var(--header-height);
	margin-bottom: 20px;
}

.name {
	font-size: var(--font-large);
	margin-top: 50px;
}

.title {
	font-size: var(--font-medium);
	margin-top: var(--spacing-small);
	color: var(--text-gray);
}

.dates {
	font-size: var(--font-regular);
	color: var(--text-gray);
	font-weight: bold;
}

.company {
	font-size: var(--font-regular);
	color: var(--text-gray);
	font-weight: bold;
}

.right-column {
	width: var(--right-column-width);
	padding: var(--spacing-large);
}

.contact {
	text-align: left;
	margin-bottom: var(--spacing-large);
}

.education {
	text-align: left;
	margin-bottom: var(--spacing-large);
}

.expertise {
	text-align: left;
	margin-bottom: var(--spacing-large);
}

.language {
	text-align: left;
	margin-bottom: var(--spacing-large);
}

.experience {
	text-align: left;
	margin-bottom: var(--spacing-large);
}

.link {
	text-align: left;
	margin-bottom: var(--spacing-large);
}

.separator {
	border-bottom: 2px solid var(--separator-color);
	margin-bottom: var(--spacing-large);
}

.contact h2 {
	font-size: var(--font-medium);
	margin-bottom: var(--spacing-medium);
}

.education h2 {
	font-size: var(--font-medium);
	margin-bottom: var(--spacing-medium);
}

.expertise h2 {
	font-size: var(--font-medium);
	margin-bottom: var(--spacing-medium);
}

.language h2 {
	font-size: var(--font-medium);
	margin-bottom: var(--spacing-medium);
}

.experience h2 {
	font-size: var(--font-medium);
	margin-bottom: var(--spacing-medium);
}

.link h2 {
	font-size: var(--font-medium);
	margin-bottom: var(--spacing-medium);
}

.expertise li {
	margin-bottom: var(--spacing-medium);
}

.expertise-title + p {
	margin-top: -5px;
	margin-left: var(--spacing-medium);
}

.json-loader-btn {
	padding: 14px 28px;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(10px);
	color: #333;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 12px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 500;
	transition: all 0.3s ease;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.json-loader-btn:hover {
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
	transform: translateY(-2px);
}

/* photo upload */

.photo-container {
	position: relative;
	display: inline-block;
}

.photo {
	position: relative;
}

.photo-upload-container {
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	display: none;
}

.photo:hover .photo-upload-container {
	display: block;
}

.image-upload-btn {
	padding: 8px 16px;
	background: white;
	color: #333;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 12px;
	font-weight: 500;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.image-upload-btn:hover {
	background: #f5f5f5;
}

/* Hide button when printing */
@media print {
	.photo-upload-container {
		display: none !important;
	}

	.photo {
		filter: none !important;
	}

	* {
		-webkit-user-select: text !important;
		user-select: text !important;
	}
}
```

My download schema sub page

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Download JSON Schema</title>
		<style>
			body {
				font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
				max-width: 800px;
				margin: 0 auto;
				padding: 20px;
				background-color: #f5f7fa;
				color: #333;
			}

			.container {
				background-color: white;
				border-radius: 10px;
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
				padding: 30px;
				margin-top: 20px;
			}

			h1 {
				color: #2c3e50;
				margin-bottom: 30px;
				text-align: center;
			}

			.description {
				background-color: #e8f4fd;
				border-left: 4px solid #3498db;
				padding: 15px;
				margin-bottom: 25px;
				border-radius: 0 5px 5px 0;
			}

			.json-preview {
				background-color: #f8f9fa;
				border: 1px solid #e1e4e8;
				border-radius: 5px;
				padding: 15px;
				margin: 20px 0;
				font-family: "Courier New", monospace;
				white-space: pre-wrap;
				max-height: 300px;
				overflow-y: auto;
			}

			.filename-section {
				margin: 25px 0;
			}

			label {
				display: block;
				margin-bottom: 8px;
				font-weight: 600;
				color: #2c3e50;
			}

			.filename-input {
				width: 100%;
				padding: 10px;
				border: 1px solid #ddd;
				border-radius: 5px;
				font-size: 16px;
			}

			.filename-suggestion {
				color: #7f8c8d;
				font-size: 14px;
				margin-top: 5px;
				font-style: italic;
			}

			.download-btn {
				display: block;
				width: 100%;
				padding: 12px 20px;
				background-color: #3498db;
				color: white;
				border: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: 600;
				cursor: pointer;
				transition: background-color 0.3s;
				margin-top: 20px;
			}

			.download-btn:hover {
				background-color: #2980b9;
			}

			.download-btn:active {
				transform: translateY(1px);
			}

			.download-btn:disabled {
				background-color: #bdc3c7;
				cursor: not-allowed;
			}

			.format-note {
				background-color: #fff8e1;
				border: 1px solid #ffd54f;
				border-radius: 5px;
				padding: 10px;
				margin-top: 15px;
				font-size: 14px;
			}

			.loading {
				text-align: center;
				color: #7f8c8d;
				font-style: italic;
			}

			.error {
				background-color: #ffeaa7;
				border: 1px solid #fdcb6e;
				border-radius: 5px;
				padding: 15px;
				margin: 15px 0;
				color: #d63031;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<h1>Download JSON Schema</h1>

			<div class="description">
				<p>
					Download an empty JSON schema for your CV. The schema structure is
					fixed, but you can name the file appropriately.
				</p>
			</div>

			<div class="filename-section">
				<label for="filename">Filename:</label>
				<input
					type="text"
					id="filename"
					class="filename-input"
					value="John Smith CV (English)"
					placeholder="Enter filename for your CV"
				/>
				<div class="filename-suggestion">
					Suggested format: Your Name CV (Language)
				</div>
			</div>

			<div class="format-note">
				<strong>Note:</strong> The JSON structure is fixed and follows the
				standard CV format. Only the filename can be customized.
			</div>

			<h3>Schema Preview:</h3>
			<div class="json-preview" id="jsonPreview">
				<div class="loading">Loading schema...</div>
			</div>

			<button class="download-btn" id="downloadBtn" disabled>
				Download JSON Schema
			</button>
			<div id="errorMessage" class="error" style="display: none"></div>
		</div>

		<script>
			// Load schema from JSON file
			async function loadSchema() {
				try {
					const response = await fetch("../assets/data/cv-schema.json");

					if (!response.ok) {
						throw new Error(
							`Failed to load schema: ${response.status} ${response.statusText}`
						);
					}

					const schema = await response.json();

					// Display the schema in the preview area
					document.getElementById("jsonPreview").textContent = JSON.stringify(
						schema,
						null,
						2
					);

					// Enable download button
					document.getElementById("downloadBtn").disabled = false;

					return schema;
				} catch (error) {
					console.error("Error loading schema:", error);
					document.getElementById(
						"errorMessage"
					).textContent = `Error: ${error.message}. Please make sure the server is running and the schema file exists.`;
					document.getElementById("errorMessage").style.display = "block";
					document.getElementById("jsonPreview").innerHTML =
						'<div class="error">Failed to load schema file.</div>';
					return null;
				}
			}

			// Download functionality
			document
				.getElementById("downloadBtn")
				.addEventListener("click", async function () {
					const filenameInput = document.getElementById("filename");
					let filename = filenameInput.value.trim();

					// Set default filename if empty
					if (!filename) {
						filename = "cv_schema";
					}

					// Ensure .json extension
					if (!filename.toLowerCase().endsWith(".json")) {
						filename += ".json";
					}

					// Load fresh schema to ensure we have the latest version
					const schema = await loadSchema();
					if (!schema) return;

					// Create a Blob with the JSON content
					const jsonBlob = new Blob([JSON.stringify(schema, null, 2)], {
						type: "application/json",
					});

					// Create a temporary URL for the Blob
					const url = URL.createObjectURL(jsonBlob);

					// Create a temporary anchor element to trigger the download
					const a = document.createElement("a");
					a.href = url;
					a.download = filename;
					document.body.appendChild(a);
					a.click();

					// Clean up
					setTimeout(() => {
						document.body.removeChild(a);
						URL.revokeObjectURL(url);
					}, 100);
				});

			// Initialize when page loads
			document.addEventListener("DOMContentLoaded", function () {
				loadSchema();
			});
		</script>
	</body>
</html>
```

I would like to integrate them  
The main page should have card at top with title CV Generator  
Next photo load as is  
Next data load as is  
Next json scheme download page link  
We should leave pages as is for now  
Just we should order this layout as stated  
Also we could hide [Your Name] [Your Title] witch is id="header" and show it when data are loaded  
Maybe with util function
