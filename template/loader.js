export async function loadJSON(fileName) {
    try {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(
                `Failed to load ${fileName}: ${response.status} ${response.statusText}`
            );
        }
        return await response.json();
    } catch (error) {
        throw new Error(
            `Error loading JSON file ${fileName}: ${error.message}`
        );
    }
}
