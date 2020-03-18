import React from 'react';
import intl from 'react-intl-universal'
import {Router} from './router/index';
import zhCN from './locale/zhCN.json';
import en from './locale/en.json';
import pt from './locale/pt.json';
import './App.css';

interface Props {

}

interface AppState {
  domReady: boolean;
}

const locales = {
  'zhCN':zhCN,
  'en':en,
  'pt':pt
}
class App extends React.Component<Props, AppState> {

  state: AppState = {
    domReady: false
  }

  componentDidMount() {
    this.loadLocales();
  }
  componentWillUnmount() {

  }
  loadLocales() {
    intl.init({
      currentLocale: 'zhCN', // TODO: determine locale here
      locales,
    })
    .then(() => {
    this.setState({domReady: true});
    });
  }
  render() {
    return (
       this.state.domReady &&
       <div className="App">
        <Router/>
      </div>
    )
  }
}

export default App