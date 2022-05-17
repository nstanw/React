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
import { getDishesThunk } from "../features/mainSlice";
import Loading from "./Loading";

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
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
    dispatch(getDishesThunk());
  }, []);
  
    const selectShares = useSelector((state) => state.main);

    const isLoading = selectShares.status.isLoading;


    const menu = selectShares.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        {isLoading? <Loading/> :<RenderMenuItem dish={dish} onClick={props.onClick} />}
      </div>
    );
  });

  return (
    <div className="container menu">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{menu}</h3>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Menu;
