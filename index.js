export let __hotReload = true;

import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from 'components/MainPanel';

ReactDOM.render(<MainPanel/>, document.getElementById("container"));

// clear the animation
document.body.className = '';