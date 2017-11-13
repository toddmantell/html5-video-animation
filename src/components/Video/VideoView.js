import React from 'react';
import Button from '../Button';

const videoStyles = {
  height: '720px',
  width: '1280px',
  position: 'absolute'
};

const VideoView = props => {
  return (
    <div>
      {props.showButton ? <Button playVideo={props.playVideo}/> : null}
        <span id="message1" className="overlayFont">Playing Today's Hits!</span>
        <span id="message2" className="overlayFont">Download the App</span>
        <span id="message3" className="overlayFont">Available on iOS and Android</span>
      <video id="vid" styles={videoStyles}>      
        <source src="PanningLights.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    </div>
  )
};

export default VideoView;