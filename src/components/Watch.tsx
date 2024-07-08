import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

interface State {
  time: string;
}

class Watch extends Component<{}, State> {
  private timerID!: number;

  constructor(props: {}) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  render() {
    return <Typography>{this.state.time}</Typography>;
  }
}

export default Watch;
