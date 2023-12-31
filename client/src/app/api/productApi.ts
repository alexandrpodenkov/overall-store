import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IGenericResponse, IProduct } from "../../types/types";

const url = process.env.REACT_API_URL || 'http://localhost:7000/api/product';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: url
    }),
    endpoints: (builder) => ({
        addProducct: builder.mutation<IGenericResponse, IProduct>({
            query: (data) => {
                return {
                    url: '/',
                    method: 'POST',
                    body: data,
                };
            }
        }),
        getProducts: builder.query<IProduct[], {skip: number, take: number}>({
            query: () => {
                return {
                    url: '/',
                    method: 'GET',
                };
            }
        }),
        getOneProduct: builder.query<IProduct, string>({
            query: (id) => {
                return {
                    url: `/${id}`,
                    method: 'GET',
                };
            }
        }),
        deleteProducet: builder.mutation<IGenericResponse, {id: string}>({
            query: (id) => {
                return {
                    url: '/',
                    method: 'DELETE',
                    body: id,
                }
            }
        })
    })
});

export const { useAddProducctMutation, useDeleteProducetMutation, useGetProductsQuery, useGetOneProductQuery } = productApi;