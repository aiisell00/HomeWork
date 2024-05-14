import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PostsProvider } from './context/posts.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  
  <PostsProvider>
    <App />
  </PostsProvider>,
)
