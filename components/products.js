import { useEffect, useState } from 'react'
import Product from "./product";

export default function Products({ filter, pagination, url, cart }) {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                "sort": {
                    "key": "price",
                    "type": "ASC"
                },
                "categories": [
                    "landmarks"
                ],
                "page": 1
            }
        }).then(response => response.json())
            .then(data => {
                pagination(data.data)
                setProducts(data.data.data)
                setIsLoading(false)
            });
    }, [filter, url])

    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!products) {
        return <p>No List to show</p>
    }

    return (
        <div className="flex flex-row flex-wrap justify-between sm:w-4/5">
            {products.map(product => (
                <Product cart={cart} product={product} key={product._id} />
            ))}
        </div>
    )
}