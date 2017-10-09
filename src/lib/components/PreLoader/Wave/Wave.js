import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Wave.css';

export default class Wave extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 12
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
      margin: this.props.size / 3
    }
    return (
      <div className="PreLoading-Wave">
        <span style={style} className="Wave-circle"></span>
        <span style={style} className="Wave-circle"></span>
        <span style={style} className="Wave-circle"></span>
      </div>
    );
  }
}