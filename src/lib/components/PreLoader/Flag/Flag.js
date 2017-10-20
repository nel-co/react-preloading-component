import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Flag.css';

export default class Flag extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 10
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render() {
    const style = {
      background: this.props.color,
      margin: this.props.size / 2.5,
      height: this.props.size,
      width: this.props.size,
    }
    return (
      <div className="PreLoading-Flag">
        <div className="PreLoading-row">
          <span style={style} className="Flag-circle"></span>
          <span style={style} className="Flag-circle"></span>
          <span style={style} className="Flag-circle"></span>
        </div>
        <div className="PreLoading-row">
          <span style={style} className="Flag-circle"></span>
          <span style={style} className="Flag-circle"></span>
          <span style={style} className="Flag-circle"></span>
        </div>
        <div className="PreLoading-row">
          <span style={style} className="Flag-circle"></span>
          <span style={style} className="Flag-circle"></span>
          <span style={style} className="Flag-circle"></span>
        </div>
      </div>
    );
  }
}