import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            console.log("Se agregaron: " + items + " Productos al Carrito!");
        } else {
            console.log("No hay Stock disponible!");
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <>
            <div className="row mb-1">
                <div className="col-md-6">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-light" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;

