import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';
import Iframe from 'react-iframe';
import { ipcRenderer } from 'electron';

const Hello = () => {
  return (
    <div>
      <webview
        is
        nodeintegration
        width="100%"
        height="100%"
        src="https://google.com"
      />
    </div>
  );
};

export default function App() {
  return (
    <div style={{ width: '100%', height: '20vh' }}>
      <button
        onClick={() => {
          ipcRenderer.send('viewy', true);
        }}
      >
        test
      </button>
      {/* <Iframe
        url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      /> */}

      {/* <Router>
        <Switch>
          <Route path="/" component={Hello} />
        </Switch>
      </Router> */}
    </div>
  );
}
