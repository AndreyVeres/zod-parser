import axios from 'axios';
import type { ZodSchema } from 'zod';
import { ZodParser } from './zod-parser';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const API_ENDPOINTS = {
  TODOS: 'todos',
};

type Props = {
  url: string;
  options: { schema?: ZodSchema; method: 'get' | 'post' };
};

export const axiosRequest = async <T>({ url, options }: Props) => {
  const { schema, method = 'get' } = options;

  try {
    const { data } = await axiosInstance[method]<T>(url);

    if (schema) {
      ZodParser.parse(schema, data);
    }

    return data;
  } catch (axiosError) {
    console.log(axiosError);
    throw axiosError;
  }
};
