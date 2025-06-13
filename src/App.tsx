import { useEffect, useState } from 'react';
import { API_ENDPOINTS, axiosRequest } from './axios';
import { z } from 'zod';

const todoSchema = z.object({
  completed: z.boolean(),
  id: z.number(),
  title: z.string(),
  // userId: z.number(),
  userId: z.string(),
});

type Todo = z.infer<typeof todoSchema>;

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axiosRequest<Todo[]>(API_ENDPOINTS.TODOS, {
      method: 'get',
      schema: todoSchema.array(),
    }).then(result => {
      setTodos(result);
    });
  }, []);

  return (
    <div>
      {todos.map(({ title, id }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}

export default App;
