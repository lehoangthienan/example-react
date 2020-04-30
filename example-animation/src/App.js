import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isZoom: false,
    }
  }

  changeZoom = () => {
    const { isZoom } = this.state
    this.setState({
      isZoom: !isZoom,
    })
  }


  render() {
    const { isZoom } = this.state
    return (
      <div className="main">
        <div className="single-column scroll">
          <a href="#"><img src="https://picsum.photos/300/300?random=1" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=2" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=3" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=4" alt="image"/></a>
        </div>
        <div className="single-column">
          <a href="#"><img src="https://picsum.photos/300/300?random=5" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=6" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=7" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=8" alt="image"/></a>
        </div>
        <div className="single-column">
        <a href="#">
            <img
              className="img-presentation"
              src="https://picsum.photos/300/300?random=13"
              alt="image"
            />
          </a>
          <a href="#">
            <img
              className="img-presentation-1"
              src="https://picsum.photos/300/300?random=14"
              alt="image"
            />
          </a>
          <a href="#" onClick={this.changeZoom}>
            <img
              className={`${isZoom ? 'img-presentation-zoom' : 'img-presentation-not-zoom'}`}
              src="https://picsum.photos/300/300?random=11"
              alt="image"
              />
          </a>
          <a href="#"><img src="https://picsum.photos/300/300?random=12" alt="image"/></a>
        </div>
        <div className="single-column">
          <a href="#"><img src="https://picsum.photos/300/300?random=9" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=10" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=15" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=16" alt="image"/></a>
        </div>
        <div className="single-column">
          <a href="#"><img src="https://picsum.photos/300/300?random=17" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=18" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=19" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=20" alt="image"/></a>
        </div>
        <div className="single-column">
          <a href="#"><img src="https://picsum.photos/300/300?random=21" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=22" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=23" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=24" alt="image"/></a>
        </div>
        <div className="single-column">
          <a href="#"><img src="https://picsum.photos/300/300?random=25" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=26" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=27" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=28" alt="image"/></a>
        </div>
        <div className="single-column">
          <a href="#"><img src="https://picsum.photos/300/300?random=29" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=30" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=31" alt="image"/></a>
          <a href="#"><img src="https://picsum.photos/300/300?random=32" alt="image"/></a>
        </div>
      </div>
    )
  }
}

export default App;
