.footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 4rem;
  text-align: center;
}

.footer__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer__content p {
  margin: 0 0 1rem 0;
}

.footer__links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.footer__links a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s;
}

.footer__links a:hover {
  color: #007bff;
}
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 Spin Guess Play. All rights reserved.</p>
        <div className="footer__links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
