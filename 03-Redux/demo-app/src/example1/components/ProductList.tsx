import React from "react";

// Import the useSelector() function from React Redux.
import {useSelector} from 'react-redux'

import Product from './Product'

function ProductList() {

    // Call React Redux useSelector() function, to get access to "store" object in Redux Store.
    const {products} : any = useSelector(store => store)

    return (
        <div>
            <h1>Totally Awesome Products [Example 1]</h1>
            {(products.length === 0) ?
                <div>No products</div> :
                products.map( (p : any) => {
                    console.log(p)
                    return <Product {...p} />
                } 
            )}
        </div>
    )
}
export default ProductList
