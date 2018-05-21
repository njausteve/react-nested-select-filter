import React, { Component } from 'react';
import mic from '../mic.svg';
import { Row, Col } from 'antd';

export const CommandList = props => {
  const commands = props.data;

  return (
    <div className="commands">
      <div className="commands-mic">
        <img src={mic} className="mic" alt="mic" />
      </div>
      <h1 className="command-header">COMMANDS</h1>
      <div className="commands-list">
        <Row type="flex" align="middle">
          {commands.map(command => (
            <Col className="command-col grid-5-col" xs={12} sm={12} md={6}>
              <CommandListItem key={command} command={command} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export const CommandListItem = props => {
  return <p> {props.command} </p>;
};
