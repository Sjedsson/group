import "./Header.css";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";

export default function Header() {
  return (
    <section className="header-container">
      <div className="img-container">
        <img className="header-img" />
      </div>
      <div className="title-container">
        <h1 className="header-title">Meny</h1>
      </div>

      <Nav />
      <Cart />
    </section>
  );
}
