import React, { Component } from 'react';
import VideoView from './VideoView';
import {TweenMax, TimelineLite, Power0} from 'gsap';

export default class VideoContainer extends Component {
  state = {showButton: true};

  playVideo = event => {
    const vid = document.getElementById('vid');

    vid.addEventListener('ended', this.handleVideoEnd, false)

    vid.play();

    this.runAnimations();

    this.setState({showButton: false});
  }

  handleVideoEnd = event => {
    this.setState({showButton: true});
  }

  runAnimations() {
    const timeline = new TimelineLite();

    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    const message3 = document.getElementById('message3');

    timeline
      .to(message1, 11.5, {ease: Power0.easeNone, left: -800}, 0)
      .to(message2, 11.5, {ease: Power0.easeNone, left: -800}, 10)
      .to(message3, 11, {ease: Power0.easeNone, left: -800}, 20);

    this.resetMessagePositions([message1, message2, message3], {left: '1280px'});
  }

  resetMessagePositions(elementsToReposition, newStyle) {
    for (let i = 0; i < elementsToReposition.length; i++) {
      elementsToReposition[i].style = Object.assign({}, ...elementsToReposition[i].style, ...newStyle);
    }
  }

  render() {
    return <VideoView playVideo={this.playVideo} showButton={this.state.showButton}/>;
  }
}