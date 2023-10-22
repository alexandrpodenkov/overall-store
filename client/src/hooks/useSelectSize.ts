import React, { useState, useEffect } from 'react';
import { IProduct } from '../types/types';
import { useAppDispatch } from "../app/hooks";
import { addItem } from "../features/cartSlice";

export const useSelectSize = () => {
    const [isSizeActive, setSizeActive] = useState<boolean>(false);
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(-1);

    const dispatch = useAppDispatch();

    useEffect(() => {
        selectedSize;
    }, [setSelectedSize]);

    const handleAddToCart = (item: IProduct) => {
        setSizeActive(false);
        dispatch(addItem(item));
    }

    const handleBlockedMouseOver = (e: React.MouseEvent<HTMLElement>) => {
        if (!isSizeActive) {
            e.currentTarget!.innerText = 'выберите размер';
        }
    }

    const handleBlockedMouseOut = (e: React.MouseEvent<HTMLElement>) => {
        if (!isSizeActive) {
            e.currentTarget!.innerText = 'добавить в корзину';
        }
    }

    const handleSelectSize = (index: number, e: React.MouseEvent<HTMLElement>) => {
        setSelectedSize(e.currentTarget.innerText );

        if (selectedSizeIndex === index) {
            setSelectedSizeIndex(-1);
            setSizeActive(false);
        } else {
            setSelectedSizeIndex(index);
            setSizeActive(true);
        }
    }

    return {
        isSizeActive,
        selectedSize,
        selectedSizeIndex,
        handleAddToCart,
        handleBlockedMouseOut,
        handleBlockedMouseOver,
        handleSelectSize
    }
}