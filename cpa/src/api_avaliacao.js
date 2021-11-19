const API_BASE_URI = 'http://localhost:6070';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE_URI}${endpoint}`, {method: 'get', headers: {'Accept': 'application/json'}});
    const json = await req.json();

    return json;
}

export default {
    getAvaliacao: async () => {
        return [
            {
                slug: 'Avaliacao',
                title: 'Avaliacoes',
                items: await basicFetch (`/avaliacao/`)
            }
        ]
    }
}