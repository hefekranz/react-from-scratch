import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const render = () => ReactDOM.render(<App/>, document.getElementById('root'))
document.addEventListener('DOMContentLoaded', render)
