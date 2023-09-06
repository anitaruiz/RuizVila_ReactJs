import cart from "../assets/cart3.svg";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src={cart} alt="Carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>
    )
}

export default CartWidget;