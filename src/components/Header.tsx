import '../styles/GlobalStyles.css'
import '../styles/Header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">The Pinnacle</a>
        </div>
        <div className="list-items">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header