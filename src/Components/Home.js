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
import { baseUrl } from "../features/baseUrl";
import { fetchDishes } from "../features/getDataSlice.js/dishesSlice";
import { fetchLeader } from "../features/getDataSlice.js/leaderSlice";
import { fetchData } from "../features/getDataSlice.js/promosSlice";
import Loading from "./Loading";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={baseUrl + item.image} alt={item.name} />
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
    dispatch(fetchData("promotions"));
    dispatch(fetchDishes("dishes"));
    dispatch(fetchLeader("leaders"));
  }, []);

  const selectShares = useSelector((state) => state.main);

  const isLoading = selectShares.status.isLoading;

  //selec state in json-server
  const selectPromotions = useSelector(
    (state) => state.getData.promotions.promotions
  );
  const selectDishes = useSelector((state) => state.getDishes.dishes.dishes);
  const selectLeader = useSelector((state) => state.getLeader.leader.leader);

  const dish = selectDishes.filter((dish) => dish.featured)[0];
  const promotion = selectPromotions.filter((dish) => dish.featured)[0];
  const leader = selectLeader.filter((dish) => dish.featured)[0];

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          {isLoading ? <Loading /> : <RenderCard item={dish} />}
        </div>
        <div className="col-12 col-md m-1">
          {isLoading ? <Loading /> : <RenderCard item={promotion} />}
        </div>
        <div className="col-12 col-md m-1">
          {isLoading ? <Loading /> : <RenderCard item={leader} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
