import OpenAPISnippet from 'openapi-snippet';

async function obtenerSnippets() {
    try {
        const response = await fetch("http://localhost:8080/api-docs-json");
        const desc = await response.json();
        console.log(desc);

        const openApi = desc;
        const targets = ['node_unirest'];

        const results = OpenAPISnippet.getSnippets(openApi, targets);
    } catch (error) {
        console.error("Error al obtener el archivo JSON:", error);
    }
}

obtenerSnippets();
