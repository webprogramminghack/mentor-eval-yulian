import React from 'react';
import List from './components/list/List';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <List />
      </QueryClientProvider>
    </div>
  );
};

export default App;
