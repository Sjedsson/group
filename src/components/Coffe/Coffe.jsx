import { IoAddCircle } from "react-icons/io5";
export default function Coffe({coffe}){
    return(
        <article>
            <IoAddCircle className="increment-icon"/>
            <h2>{coffe.title}</h2>
            <p>{coffe.desc}</p>
            <p>{coffe.price}</p>
            
        </article>
    )
}