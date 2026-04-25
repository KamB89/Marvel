


class MarvelService {
    _apiKey = 'd4eecb0c66dedbfae4eab45d312fc1df'
    _apiBase = 'https://marvel-server-zeta.vercel.app'
      


    getResource = async (url)=>{
        let res = await fetch(url);
     


        if(!res.ok){
           throw new Error(`Could not fetched ${url}, status ${res.status} `) 
        }
return await res.json()

    }

    getAllCharacters =()=>{
        return this.getResource(`${this._apiBase}/comics?apikey=${this._apiKey}`)
    }

    getCharacter =(id)=>{
        return this.getResource(`${this._apiBase}/comics/${id}?apikey=${this._apiKey}`)
    }
}

export default MarvelService


