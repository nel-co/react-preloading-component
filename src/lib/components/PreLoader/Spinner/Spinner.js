import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

export default class Spinner extends Component  {

  static defaultProps = {
    color: '#FF4601',
    secondaryColor: '#e6e6e6',
    size: 40
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }

  render() {
    const style = {
      borderColor: this.props.secondaryColor,
      borderTopColor: this.props.color,
      borderSize: this.props.size / 6,
      height: this.props.size,
      width: this.props.size,
    }
    return (
      <div className="PreLoading-Spinner">
        <span style={style} className="Spinner-circle"></span>
      </div>
    );
  }
}