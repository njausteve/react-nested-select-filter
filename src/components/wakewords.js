import React, { Component } from 'react';
import mic from '../mic.svg';
class WakeWords extends Component {
  render() {
    return (
      <div>
        <div className="commands-mic">
          <img src={mic} className="mic" alt="mic" />
        </div>
        <h2 className="command-header">LOGS</h2>
      </div>
    );
  }
}

export default WakeWords;
