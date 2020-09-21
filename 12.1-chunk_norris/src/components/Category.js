import axios from 'axios';
import React from 'react';
import '../style.css';

const URL = "https://api.chucknorris.io/jokes/";

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "",
      categories: [],
      category: "",
    };

    this.setup = this.setup.bind(this);
    this.getJoke = this.getJoke.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
    this.setup();
  }
  setup = async () => {
    const res = await axios.get(URL + "categories");
    this.setState({ categories: res.data.join(' ') });
    this.setState({ category: "random" });
    this.setState({ joke: res.value});
  }

  getJoke = async() => {
    let url = URL + "random";
    if (this.state.category !== "random") {
      url += "?category=" + this.state.category;
    }
    const res = await axios.get(url);
    this.setState({joke: res.data.value});
  }

  setCategory(category) {
    this.setState({ category: category });
  }

  render() {
    
    return (
      <div>
        
        <div>
           {this.state.joke}
        </div>

        <div>
          <input
            data={this.state.categories}
            placeholder="Choose Category"
            onSelect={val => { this.setCategory()}}
            onSubmit={this.getJoke}
          />

          <button onClick={() => { this.getJoke() }}>Get a joke by category</button>

        </div>
      </div>
    );
  }
}

export default Category;

  // setup() {
  //   fetch(URL + "categories")
  //     .then(resp => resp.json())
  //     .then(resp => {
  //       const categories = resp.map(val => {
  //         return { label: val, value: val };
  //       });
  //       this.setState({ categories: categories });
  //       this.setState({ category: "random" });
  //     })
  //     .then(x => {
  //       return fetch(URL + "random");
  //     })
  //     .then(resp => resp.json())
  //     .then(resp => {
  //       this.setState({ joke: resp.value});
  //     })
  //     .catch(err =>
  //       console.log(err)
  //     );
  // }

  // fetch(url)
    //   .then(resp => resp.json())
    //   .then(resp => {
    //     this.setState({ joke: resp.value });
    //   })
    //   .catch(err =>
    //     console.log(err)
    //   );