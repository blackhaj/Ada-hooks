import React, { Component } from 'react';
import Shape from './Shape';

export default class ClassBasedCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {
    return (
      <section
        class={`section column is-two-fifths circle box`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Shape type="Class" shape="Circle" isHovered={this.state.isHovered} />
      </section>
    );
  }
}
