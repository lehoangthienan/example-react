import React, { Component } from 'react';

import './zoom.css';


class Zoom extends Component {
  constructor(props) {
    super(props)
    this.spidermanSrc = "https://thepolitic.org/wp-content/uploads/2017/08/1499259578_4b693cc259bb72cfccc17a73f537ae81-e1504185813829.png"
    this.state = {
      backgroundImage: `url(${this.spidermanSrc})`,
      backgroundPosition: '0% 0%'
    }
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render() {
    return (
        <div className="zoom">
            <figure onMouseMove={this.handleMouseMove} style={this.state}>
                <img src={this.spidermanSrc} />
            </figure>
        </div>
    )
  }
}

export default Zoom;
