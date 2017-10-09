import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Triple.css';

export default class Triple extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 40
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render() {
    const smallCircle = {
      borderColor: this.props.color,
      height: this.props.size / 2,
      width: this.props.size / 2,
    }
    const middleCircle = {
      borderColor: this.props.color,
      height: this.props.size / 1.333,
      width: this.props.size / 1.333,
    }
    const bigCircle = {
      borderColor: this.props.color,
      height: this.props.size,
      width: this.props.size,
    }
    return (
      <div className="PreLoading-Triple">
        <div style={bigCircle} className="PreLoading-Circle C1">
          <div style={middleCircle} className="PreLoading-Circle C2">
            <div style={smallCircle} className="PreLoading-Circle C3"></div>            
          </div>
        </div>
      </div>
    );
  }
}