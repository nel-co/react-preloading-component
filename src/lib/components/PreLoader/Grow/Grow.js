import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Grow.css';

export default class Grow extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 40
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render() {
    const style = {
      background: this.props.color,
      height: this.props.size,
      width: this.props.size,
    }
    return (
      <div className="PreLoading-Grow">
        <span style={style} className="Grow-circle"></span>
        <span style={style} className="Grow-circle"></span>
      </div>
    );
  }
}