import { useEffect, useState } from "react";
import { deleteItem } from '../features/cartSlice';
import { useAppDispatch } from '../app/hooks';


export const useRemoveTimer = (itemId:number): [boolean, number, () => void, () => void] => {
    const [remove, setRemove] = useState<boolean>(false);
    const [timerCount, setTimerCount] = useState<number>(5);

    const dispatch = useAppDispatch();
        
    useEffect(() => {
        let timer = setInterval(() => {
            setTimerCount(prev => prev - 1)
        }, 1000); 

        if(!remove || timerCount <= 0){
            clearInterval(timer);
        }
        if(timerCount <= 0){
            dispatch(deleteItem(itemId));
        }

        return () => {
            clearInterval(timer);
        }
    }, [remove, timerCount, dispatch, itemId])
    
    const removeItemHandler = () => {
        setRemove(true);  
    }

    const returnItemHandler = () => {
        setRemove(false);
        setTimerCount(5);
    }

    return [ remove, timerCount, removeItemHandler, returnItemHandler ];
}