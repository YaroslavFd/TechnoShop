import HeaderMenu from "../header/headerMenu/HeaderMenu";
import HeaderTop from "../header/headerTop/HeaderTop";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <>
      <header className="header">
        <HeaderTop />
        <HeaderMenu />
      </header>

      <Footer />
    </>
  )
}

export default App;
