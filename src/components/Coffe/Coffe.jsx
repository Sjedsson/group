import "./Coffe.css";
import { IoAddCircle } from "react-icons/io5";

export default function Coffe(props) {
  return (
    <article className="coffe-card">
      <IoAddCircle className="increment-icon" />
      <h2 className="coffe-title">{props.title}</h2>
      <p>................</p>
      <p className="coffe-price">{props.price}</p>
      <p className="coffe-desc">{props.desc}</p>
    </article>
  );
}
