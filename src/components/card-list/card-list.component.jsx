import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card-component";

class CardList extends Component {
  render() {
    // this.props.monster fetch EMPTY ARRAY for the first time
    // as we declare monsters as monsters=[]
    // console.log(this.props.monsters);
    // console.log("render from CardList");

    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
