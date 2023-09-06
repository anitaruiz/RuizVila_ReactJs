import { useEffect, useState } from "react";
import Carrousel from "./Carrousel";
import ItemList from "./ItemList";
import products from "./json/productos.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? products.filter(item => item.categoria === id) : products);
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        })
    }, [id]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <Carrousel />
                </div>
            </div>
            <div className="row">
                <ItemList productos={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;