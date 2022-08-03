import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        // console.log(response)
        response.json()
      )
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    // console.log(event);
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("Render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonstersName = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className="search-box"
          onChnageHandler={onSearchChange}
          placeholder="search monster"
        />
        <CardList monsters={filterMonstersName} />
      </div>
    );
  }
}

export default App;

// {filterMonstersName.map((monster) => {
//   return (
//     <div key={monster.id}>
//       <h1>{monster.name}</h1>
//     </div>
//   );
// })}
