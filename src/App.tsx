import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { index } from './store';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { DEFAULT_LANGUAGE } from './components/constants.ts';

interface AppState {
  language: 'ru' | 'en';
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      language: DEFAULT_LANGUAGE,
    };
  }

  handleLanguageChange = (language: 'ru' | 'en') => {
    this.setState({ language });
  };

  render() {
    return (
      <Provider store={index}>
        <CssBaseline />
        <Container>
          <Header onLanguageChange={this.handleLanguageChange} />
          <Toolbar />
          <Main language={this.state.language} />
        </Container>
      </Provider>
    );
  }
}

export default App;
