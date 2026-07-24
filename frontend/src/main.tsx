import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from './Store.tsx';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '../src/css/theme.css'
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>F
    </Provider>
  </QueryClientProvider>

)
