import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Bounce.css';

export default class Bounce extends Component  {

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
      <div className="PreLoading-Bounce">
        <span style={style} className="Bounce-circle"></span>
      </div>
    );
  }
}