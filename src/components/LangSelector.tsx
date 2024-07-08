import React, { Component } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';
import { LANGUAGES } from './constants.ts';
import { styled } from '@mui/material';

interface LangSelectorProps {
  onLanguageChange: (language: 'ru' | 'en') => void;
}

interface LangSelectorState {
  language: 'ru' | 'en';
}

const StyledSelect = styled(Select)({
  '.MuiSelect-icon': {
    color: 'white',
  },
});

class LangSelector extends Component<LangSelectorProps, LangSelectorState> {
  constructor(props: LangSelectorProps) {
    super(props);
    this.state = { language: 'ru' };
  }

  handleChange = (event: SelectChangeEvent<string>) => {
    const language = event.target.value as 'ru' | 'en';
    this.setState({ language });
    this.props.onLanguageChange(language);
  };

  render() {
    return (
      <StyledSelect
        value={this.state.language}
        onChange={this.handleChange}
        size={'small'}
        sx={{ color: 'white' }}
      >
        {LANGUAGES.map(language => (
          <MenuItem key={language} value={language}>
            {language.toUpperCase()}
          </MenuItem>
        ))}
      </StyledSelect>
    );
  }
}

export default LangSelector;
