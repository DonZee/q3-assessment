import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Nav from './components/Nav';
import Camera from './components/Camera';
import CameraList from './components/CameraList';
import Cart from './components/Cart';

class App extends Component {
  state = {
    cameras: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8082/api/cameras`)
      .then(response => this.setState({ cameras: response.data }))
  }

  addCameraToCart = (cameraId) => {
    axios.patch(`http://localhost:8082/api/cameras/cart/add/${cameraId}`)
      .then(response => {
        let theOthers = this.state.cameras.filter(camera => camera.id != response.data.id)
        let newState = [...theOthers, response.data].sort((a, b) => a.id > b.id)
        this.setState({ cameras: newState })
      })
  }

  removeBookFromCart = (cameraId) => {
    axios.patch(`http://localhost:8082/api/cameras/cart/remove/${cameraId}`)
      .then(response => {
        let theOthers = this.state.cameras.filter(camera => camera.id != response.data.id)
        let newState = [...theOthers, response.data].sort((a, b) => a.id > b.id)
        this.setState({ cameras: newState })
      })
  }

  booksInCart = () => {
    return this.state.cameras.filter(camera => camera.inCart)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <nav/>
            <CameraList addCameraToCart={this.addCameraToCart} cameras={this.state.cameras} />
          </Col>
          <Col>
            <Cart items={this.camerasInCart()} removeCameraFromCart={this.removeCameraFromCart}/>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
