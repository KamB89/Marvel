class MarvelService {
    _apiBase = '/api/marvel';

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(this._apiBase);
        return res.data.results.map(this._transformCharacters);
    };

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}/${id}`);
        return this._transformCharacters(res.data.results[0]);
    };

    _transformCharacters = (char) => ({
        id: char.id,
        title: char.title,
        description: char.description || 'No description',
        thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`
    });
}

export default MarvelService;