import { useState } from 'react';


export default function Product({ product, cart }) {
    const [isShown, setIsShown] = useState(false);
    const hidden = isShown ? '' : 'invisible';

    return (
        <div className="flex flex-col relative" style={{ width: "281px" }}>
            {product.bestseller && <div className="absolute top-0 left-0 z-10 bg-white px-2 text-md2 text-blackest">Best Seller</div>}
            <div className="bg-cover relative" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{ width: "281px", height: "390px", backgroundImage: `url(${product.image.src})`, backgroundSize: '281px 390px', backgroundRepeat: 'no-repeat' }}>
                <button className={`absolute bottom-0 ${hidden} w-full left-0 text-white bg-black p-2 text-lg1`} onClick={() => { cart(product.name, product.image.src, product.price) }}>ADD TO CART</button>
            </div>
            <div className="text-left">
                <h2 className="text-lg text-primary">{product.category}</h2>
                <h1 className="text-xl2 text-blackest">{product.name}</h1>
                <h2 className="text-lg2 text-primary">$ {product.price}</h2>
            </div>
        </div>
    )
}