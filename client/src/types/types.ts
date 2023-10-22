export interface IOrder<T> {
    email: string;
    name: string;
    phone: number;
    adress: string;
    orderItems: T;
}

export interface IProductProps {
    id: number,
    description: string,
    name: string,
    size: string
    price: number,
    image: string
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    size: string;
    article: string;
    image: string;
    quantity: number;
}

export interface ICartItem {
    id: number;
    name: string;
    price: number;
    size: string;
    image: string;
    quantity: number;
}

export interface IGenericResponse {
    status: string;
    message: string;
}