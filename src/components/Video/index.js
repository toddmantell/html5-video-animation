import React, { Component } from 'react';
import VideoView from './VideoView';
import {TweenMax, TimelineLite} from 'gsap';

export default class VideoContainer extends Component {
  state = {showButton: true};

  playVideo = event => {
    event.preventDefault();

    const vid = document.getElementById('vid');

    vid.addEventListener('ended', this.handleVideoEnd, false)

    vid.play();
    this.runAnimations();

    this.setState({showButton: false});
  }

  handleVideoEnd = event => {
    this.setState({showButton: true});
  }

  runAnimations = () => {
    const timeline = new TimelineLite();

    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    const message3 = document.getElementById('message3');

    timeline
      .from(message1, 10, {left: -100, autoAlpha: 0})
      .from(message2, 10, {left: -100, autoAlpha: 0})
      .from(message3, 10, {left: -100, autoAlpha: 0});
  }

  render() {
    return <VideoView playVideo={this.playVideo} showButton={this.state.showButton}/>;
  }
}