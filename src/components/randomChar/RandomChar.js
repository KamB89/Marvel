import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';




class RandomChar extends Component {
    constructor(props){
        super(props)
        this.updateChar()
    }
    state = {
        title: null,
        description: null,
        thumbnail: null,
        // wiki: null
    }
    marvelService  = new MarvelService()

    updateChar = ()=>{
        // const id = Math.floor(Math.random(1, 20));
        const id = Math.floor(Math.random()*20)
        this.marvelService
        .getCharacter(id)
        .then(res=>{
            this.setState({
               title: res.data.results[0].title,
               description: res.data.results[0].description,
                thumbnail: res.data.results[0].thumbnail.path + '.'+ res.data.results[0].thumbnail.extension,
                wiki: null  
            })
        })
        // .then(res => console.log(res))

        
    }

    render() {
        const { title, description, thumbnail } = this.state
        return (
            <div className="randomchar">
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img" />
                    <div className="randomchar__info">
                        <p className="randomchar__name">{title}</p>
                        <p className="randomchar__descr">
                            {description}                    </p>
                        <div className="randomchar__btns">
                            <a href="#" className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href="#" className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
}

export default RandomChar;