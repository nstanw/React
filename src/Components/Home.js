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

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("promotions"));
    dispatch(fetchDishes("dishes"));
    dispatch(fetchLeader("leaders"));
  }, []);

  //isloading
  const isLoadingDishes = useSelector(
    (state) => state.getDishes.dishes.isLoading
  );
  const isLoadingLeader = useSelector(
    (state) => state.getLeader.leader.isLoading
  );
  const isLoadingPromotion = useSelector(
    (state) => state.getData.promotions.isLoading
  );

  //is err
  const isErrDishes = useSelector((state) => state.getDishes.dishes.isErr);
  const isErrPromo = useSelector((state) => state.getData.promotions.isErr);
  const isErrLeader = useSelector((state) => state.getLeader.leader.isErr);

  //data in api
  var selectListDish = useSelector((state) => state.getDishes.dishes);
  var selectListPromo = useSelector((state) => state.getData.promotions);
  var selectListLeader = useSelector((state) => state.getLeader.leader);

  //check err
  if (isErrDishes) {
    var error = selectListDish.errMess;
  } else {
    var dish = selectListDish.dishes[0];
  }
  if (isErrPromo) {
    var errorPromo = selectListPromo.errMess;
  } else {
    var promotion = selectListPromo.promotions[0];
  }
  if (isErrLeader) {
    var errorLeader = selectListLeader.errMess;
  } else {
    var leader = selectListLeader.leader[0];
  }

  //message error getDishes.dishes.dishes[0]

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          {isLoadingDishes ? (
            <Loading />
          ) : isErrDishes ? (
            <RenderError error={error} />
          ) : (
            <RenderCard item={dish} />
          )}
        </div>
        <div className="col-12 col-md m-1">
          {isLoadingPromotion ? (
            <Loading />
          ) : isErrPromo ? (
            <RenderError error={errorPromo} />
          ) : (
            <RenderCard item={promotion} />
          )}
        </div>
        <div className="col-12 col-md m-1">
          {isLoadingLeader ? (
            <Loading />
          ) : isErrLeader ? (
            <RenderError error={errorLeader} />
          ) : (
            <RenderCard item={leader} />
          )}
        </div>
      </div>
    </div>
  );
}
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

function RenderError({ error }) {
  console.log("error bat:", error)
  return (
    <Card>
      <CardBody>
        <CardTitle>{error}</CardTitle>
      </CardBody>
    </Card>
  );
}
export default Home;
