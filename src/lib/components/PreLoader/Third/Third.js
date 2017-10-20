import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Third.css';

export default class Third extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 40
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render() {
    const style = {
      border: `${this.props.size / 6.6}px solid transparent`,
      borderTopColor: this.props.color,
      borderRightColor: this.props.color,
      borderBottomColor: this.props.color,
      borderSize: this.props.size / 6.6,
      height: this.props.size,
      width: this.props.size,
    }
    return (
      <div className="PreLoading-Third">
        <span style={style} className="Third-circle"></span>
      </div>
    );
  }
}