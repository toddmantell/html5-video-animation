import React, { Component } from 'react';
import VideoView from './VideoView';
//import {Tweenmax} from 'gsap';

export default class VideoContainer extends Component {
  state = {showButton: true};

  playVideo = event => {
    event.preventDefault();

    const vid = document.getElementById('vid');

    vid.play();

    this.setState({showButton: false});
  }

  render() {
    return <VideoView playVideo={this.playVideo} showButton={this.state.showButton}/>;
  }
}