import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Eye.css';

export default class Eye extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 20
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render() {
    const innerStyle = {
      background: this.props.color,
      height: this.props.size,
      width: this.props.size,
    }
    const outerStyle = {
      borderLeft: `1px solid ${this.props.color}`,
      borderRight: `1px solid ${this.props.color}`,
      height: this.props.size * 1.5,
      width: this.props.size * 1.5
    }
    return (
      <div className="PreLoading-Eye">
        <span style={innerStyle} className="Eye-circle"></span>
        <span style={outerStyle} className="Eye-circle"></span>
      </div>
    );
  }
}