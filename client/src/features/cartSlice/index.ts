import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../types/types';

interface ICartState {
    items: ICartItem[];
    isVisible: boolean;
    count: number;
}

const initialState: ICartState = {
    items: [],
    isVisible: false,
    count: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartVisibiled: (state, action: PayloadAction<boolean>) => {
            state.isVisible = action.payload;
        },
        addItem: (state, action: PayloadAction<ICartItem>) => {
            const {id} = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if(existingItem){
                existingItem.quantity++;
                state.count++;
            }else{
                state.items.push({...action.payload, quantity: 1});
                state.count++;
            }

        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            const quantity = state.items.reduce((prev, item) => prev + item.quantity, 0);
            state.count = quantity;
        }, 
        incrementItem: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if(item){
                item.quantity++;
                state.count++;
            }
        },
        decrementItem: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if(item && item?.quantity > 1){
                item.quantity--;
                state.count--;
            }
        }
    }
})

export const { cartVisibiled, addItem, deleteItem, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;