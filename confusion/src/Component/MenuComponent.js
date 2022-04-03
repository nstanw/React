import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  rederDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top width="50%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt="image"></CardImg>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
              {/* <p>{dish.description}</p> */}
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-6 cold-md-5 m-1">
            {this.rederDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
