import React from 'react';
import Button from '../Button';

const videoStyles = {
  height: '720px',
  width: '1280px'
};

const VideoView = props => {
  return (
    <div>
    {props.showButton ? <Button playVideo={props.playVideo}/> : null}
    <video id="vid" styles={videoStyles}>      
      <source src="PanningLights.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
    </video>
    </div>
  )
};

export default VideoView;