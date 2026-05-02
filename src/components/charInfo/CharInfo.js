import { Component } from 'react';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss';
import thor from '../../resources/img/thor.jpeg';
import MarvelService from '../../services/MarvelService';

class CharInfo extends Component {
    state = {
        loading: false,
        error: false,
<<<<<<< HEAD
        char: null
=======
        char: {}
>>>>>>> da0da98d72c9ff1245fb99a5e46985be06c040ca
    }


    marvelService = new MarvelService()


    componentDidMount() {
        this.updateChar()

    }

<<<<<<< HEAD
    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.updateChar()
        }

    }

=======
>>>>>>> da0da98d72c9ff1245fb99a5e46985be06c040ca

    updateChar = () => {
        const { charId } = this.props;
        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService.getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onCharLoaded = (char) => {
        this.setState({ char, loading: false })

    }



    render() {
<<<<<<< HEAD
        const{char, loading, error} = this.state
 
        const skeleton = char || loading|| error ? null: <Skeleton/>
 
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(error || loading || !char) ? <View char={char} /> : null
        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}

            </div>
        )
    }
}



const View = ({ char }) => {
const{title, description, thumbnail, wiki} = char
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={title} />
                <div>
                    <div className="char__info-name">{title}</div>
                    <div className="char__btns">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
=======
        return (
            <div className="char__info">
                <div className="char__basics">
                    <img src={thor} alt="abyss" />
                    <div>
                        <div className="char__info-name">thor</div>
                        <div className="char__btns">
                            <button className="button button__main">
                                <div className="inner">homepage</div>
                            </button>

                            <button className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </button>
                        </div>
>>>>>>> da0da98d72c9ff1245fb99a5e46985be06c040ca
                    </div>
                </div>
                <div className="char__descr">
                    In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    <li className="char__comics-item">
                        All-Winners Squad: Band of Heroes (2011) #3
                    </li>
                    <li className="char__comics-item">
                        Alpha Flight (1983) #50
                    </li>
                    <li className="char__comics-item">
                        Amazing Spider-Man (1999) #503
                    </li>
                    <li className="char__comics-item">
                        Amazing Spider-Man (1999) #504
                    </li>
                    <li className="char__comics-item">
                        AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                    </li>
                    <li className="char__comics-item">
                        Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                    </li>
                    <li className="char__comics-item">
                        Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                    </li>
                    <li className="char__comics-item">
                        Vengeance (2011) #4
                    </li>
                    <li className="char__comics-item">
                        Avengers (1963) #1
                    </li>
                    <li className="char__comics-item">
                        Avengers (1996) #1
                    </li>
                </ul>
            </div>
<<<<<<< HEAD
            <div className="char__descr">
             {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                <li className="char__comics-item">
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className="char__comics-item">
                    Alpha Flight (1983) #50
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #503
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #504
                </li>
                <li className="char__comics-item">
                    AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Vengeance (2011) #4
                </li>
                <li className="char__comics-item">
                    Avengers (1963) #1
                </li>
                <li className="char__comics-item">
                    Avengers (1996) #1
                </li>
            </ul>


        </>

    )
=======
        )
    }
>>>>>>> da0da98d72c9ff1245fb99a5e46985be06c040ca
}

export default CharInfo;