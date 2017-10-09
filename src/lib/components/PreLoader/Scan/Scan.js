import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Scan.css';

export default class Scan extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 25
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render() {
    const style = {
      background: this.props.color,
      margin: this.props.size / 10,
      height: this.props.size,
      width: this.props.size / 2.5
    }

    const middleShape = {
      background: this.props.color,
      margin: this.props.size / 10,
      height: this.props.size * 1.25,
      width: this.props.size / 2.5
    }
    return (
      <div className="PreLoading-Scan">
        <span style={style} className="Scan-shape"></span>
        <span style={middleShape} className="Scan-shape"></span>
        <span style={style} className="Scan-shape"></span>
      </div>
    );
  }
}