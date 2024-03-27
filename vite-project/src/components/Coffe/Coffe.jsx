function Coffe(props) {
    console.log(props);
    function handleClick() {
        props.setAmount(props.amount + 1);
    }

    return (
        <article>
            <h2>{ props.title }</h2>
            <p>{ props.desc }</p>
            <p>{ props.price } kr</p>
            <p>{ props.id }</p>
            <button onClick={ handleClick }>Add to cart</button>
        </article>
    )
}

export default Coffe;