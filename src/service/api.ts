
import { Todo } from '../types/types';

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
        throw new Error('Не удалось получить данные с сервера');
    }
    const data: Todo[] = await response.json();
    return data;
};
