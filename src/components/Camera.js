import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Camera = ({camera, addCameraToCart}) => {
  return (
    <Card>
        <CardBody>
          <CardTitle>Camera Name: Nikon D3100</CardTitle>
          <CardSubtitle>Price: $369</CardSubtitle>
          <CardText>Rating: 5 stars</CardText>
          <Button
            onClick={() => addCameraToCart(camera.id)}
          >Add To Cart</Button>
        </CardBody>
      </Card>
  )
}

export default Camera;
