import React, { Component } from 'react';
import './App.css';
import { Tabs, Icon } from 'antd';

import WakeWords from './components/wakewords';
import CommandForm from './components/commandForm';
import CommandList from './components/commandList';

const TabPane = Tabs.TabPane;

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
      <Icon type="question-circle" style={{ fontSize: '2em', color: '#08c' }} />
    );

    const size = () => {
      if (window.innerWidth < 576) {
        return 'default';
      }
      return 'large';
    };

    function callback(key) {}

    return (
      <div className="container">
        <Tabs
          defaultActiveKey="intent"
          onChange={callback}
          animated={false}
          tabBarExtraContent={help}
          size={size()}
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
