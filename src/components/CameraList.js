import React from 'react';
import Camera from './Camera';

class CameraList extends React.Component {
  state = {
    filterPhrase: ''
  }

  render() {
    let listOfCameras = this.props.cameras
    .filter(camera => camera.title.includes(this.state.filterPhrase))
    .map(camera =>
      <Camera key={camera.id} camera={camera}
        addCameraToCart={this.prop.addCameraToCart} />
    )
    return (
      <div>
        <input
          type="text"
          value={this.state.filterPhrase}
          onChange={e => this.setState({ filterPhrase: e.target.value })}
        />
        {listOfCameras}
      </div>
    )
  }
}

export default CameraList;
