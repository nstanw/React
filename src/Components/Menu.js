import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { fetchDishes } from "../features/getDataSlice.js/dishesSlice";
import { baseUrl } from "../features/baseUrl";

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDishes("dishes"));
  }, []);

  const selectDishes = useSelector((state) => state.getDishes.dishes);

  const isLoading = selectDishes.isLoading;
  if (isLoading) {
    var menu = selectDishes.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Loading />
        </div>
      );
    });
  } else {
    var menu = selectDishes.dishes.map((dish) => {
      return (
        <div className="col-md-5 m-1" key={dish.id}>
          <RenderMenuItem dish={dish} />
        </div>
      );
    });
  }

  return (
    <div className="container menu">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="row col-12">
          {menu}
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Menu;
