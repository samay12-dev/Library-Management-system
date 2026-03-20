import React from 'react'
import './Styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-[#0B2C5F] to-[#1E3A6D] text-white ">
      <h2 className=' text-2xl font-bold'>Connect With Us</h2>
      <ul className="social-list">
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.22 10.44 21.95v-7.03H7.9v-2.85h2.54V9.41c0-2.5 1.49-3.87 3.77-3.87 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.85h-2.32V21.95C18.34 21.22 22 17.09 22 12.07z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter" aria-label="Twitter">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.07 9.4c0 .34.04.67.11.99A12.14 12.14 0 0 1 3.15 5.1a4.27 4.27 0 0 0 1.32 5.71c-.66-.02-1.28-.2-1.82-.5v.05c0 2.06 1.47 3.78 3.42 4.18-.36.1-.73.15-1.12.15-.27 0-.53-.02-.78-.07.53 1.65 2.07 2.85 3.9 2.88A8.59 8.59 0 0 1 2 19.54 12.11 12.11 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.67l-.01-.53A8.18 8.18 0 0 0 22.46 6z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram text-white" aria-label="Instagram">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.4-.9a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="youtube " aria-label="YouTube">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className=''>
              <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.8 2 12 2 12 2s-4.8 0-8.6.7c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8 0 9.8v2.4C0 15.9.6 17.6.6 17.6s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.6.7 7.6.7s4.8 0 8.6-.7c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.6-2.6.6-4.4v-2.4c0-1.8-.6-4.4-.6-4.4zM9.8 15.6V8.4l6.2 3.6-6.2 3.6z" />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
