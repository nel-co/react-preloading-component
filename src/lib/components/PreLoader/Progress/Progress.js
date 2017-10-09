import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Progress.css';

export default class Progress extends Component  {

  static defaultProps = {
    color: '#FF4601',
    background: '#EEEEEE',
    speed: '12s'
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired
  }

  render() {
    const backgroundStyle = {
      background: this.props.background,      
    }
    const barStyle = {
      background: this.props.color,
      animationDuration: this.props.speed
    }
    return (
      <div className="PreLoading-Progress">
        <div style={backgroundStyle} className="Progress-wrapper">
          <div style={barStyle} className="Progress-bar"></div>
        </div>
      </div>
    );
  }
}