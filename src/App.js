import React, { Component } from "react";
import "./App.css";
import { Button, Row, Col, Icon } from 'antd';


class App extends Component {
  state = {
    data: []
  };

  updateList(params) {
    console.log(params);
    this.setState({ data: params[0] });
  }

  render() {
    return (
      <div className="container">
     
        <CommandForm callback={this.updateList.bind(this)} />
        <CommandList data={this.state.data} />
      </div>
    );
  }
}

const CommandList = props => {
  const commands = props.data;

  return (
    <div>
      <Button type="primary">Button</Button>
      <ul>{commands.map(command => <CommandListItem key={command} command={command} />)}</ul>
    </div>
  );
};

const CommandListItem = props => {
  return <li >{props.command}</li>;
};

class CommandForm extends Component {
  state = {
    selectedCategory: "",
    selectedLanguage: "",
    categories: [],
    languages: []
  };

  UNSAFE_componentWillMount() {
    const uniqueCategories = Dataset.map(value => value.category).filter(
      (value, index, self) => self.indexOf(value) === index
    );

    const defaultCategory = uniqueCategories[0];
    const defaultLanguage = this.filterLanguages(
      uniqueCategories,
      defaultCategory
    )[0].language;


    this.setState({
      categories: uniqueCategories,
      languages: this.filterLanguages(uniqueCategories, defaultCategory),
      selectedCategory: defaultCategory,
      selectedLanguage: defaultLanguage
    });

    this.filterCommands(defaultLanguage);
  }

  filterLanguages = (categories, selectedCategory) => {
    //filter on componentWillmount
    if (this.state.categories.length === 0) {
      return Dataset.filter(value => value.category === selectedCategory);
    }

    // filter onChange
    return Dataset.filter(value => value.category === selectedCategory);
  };

  filterCommands = language => {
    let filteredCommands = Dataset.filter(
      value => value.language === language
    ).map(value => value.commands);

    this.props.callback(filteredCommands);
  };

  handleLanguageChange = event => {
    this.setState({ selectedLanguage: event.target.value });

    this.filterCommands(event.target.value);
  };

  handleCategoryChange = event => {
    this.setState({
      selectedCategory: event.target.value,
      selectedLanguage: this.filterLanguages(
        this.state.categories,
        event.target.value
      )[0].language,
      languages: this.filterLanguages(this.state.categories, event.target.value)
    });

    this.filterCommands(
      this.filterLanguages(this.state.categories, event.target.value)[0]
        .language
    );
  };

  render() {
    const { selectedCategory, selectedLanguage } = this.state;

    return (
      <form>
        <div className="">

          <Row >
            <Col span={12}>
              <select
                name="selectedCategory"
                className="form-control"
                defaultValue={selectedCategory}
                onChange={this.handleCategoryChange}
              >
                {this.state.categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </Col>
            <Col span={12}>
              <select
                name="selectedLanguage"
                className="form-control"
                defaultValue={selectedLanguage}
                onChange={this.handleLanguageChange}
              >
                {this.state.languages.map(value => (
                  <option key={value.language} value={value.language}>{value.language}</option>
                ))}
              </select>

 <Icon type="question-circle" style={{ fontSize: 30, color: '#137ffd' }}/>
            </Col>
           
          </Row>

        </div>
      </form>
    );
  }
}

const Dataset = [
  {
    category: "generic",
    language: "English",
    commands: [
      "play",
      "music",
      "Pause",
      "Mute",
      "Next song",
      "Turn on the tv",
      "Lower temperature",
      "Raise temperature",
      "Set an alarm for 8 am",
      "Turn on the lights",
      "Turn off the lights",
      "What time is it?",
      "Open Curtains",
      "Close curtains",
      "Tune In",
      "traffic information",
      "Turn on home security",
      "Why is the maintenance light on ?",
      "koreean",
      "Go to speakers",
      "Go to Thermostat",
      "Go to Home Hub",
      "Go to menu",
      "Go to personalization",
      "Change language",
      "Volume up",
      "Open the gas tank",
      "Resume",
      "Skip",
      "unmute",
      "Volume down",
      "Off",
      "play some rock",
      "Go to sleep",
      "Play some jazz",
      "Turn off the TV",
      "How long have i run?"
    ]
  },
  {
    category: "generic",
    language: "Korean",
    commands: [
      "조명 끄기",
      "다음 노래",
      "내가 얼마나 오래 뛰었 니?",
      "온도 상승",
      "한국어",
      "묵자",
      "오전 8시에 알람 설정",
      "이력서",
      "중지",
      "튜닝",
      "교통 정보",
      "맞춤 설정으로 이동",
      "낮은 온도",
      "버킷",
      "불을 켜다",
      "메뉴로 이동",
      "볼륨 작게",
      "몇 시죠?",
      "홈 허브로 이동",
      "온도 조절기로 이동",
      "커튼 닫기",
      "TV 끄기",
      "언어 변경",
      "음소거를 해제하다",
      "연사로 이동",
      "음악",
      "재즈 연주",
      "잠에 가라.",
      "바위를 치다",
      "티비를 켜라",
      "오픈 커튼",
      "주택 보안 켜기",
      "볼륨 업",
      "떨어져서",
      "놀이",
      "가스 탱크 열어 라.",
      "유지 관리 표시등이 켜져있는 이유는 무엇입니까?"
    ]
  },
  {
    category: "generic",
    language: "German",
    commands: [
      "Wiedergabe",
      "Pause",
      "Ton aus",
      "NaSchstes Lied",
      "Fernseher einschalten",
      "Temperatur senken",
      "Temperatur erhohen",
      "SteIle den Wecker auf 8 Uhr",
      "Licht aus",
      "Licht an",
      "Wie spat ist es?",
      "Offne die VorhAnge",
      "Vorhange schlieBen",
      "Verkehrsmeldungen einbienden",
      "Homesecurity einschatten",
      "Warum Ieuchtet das Wartungsiampchen ?",
      "Lauter",
      "Offne den Tank",
      "Weiter",
      "Weiter / Uberspringen",
      "Ton an",
      "Leiser",
      "Aus",
      "Spiel Rock",
      "Schtafmodus",
      "Spieie Jazz",
      "Fernseher ausschalten"
    ]
  },
  {
    category: "Mandrian",
    language: "Chinese",
    commands: [
      "温度较低",
      "玩",
      "提高音量",
      "去讲话者",
      "去个性化",
      "交通信息",
      "改变语言",
      "音乐",
      "打开储气罐",
      "关掉电视机",
      "打开家庭安全",
      "把灯关掉",
      "恢复",
      "朝鲜的",
      "为什么维护点亮？",
      "暂停",
      "离",
      "关闭窗帘",
      "转到Home Hub",
      "进入菜单",
      "收听",
      "早上8点设置闹钟",
      "打开灯",
      "跳跃",
      "几点了？",
      "音量减小",
      "打开电视",
      "玩一些摇滚",
      "去恒温器",
      "我跑了多久？",
      "提高温度",
      "下一首歌",
      "取消静音",
      "静音",
      "玩一些爵士乐",
      "去睡觉",
      "打开窗帘"
    ]
  },
  {
    category: "Lauren_tree_structure",
    language: "",
    commands: []
  }
];



export default App;
