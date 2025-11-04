// State
const photoState = {
	defaultPhoto: "./assets/images/cv_photo.png",
	currentPhoto: "./assets/images/cv_photo.png",
	photoElement: null,
	uploadContainer: null,
	uploadButton: null,
};

// Core Functions
export function initPhotoUpload() {
	photoState.photoElement = document.getElementById("cv-photo");
	photoState.uploadContainer = document.getElementById(
		"photo-upload-container"
	);

	if (!photoState.photoElement || !photoState.uploadContainer) {
		console.warn("Photo upload elements not found");
		return;
	}

	createUploadInterface();
	loadSavedPhoto();
	setupHoverEvents();
}

export function createUploadInterface() {
	photoState.uploadButton = createImageUploadButton(handleImageUpload, {
		buttonText: "Upload Photo",
		buttonClass: "image-upload-btn",
	});

	photoState.uploadContainer.appendChild(photoState.uploadButton);
	// Hide upload button initially
	photoState.uploadContainer.style.display = "none";
}

export function createImageUploadButton(onLoad, options = {}) {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = "image/*";
	input.style.display = "none";

	const button = document.createElement("button");
	button.textContent = options.buttonText || "Upload Photo";
	button.className = options.buttonClass || "image-upload-btn";

	input.addEventListener("change", () => handleFileSelect(input, onLoad));
	button.addEventListener("click", () => input.click());

	return button;
}

export function setupHoverEvents() {
	const photoContainer = document.querySelector(".photo-container");

	if (photoContainer) {
		photoContainer.addEventListener("mouseenter", showUploadButton);
		photoContainer.addEventListener("mouseleave", hideUploadButton);
	}

	// Also handle hover on the upload container itself
	if (photoState.uploadContainer) {
		photoState.uploadContainer.addEventListener("mouseenter", showUploadButton);
		photoState.uploadContainer.addEventListener("mouseleave", hideUploadButton);
	}
}

export function showUploadButton() {
	if (photoState.uploadContainer) {
		photoState.uploadContainer.style.display = "block";
	}
}

export function hideUploadButton() {
	if (photoState.uploadContainer) {
		// Small delay to allow clicking the button
		setTimeout(() => {
			if (
				photoState.uploadContainer &&
				!photoState.uploadContainer.matches(":hover") &&
				!document.querySelector(".photo-container:hover")
			) {
				photoState.uploadContainer.style.display = "none";
			}
		}, 300);
	}
}

export function handleFileSelect(input, onLoad) {
	const file = input.files[0];
	if (!file) return;

	if (!validateImageFile(file)) return;

	const reader = new FileReader();
	reader.onload = (e) => onLoad(e.target.result, file);
	reader.readAsDataURL(file);
}

export function validateImageFile(file) {
	if (!file.type.startsWith("image/")) {
		alert("Please select a valid image file");
		return false;
	}

	if (file.size > 5 * 1024 * 1024) {
		alert("Please select an image smaller than 5MB");
		return false;
	}

	return true;
}

export function handleImageUpload(imageData) {
	photoState.currentPhoto = imageData;
	updatePhotoDisplay();
	savePhotoToStorage();
	// Hide upload button after upload
	hideUploadButton();
}

export function updatePhotoDisplay() {
	if (photoState.photoElement) {
		photoState.photoElement.src = photoState.currentPhoto;
	}
}

// Storage Functions
export function savePhotoToStorage() {
	try {
		localStorage.setItem("cv-custom-photo", photoState.currentPhoto);
	} catch (error) {
		console.warn("Could not save photo to localStorage:", error);
	}
}

export function loadSavedPhoto() {
	try {
		const savedPhoto = localStorage.getItem("cv-custom-photo");
		if (savedPhoto) {
			photoState.currentPhoto = savedPhoto;
			updatePhotoDisplay();
		}
	} catch (error) {
		console.warn("Could not load photo from localStorage:", error);
	}
}

export function clearPhotoStorage() {
	try {
		localStorage.removeItem("cv-custom-photo");
	} catch (error) {
		console.warn("Could not clear photo from localStorage:", error);
	}
}
