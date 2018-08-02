import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
