import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrder, IGenericResponse } from '../../types/types';

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7000/api/order',
    }),
    endpoints: (builder) => ({
        addOrder: builder.mutation<IOrder<string>, IGenericResponse>({
            query: (data) => {
                return {
                    url: '/',
                    method: 'POST',
                    body: data,
                };
            }
        }),
        getOrders: builder.query<void, IOrder<string>>({
            query: () => {
                return {
                    url: '/',
                    method: 'GET',
                };
            }
        }),
        deleteOrder: builder.mutation<IGenericResponse, {id: number}>({
            query: (id) => {
                return {
                    url: `/:${id}`,
                    method: 'DELETE',
                    body: id,
                }
            }
        })
    }) 
});

export const { useAddOrderMutation, useGetOrdersQuery, useDeleteOrderMutation } = orderApi;


