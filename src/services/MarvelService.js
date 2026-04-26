


class MarvelService {
    _apiKey = 'd4eecb0c66dedbfae4eab45d312fc1df' //'b05298039dc55e4d0d6914ac3c1f7bc7'
    _apiBase = 'https://marvel-server-zeta.vercel.app' // 'https://superheroapi.com/api/access-token

      


    getResource = async (url)=>{
        let res = await fetch(url);
     


        if(!res.ok){
           throw new Error(`Could not fetched ${url}, status ${res.status} `) 
        }
return await res.json()

    }

    getAllCharacters = async()=>{
        const res = await this.getResource(`${this._apiBase}/comics?apikey=${this._apiKey}`)
        return res.data.results.map(this._transformCharacters)
    }

    getCharacter = async(id)=>{
        const res = await this.getResource(`${this._apiBase}/comics/${id}?apikey=${this._apiKey}`)
        return this._transformCharacters(res.data.results[0])
    }

    _transformCharacters =(char)=>{
       return ({
               title: char.title,
               description: char.description? `${char.description.slice(0, 210)}...` : `There is no description of ${char.title}`,
                thumbnail: char.thumbnail.path + '.'+ char.thumbnail.extension,
                wiki: null  
            }) 
    }
}

export default MarvelService


