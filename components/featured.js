import { useState, useEffect } from 'react';
import Image from 'next/image'
import foto from '../images/foto.png'


// Screen Width Function
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}


export default function Featured({ data, cart }) {
    const size = useWindowSize();

    return (
        <>
            <div className="flex flex-col">
                <div className="flex mb-8">
                    <h1 className="mr-auto ml-8 mt-6 text-xl">
                        {data[0].name}
                    </h1>
                    {size.width >= 420 && <button className='mr-8 mt-8 text-lg1 text-white bg-black px-10' onClick={() => { cart(data[0].name, data[0].image.src, data[0].price) }}>
                        ADD TO CART
                    </button>}
                </div>
                {size.width >= 420 && <div className="bg-cover relative" style={{ width: "100%", height: "553px", backgroundImage: `url(${data[0].image.src})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="absolute bottom-0 left-0 z-10 bg-white px-2 text-md2 text-blackest">Product of the day</div>
                </div>}
                {size.width < 420 && <div className="bg-cover relative" style={{ width: "100%", height: "225px", backgroundImage: `url(${data[0].image.src})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="absolute bottom-0 left-0 z-10 bg-white px-2 text-md2 text-blackest">Product of the day</div>
                </div>}
                {size.width < 420 && <button className='mr-8 mt-8 text-lg1 text-white bg-black px-10' onClick={() => { cart(data[0].name, data[0].image.src, data[0].price) }}>
                    ADD TO CART
                </button>}
                <div className="flex flex-col py-8 sm:flex-row">
                    <div className="text-left sm:w-3/5">
                        <h1 className="text-lg">About the {data[0].name}</h1>
                        <h1 className="py-5 text-lg text-primary">{data[0].category}</h1>
                        <p className="text-md">{data[0].description}</p>
                    </div>
                    <div className=" text-left sm:text-right sm:w-2/5 ">
                        <h1 className="text-lg">People Also Buy</h1>
                        <div className=" flex flex-row mt-10 justify-between sm:pl-20">
                            <Image
                                src={foto}
                                alt="Picture of the author"
                                width="117px"
                                height="147px"
                            />
                            <Image
                                src={foto}
                                alt="Picture of the author"
                                width="117px"
                                height="147px"
                            />
                            <Image
                                src={foto}
                                alt="Picture of the author"
                                width="117px"
                                height="147px"
                            />
                        </div>
                        <h2 className="text-lg">Details</h2>
                        <p className="py-2 text-md text-primary">Size: 1200 x 1200 pixel</p>
                        <p className="text-md text-primary">Size: 15mb</p>
                    </div>
                </div>
            </div>
        </>
    )
}

