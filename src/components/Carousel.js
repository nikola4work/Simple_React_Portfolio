import React from "react";

import Card from "../components/Card";

import goat from "../assets/images/goat.gif";
import budget from "../assets/images/budget.gif";
import virtualfair from "../assets/images/virtualfair.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "G.O.A.T",
          subTitle: "Sneakers Website",
          imgSrc: goat,
          link: "https://ashkiani.github.io/GOAT/home.html",
          selected: false,
        },

        {
          id: 1,
          title: "Budget-Tracker",
          subTitle: "Track your Budget",
          imgSrc: budget,
          link: "https://budget-in-out.herokuapp.com/",
          selected: false,
        },

        {
          id: 2,
          title: "Virtual Fair",
          subTitle: "Search Online Jobs",
          imgSrc: virtualfair,
          link: "https://aqueous-cliffs-33447.herokuapp.com/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
