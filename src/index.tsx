import React from 'react'
import { Container, createRoot } from 'react-dom/client';
import App from "./App"

import "./index.css"

const root = createRoot(document.querySelector('#root') as Container);

root.render(<App />)