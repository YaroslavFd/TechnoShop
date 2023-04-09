import './header.css'

const Header = () => {
  return (
    <header className="header-top bg-black">
      <div className="container">
        <div className="header-top__ad">
          <p className="header-top__text">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="header-top__block-link">
            <a href="#" className="header-top__link">ShopNow</a>
          </p>
        </div>
        <div className="header-top__language">
          <a href="#" className="header-top__language-link">English</a>
        </div>
      </div>
    </header>
  )
}

export default Header;