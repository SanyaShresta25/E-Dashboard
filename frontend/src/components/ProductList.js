import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
            let result = await fetch('http://localhost:5000/products',{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            setProducts(result);
    
    };

    const deleteProduct = async (id) => {
    try {
        await fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        // If the request is successful, remove the deleted product from the state
        setProducts(products.filter(product => product._id !== id));
        alert("Record is deleted");
    } catch (error) {
        console.error('Error deleting product:', error);
    }
};

    const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
        try {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    } else {
        getProducts();
    }
}


    return (
        <div className="product-list">
            <h3>Product List</h3>
            <input className='search-product-box' type="text" placeholder='Search Product' onChange={searchHandle}></input>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products.length>0?products.map((item, index) => (
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link>
                        </li>

                    </ul>
                ))
                :<h1>No result</h1>
            }
        </div>
    );
}

export default ProductList;
