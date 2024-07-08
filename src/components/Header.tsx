import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Watch from './Watch';
import logo from '../assets/react.svg';
import { Stack } from '@mui/material';
import LangSelector from './LangSelector.tsx';

interface HeaderProps {
  onLanguageChange: (language: 'ru' | 'en') => void;
}

class Header extends Component<HeaderProps, {}> {
  render() {
    return (
      <AppBar>
        <Toolbar sx={{ gap: 2, justifyContent: 'space-between' }}>
          <img src={logo} alt="Logo" />
          <Stack gap={2} direction={'row'} alignItems={'center'}>
            <LangSelector onLanguageChange={this.props.onLanguageChange} />
            <Watch />
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
