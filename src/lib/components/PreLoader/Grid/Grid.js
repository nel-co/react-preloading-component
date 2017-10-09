import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

export default class Grid extends Component  {

  static defaultProps = {
    color: '#FF4601',
    size: 20
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
      width: this.props.size,
    }
    return (
      <div className="PreLoading-Grid">
        <div className="Grid-row">
          <span style={style} className="Grid-square G1"></span>
          <span style={style} className="Grid-square G2"></span>
        </div>
        <div className="Grid-row">
          <span style={style} className="Grid-square G3"></span>
          <span style={style} className="Grid-square G4"></span>
        </div>
      </div>
    );
  }
}