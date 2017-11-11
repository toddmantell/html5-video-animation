import React from 'react';
import {render} from 'react-dom';
import VideoContainer from '../Video';

const App = props => {
  return <VideoContainer />;
};

render(<App />, document.getElementById('root'));