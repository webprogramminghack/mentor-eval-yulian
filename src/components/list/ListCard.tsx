import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '../Button';
import Input from '../Input/Input';
import styles from './ListCard.module.scss';
import ListItem from './ListItem';
import { fetchTodos, updateTodo } from '@/api';

interface ITodo {
  id: number;
  completed: boolean;
  todo: string;
}

function ListCard() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 3000,
  });

  const mutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleCheckToggle = () => {
    // trigger mutation
    console.log(mutation);
  };

  return (
    <div className={styles.card}>
      <div className={styles.control}>
        <Input placeholder='Create new task' />
        <Button color='primary'>Add</Button>
      </div>
      <div className={styles.container}>
        {data?.todos.map((todo: ITodo) => (
          <ListItem
            text={todo.todo}
            completed={todo.completed}
            onChecked={handleCheckToggle}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ListCard;
