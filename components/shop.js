import { useState, useEffect } from 'react';
import Products from "./products"
import Category from "./category"

// Function Width Screen
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
};


export default function Shop({ cart }) {
    const size = useWindowSize();
    const [activeFilters, setActiveFilters] = useState([]);
    const [actualPagination, setActualPagination] = useState();
    const [actualUrl, setUrl] = useState('https://technical-frontend-api.bokokode.com/api/products?page=1');

    function filterActual(event) {
        const actualFilter = event.target.value;
        if (activeFilters.includes(actualFilter)) {
            setActiveFilters(() => activeFilters.filter(e => e !== actualFilter))
        } else {
            setActiveFilters(() => [...activeFilters, actualFilter]);
        }
    }

    function setPagination(info) {
        setActualPagination({
            current_page: info.current_page,
            first_page_url: info.first_page_url,
            from: info.from,
            last_page: info.last_page,
            last_page_url: info.last_page_url,
            links: info.links,
            next_page_url: info.next_page_url
        })
    };

    function setPage(pageUrl) {
        if (pageUrl) {
            setUrl(pageUrl);
        }
    };

    return (
        <div>
            <div className="flex flex-col">
                <div className="flex mb-8">
                    <h1 className="mr-auto mt-10 text-xl text-blackest">
                        Photography / Premium Photos
                    </h1>
                    <button className='ml-auto mt-10 h-10 border px-4'>
                        Button
                    </button>
                </div>
            </div>
            <div className="flex flex-row">
                {size.width > 420 && <Category onChangeFilter={filterActual} />}
                <Products cart={cart} pagination={setPagination} url={actualUrl} filter={activeFilters} />
            </div>
            <div className="flex flex-row justify-center">
                {actualPagination ? actualPagination.links.map((link) => {
                    if (link.label.includes("&laquo; Previous")) {
                        return <div key={link.label} className="mx-2 cursor-pointer" onClick={() => { setPage(link.url) }}> {'<'} </div>
                    }
                    if (link.label.includes("Next &raquo;")) {
                        return <div key={link.label} className="mx-2 cursor-pointer" onClick={() => { setPage(link.url) }}> {'>'} </div>
                    }
                    return <div className={`mx-2 cursor-pointer ${link.active ? "underline" : ""}`} key={link.label} onClick={() => { setPage(link.url) }}>{link.label}</div>
                }) : ''}
            </div>
        </div>
    )
}