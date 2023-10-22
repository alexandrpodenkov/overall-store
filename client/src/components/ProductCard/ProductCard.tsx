import React from "react";
import { Link } from "react-router-dom";
import { IProductProps } from "../../types/types";
import { useState } from "react";

const Product: React.FC<IProductProps> = ({ id, description, image, name, price, size }): JSX.Element => {
    const images = image.split(',');
    const [imageIndex, setImageIndex] = useState<number>(0);

    const handleImageMouseOver = () => {
        setImageIndex(1);
    }

    const handleImageMouseLeave = () => {
        setImageIndex(0);  
    }

    return (
        <div className="my-[60px] h-[430px]">
                <Link to={`/product/${id}`}>
                    <div className="w-[430.95px] h-[430.95px]">
                        <img 
                        onMouseLeave={() => handleImageMouseLeave()} 
                        onMouseOver={() => handleImageMouseOver()} className="max-w-full h-auto" src={images[imageIndex]} />
                    </div>
                    <div className="flex justify-between w-[430.95px]">
                        <div className="ml-[8px]">
                            <h3 className="font-bold uppercase text-[20px]">{name}</h3>
                            <span className="text-[20px] font-normal">{price}₽</span>
                        </div>
                        <p className="text-[15px] text-gray-600 font-normal leading-7 flex items-end">{size}</p>
                    </div>
                </Link>
        </div>
    );
}

export default Product;