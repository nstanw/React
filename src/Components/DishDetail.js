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
import { FadeTransform, Fade, Stagger } from "react-animation-components";
import { actions, Control, Errors, Form } from "react-redux-form";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import {
  fetchComment,
  postCommentApi,
} from "../features/getDataSlice.js/commentSlice";
import { fetchDishes } from "../features/getDataSlice.js/dishesSlice";
import { baseUrl } from "../features/baseUrl";
import RenderError from "./noiticeError";

function RenderDish({ dish }) {
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
    >
      <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function CommentForm() {
  const Dispatch = useDispatch();
  const listCommentServer = useSelector(
    (state) => state.getComment.comment.comment
  );
  const [postComment, setPostComment] = useState({
    date: "",
    author: "",
    id: "",
    comment: "",
    rating: "",
  });

  const params = useParams();
  const handleSubmitComment = (values, e) => {
    const dishId = parseInt(params.dishId, 10);
    //update post commet
    postComment.date = new Date().toISOString();
    postComment.author = values.yourname;
    postComment.id = listCommentServer.length;
    postComment.comment = values.comment;
    postComment.rating = values.rating;
    postComment.dishId = dishId;

    //dispatch action add comment
    Dispatch(postCommentApi(postComment));

    //dispatch action to reset form
    setIsModalOpen(!isModalOpen);
    Dispatch(actions.reset("feedback"));

    setPostComment(postComment);
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
function RenderComments({ listComments }) {
  const params = useParams();
  const dishID = parseInt(params.dishId, 10);
  const DishComment = listComments.filter(
    (comment) => comment.dishId === dishID
  );
  return (
    <div>
      <h4>Comment</h4>
      <ul>
        <Stagger in>
          {DishComment.map((comment) => {
            return (
              <Fade in>
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
              </Fade>
            );
          })}
        </Stagger>
      </ul>
    </div>
  );
}

const DishDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDishes("dishes"));
    dispatch(fetchComment("comments"));
  }, []);

  //get dishes in store
  const selecDishes = useSelector((state) => state.getDishes.dishes);
  const selecComments = useSelector((state) => state.getComment.comment);
  const listComments = selecComments.comment;

  //isLoading Dish & errr
  const isLoadingDish = selecDishes.isLoading;
  const isErrDish = selecDishes.isErr;
  const errMessDish = selecDishes.errMess;

  const isLoadingComment = selecComments.isLoading;
  const isErrComment = selecComments.isErr;
  const errMessComment = selecComments.errMess;

  //get params router
  const params = useParams();
  const dishId = parseInt(params.dishId, 10);
  if (isErrDish) {
    var errorDish = selecDishes.errMess;

    var dish = {
      error: errorDish,
      name: "error",
    };
  } else {
    //filter dish
    var dish = selecDishes.dishes.filter((dishh) => dishh.id === dishId)[0];
  }

  if (dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            {isLoadingDish ? (
              <BreadcrumbItem active></BreadcrumbItem>
            ) : (
              <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            )}
          </Breadcrumb>
          {isLoadingDish ? (
            <Loading />
          ) : isErrDish ? (
            <div className="col-12">
              <h3>{errMessDish}</h3>
              <hr />
            </div>
          ) : (
            <div className="col-12">
              <h3>{dish.name}</h3>
              <hr />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {isLoadingDish ? (
              <Loading />
            ) : isErrDish ? (
              <RenderError error={errMessDish} />
            ) : (
              <RenderDish dish={dish} />
            )}
          </div>
          <div className="col-12 col-md-5 m-1">
            {isLoadingComment ? (
              <Loading />
            ) : isErrComment ? (
              <RenderError error={errMessComment} />
            ) : (
              <RenderComments listComments={listComments} />
            )}

            <CommentForm />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
