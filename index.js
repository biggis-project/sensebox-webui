export let __hotReload = true;

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<div>Hello world</div>, document.body);

// clear the animation
document.body.className = '';