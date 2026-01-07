import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import BlogList from './Blog/BlogList.jsx'
import BlogPostPage from './Blog/BlogPostPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {window.location.hostname.startsWith('writes.') ? (
          <>
            <Route path="/" element={<BlogList />} />
            <Route path="/:slug" element={<BlogPostPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<App />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/:slug" element={<BlogPostPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
