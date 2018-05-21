import React, { Component } from "react";
import "./App.css";
import mic from "./mic.svg";
import { Tabs, Row, Col, Icon, Select, Form } from "antd";

import WakeWords from "./components/wakewords";
import CommandForm from "./components/commandForm";
import { CommandList, CommandListItem } from "./components/commandList";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

class App extends Component {
  state = {
    data: []
  };

  updateList(params) {
    this.setState({
      data: params[0]
    });
  }

  render() {
    const help = (
      <Icon type="question-circle" style={{ fontSize: "2em", color: "#08c" }} />
    );

    function callback(key) {}

    return (
      <div className="container">
        <Tabs
          defaultActiveKey="intent"
          onChange={callback}
          animated={false}
          size="large"
        >
          <TabPane tab="INTENT RECOGNITION" key="intent">
            <CommandForm callback={this.updateList.bind(this)} />
            <CommandList data={this.state.data} />
          </TabPane>

          <TabPane tab="WAKEWORDS" key="wakewords">
            <WakeWords />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
