import React, { Component } from 'react';
import Shape from './Shape';

export default class ClassBasedBox extends Component {
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
        className={`section column is-two-fifths box`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Shape type="Class" shape="Box" isHovered={this.state.isHovered} />
      </section>
    );
  }
}
