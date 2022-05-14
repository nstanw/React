import React, { Component, useState } from "react";
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
import { Control, Errors, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../features/comment/commentSilce";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function CommentForm() {
  const Dispatch = useDispatch();
  const stateComments = useSelector((state) => state.addComment.comments);
  const [postComment, setPostComment] = useState({
    date:"",
    author:"",
    id:"",
    comment:"",
    rating:"",

  })

  console.log('stateComments', stateComments)

  const handleSubmitComment = (e, values) => {
    e.preventDefault();

     postComment.date = new Date().toISOString();
     postComment.author = values.yourname;
     postComment.id = stateComments.length;
     postComment.comment = values.comment;
     postComment.rating = values.rating;
    //  dishId = 0;

    // const newComment = { date, id, author, comment, rating };
    console.log("comment form submit", postComment);
    setPostComment(postComment);
    Dispatch(addComment(postComment));
    setIsModalOpen(!isModalOpen);
  };

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log("click");
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };
  return (
    <div>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-comment fa-lg">Write comment</span>
      </Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values, e) => handleSubmitComment(e, values)}>
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
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}
function RenderComments() {
  const stateComment = useSelector((state) => state.addComment.comments);
  console.log("comment in state in store render comment...", stateComment);
  return (
    <div>
      <h4>Comment</h4>
      <ul>
        {stateComment.map((comment) => {
          console.log("map comment:", comment);
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

const DishDetail = (props) => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>

          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
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
