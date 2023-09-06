import { useEffect, useState } from "react";
import products from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let product = products.find(item => item.idx === parseInt(id));
                resolve(product);
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        })
    }, []);

    return (
        <>
            <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailContainer;