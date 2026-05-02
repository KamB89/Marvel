class MarvelService {
    _apiBase = 'https://marvel-server-zeta.vercel.app/characters';
    _apiKey = 'd4eecb0c66dedbfae4eab45d312fc1df';

    getResource = async (url) => {
        const res = await fetch(`${url}?apikey=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(this._apiBase);
        return res.results.map(this._transformCharacters);
    };

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}?id=${id}`);
        return this._transformCharacters(res.results[0]);
    };

    _transformCharacters = (char) => ({
        id: char.id,
        name: char.name,
        description: char.description || 'No description',
        thumbnail: char.thumbnail
    });
}

export default MarvelService;