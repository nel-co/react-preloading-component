import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Text.css';

export default class Text extends Component  {

  static defaultProps = {
    color: '#FF4601',
    text: 'Loading',
    fontSize: '1.5em'
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired
  }

  render() {
    const style = {
      color: this.props.color,
      fontSize: this.props.fontSize
    }
    return (
      <div className="PreLoading-Text">
        <div style={style} className="PreLoading-Text-wrapper">
          {this.props.text}
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    );
  }
}