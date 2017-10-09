import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Pop.css';

export default class Pop extends Component  {

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
      height: this.props.size,
      width: this.props.size,
      margin: this.props.size / 2
    }
    return (
      <div className="PreLoading-Pop">
        <span style={style} className="Pop-circle"></span>
        <span style={style} className="Pop-circle"></span>
        <span style={style} className="Pop-circle"></span>
      </div>
    );
  }
}