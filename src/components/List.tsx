import React, { useState, useEffect } from 'react';
import { Todo } from '../types/types';
import { fetchTodos } from '../service/api';

const List: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchTodos()
            .then((data) => {
                setTodos(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Подождите, идет загрузка...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? "выполнено" : "не выполнено"}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
