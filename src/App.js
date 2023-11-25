import React, {Component} from "react";
import './index.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res=>res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  render() {
    var {isLoaded, items} = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <p className='es'>
            {items.results?.map((item,index)=> (
                <p key={item.name}  className='pakemon'>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}/>
                  <span className="text">{item.name}</span>

              </p>
            ))}
          </p>
        </div>
      );
    }
  }
}

export default App;