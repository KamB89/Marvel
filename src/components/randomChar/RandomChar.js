import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/errorMessage';

import Spinner from '../spinner/spinner';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';




class RandomChar extends Component {


    state = {
        char: {},
        loading: true,
        error: false
    }
    marvelService = new MarvelService()

    onCharLoaded = (char) => {
        this.setState({ char, loading: false })

    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * 20) + 1
        this.onCharLoading()
        this.marvelService
            .getCharacter(id)
            // .then(res => console.log(res))
            .then(this.onCharLoaded)
            .catch(this.onError)


    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    // showAllChar = () =>{
    //     this.marvelService.getAllCharacters()
    //     .then(res=> console.log(res))
    // }


    componentDidMount() {
        this.updateChar()
        //    this.showAllChar() 

    }




    render() {


        const { char, loading, error } = this.state
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(error || loading) ? <View char={char} /> : null


        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main"
                        onClick={() => this.updateChar()}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
}

const View = ({ char }) => {
    const { thumbnail, description, title } = char
    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{title}</p>
                <p className="randomchar__descr">
                    {description}                    </p>
                <div className="randomchar__btns">
                    <button className="button button__main">
                        <div className="inner">homepage</div>
                    </button>

                    <button className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;