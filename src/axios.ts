import axios from 'axios';
import type { ZodSchema } from 'zod';
import { ZodParser } from './zod-parser';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const API_ENDPOINTS = {
  TODOS: 'todos',
};

export const axiosRequest = async <T>(url: string, options: { schema?: ZodSchema; method: 'get' | 'post' }) => {
  try {
    const { data } = await axiosInstance[options?.method]<T>(url);

    if (options?.schema) {
      ZodParser.parse(options.schema, data);
    }

    return data;
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
};
