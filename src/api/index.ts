import axios from 'axios';
import { APIConfiguration } from '@/configs/api.config';

export const customAxios = axios.create({
  baseURL: APIConfiguration.baseURL,
  headers: {
    'API-Key': APIConfiguration.APIKey,
    'Content-Type': 'application/json',
  },
});

const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const updateTodo = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        completed: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete todo. Status: ${response.status}`);
    }

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete todo. Status: ${response.status}`);
    }

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
