import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core';
import Layout from './pages/Layout';
// import Profile from './pages/Profile';
// import Tournaments from './pages/Tournaments';
// import Players from './pages/Players';
import Games from './pages/Games';

const queryClient = new QueryClient()

export default function App() {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Games />} />
              {/* <Route path="profile" element={<Profile />} />
              <Route path="players" element={<Players />} />
              <Route path="tournaments" element={<Tournaments />} /> */}
              <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
