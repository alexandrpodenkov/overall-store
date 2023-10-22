import React from "react";
import { useGetProductsQuery } from "../../app/api/productApi";
import Product from "../ProductCard/ProductCard";


const ProductList: React.FC = (): JSX.Element => {
    const { data, isLoading, error } = useGetProductsQuery({skip: 1, take: 1});
    
    return ( 
        <section className="flex flex-row flex-wrap justify-center items-center gap-3 mt-[10px] mb-[60px]">
            {error && <div className="font-bold text-[40px]">Error</div>}
            {isLoading && <div className="font-bold text-[40px]">Loading...</div>}
            {data && data.map(product => (
                <Product key={product.id}
                id={product.id}
                description={product.description}
                name={product.name}
                size={product.size}
                price={product.price}
                image={product.image}
                />
            ))}
        </section>  
     );
}
 
export default ProductList;