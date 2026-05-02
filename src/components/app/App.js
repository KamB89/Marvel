import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import Errorboundary from "../errorBoundary/Errorboundary";

import decoration from '../../resources/img/vision.png';

class App extends Component {


    state = {
        charSelected: null
    }
    onCharSelected = (id) => {
        this.setState({
            charSelected: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                   <Errorboundary>
                      <RandomChar />
                   </Errorboundary>
                    
                    <div className="char__content">
                     <Errorboundary>
                         <CharList onCharSelected={this.onCharSelected} />
                     </Errorboundary>

                        <Errorboundary>
                            <CharInfo charId={this.state.charSelected} />
                        </Errorboundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}




export default App;