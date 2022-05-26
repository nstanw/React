import React, { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  
} from "reactstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../features/baseUrl";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { fetchLeader } from "../features/getDataSlice.js/leaderSlice";
import RenderError from "./noiticeError";

function RenderLeader({ leader }) {
  return (
   
      <Card >
        <CardImg  src={baseUrl + leader.image} alt={leader.name} />
        <div body className="ml-5">
          <div heading>{leader.name}</div>
          <p>{leader.designation}</p>
          <p>{leader.description}</p>
        </div>
      </Card>
   
  );
}

function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLeader("leaders"));
  }, []);
  const selectLeader = useSelector((state) => state.getLeader.leader);

  console.log("selectleader", selectLeader);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Started in 2010, Ristorante con Fusion quickly established itself as
            a culinary icon par excellence in Hong Kong. With its unique brand
            of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong. Featuring four of
            the best three-star Michelin chefs in the world, you never know what
            will arrive on your plate the next time you visit us.
          </p>
          <p>
            The restaurant traces its humble beginnings to{" "}
            <em>The Frying Pan</em>, a successful chain started by our CEO, Mr.
            Peter Pan, that featured for the first time the world's best
            cuisines in a pan.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">HK Fine Foods Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
        </div>
        {selectLeader.isLoading ? (
          <Loading />
        ) : selectLeader.isErr ? (
          <RenderError error={selectLeader.errMess} />
        ) : (
          <LeaderList listLeader={selectLeader.leader} />
        )}
      </div>
    </div>
  );
}
function LeaderList({ listLeader }) {
  const leaders = listLeader.map((leader) => {
    return (
      <div key={leader.id}>
        <div className="col-12 mt-2">
          <RenderLeader leader={leader} />
        </div>
      </div>
    );
  });

  if (listLeader.isLoading) {
    return <Loading />;
  } else if (listLeader.errMess) {
    return (
      <div className="col-12">
        <h4>{listLeader.errMess}</h4>
      </div>
    );
  } else {
    return (
      <div list>
        <div in>{leaders}</div>
      </div>
    );
  }
}

export default About;
