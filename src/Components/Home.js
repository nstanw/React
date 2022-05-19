import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { fetchData } from "../features/getDataSlice.js/promosSlice";
import { getDishesThunk } from "../features/mainSlice";
import Loading from "./Loading";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishesThunk());
    dispatch(fetchData("dishes"));
  }, []);

  const selectShares = useSelector((state) => state.main);

  const isLoading = selectShares.status.isLoading;

  //selec state in json-server
  const selectDishApi = useSelector((state) => state.getData);
console.log(selectDishApi)
  const dish = selectShares.dishes.filter((dish) => dish.featured)[0];
  const promotion = selectShares.promotions.filter((dish) => dish.featured)[0];
  const leader = selectShares.leaders.filter((dish) => dish.featured)[0];

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          {isLoading ? <Loading /> : <RenderCard item={dish} />}
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
