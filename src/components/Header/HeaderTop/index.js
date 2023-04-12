import './style.css';

const HeaderTop = () => {
  const style = { color: 'black' }
  return (
    <section className="header-top bg-black">
      <div className="container header-top__container">
        <div className="header-top__ad">
          <p className="header-top__ad-text">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="header-top__ad-link">ShopNow</a>
        </div>

        <select className="header-top__language" name="language">
          <option value="English" style={style}>English</option>
          <option value="Spanish" style={style}>Еspañol</option>
        </select>
      </div >
    </section >
  )
}

export default HeaderTop;