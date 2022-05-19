import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  Row,
  Col,
} from "reactstrap";
import { actions, Control, Errors, Form } from "react-redux-form";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../features/mainSlice";
import Loading from "./Loading";
import { fetchComment } from "../features/getDataSlice.js/commentSlice";
import { fetchDishes } from "../features/getDataSlice.js/dishesSlice";
import { baseUrl } from "../features/baseUrl";

function RenderDish({ dish }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComment("comments"));
  }, []);

  console.log(dish);

  const selectComments = useSelector((state) => state.getComment.comment);

  const isLoading = selectComments.comment.isLoading;
  //check loading
  if (isLoading) {
    //if true return loading
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    //if fasle return dish
    return (
      <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

function CommentForm() {
  const Dispatch = useDispatch();
  const stateComments = useSelector((state) => state.main.comments);
  const [postComment, setPostComment] = useState({
    date: "",
    author: "",
    id: "",
    comment: "",
    rating: "",
  });

  const handleSubmitComment = (values, e) => {
    Dispatch(actions.reset("feedback"));

    //update post commet
    postComment.date = new Date().toISOString();
    postComment.author = values.yourname;
    postComment.id = stateComments.length;
    postComment.comment = values.comment;
    postComment.rating = values.rating;
    //  dishId = 0;

    //update state
    setPostComment(postComment);

    //dispatch action add comment
    Dispatch(addComment(postComment));
    //dispatch action to reset form
    // setIsModalOpen(!isModalOpen);

    e.preventDefault();
  };

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-comment fa-lg">Write comment</span>
      </Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader>Submit Comment</ModalHeader>
        <ModalBody>
          <Form
            model="feedback"
            onSubmit={(values, e) => handleSubmitComment(values, e)}
          >
            <Row className="form-group">
              <Label htmlFor="rating">Rating</Label>
              <Control.select
                model=".rating"
                className="form-control"
                name="rating"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>
            </Row>
            <Row className="form-group">
              <Label htmlFor="yourname">Your Name</Label>
              <Control.text
                model=".yourname"
                name="yourname"
                id="yourname"
                placeholder="Your Name"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              ></Control.text>
              <Errors
                className="text-danger"
                model=".yourname"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 2 numbers",
                  maxLength: "Must be 15 number character or less",
                }}
              />
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment">Comments</Label>
              <Control.textarea
                rows="12"
                className="form-control"
                model=".comment"
                name="comment"
              />
            </Row>
            <Row className="form-group">
              <Col md={4}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
function RenderComments() {
  const stateComment = useSelector((state) => state.main.comments);

  return (
    <div>
      <h4>Comment</h4>
      <ul>
        {stateComment.map((comment) => {
          return (
            <div key={comment.id}>
              <li>
                <p>{comment.comment}</p>
                <p>Rating: {comment.rating}</p>
                <p>--{comment.author}</p>
                <p>
                  {" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const DishDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDishes("dishes"));
  }, []);

  //get dishes in store
  const selecDishes = useSelector((state) => state.getDishes.dishes.dishes);
  //get params router
  const params = useParams();
  const dishId = parseInt(params.dishId, 10);

  //filter dish
  const dish = selecDishes.filter((dishh) => dishh.id === dishId)[0];

  if (dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            {<RenderComments />}
            <CommentForm />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
