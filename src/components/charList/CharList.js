import './charList.scss';

import { Component } from 'react';
import MarvelService from '../../services/MarvelService';


class CharList extends Component {

    state = {
        chars: []
    }

    componentDidMount() {
        const marvelService = new MarvelService()

        marvelService.getAllCharacters()
            .then(res => {
                console.log(res)
                return res
            })
            .then(res => this.setState({
                chars: res

            }))

        



    }

    render() {

    const { chars } = this.state
    return (
        <div className="char__list">
            <ul className="char__grid">
                {chars.slice(0,9).map((char, i) => (
                    <li className="char__item" key={char.id}>
                        <img src={char.thumbnail} alt={char.title} />
                        <div className="char__name">{char.title}</div>
                    </li>
                ))}
                
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}
}








export default CharList;