import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>
                        <p>{props.dish.name}</p>
                    </CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price}/-
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;