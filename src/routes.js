import Main from './components/Main'
import Header from './components/Layouts/Header'
import { Text } from '@chakra-ui/react'
import ProtectedRoute from './middlewares/ProtectedRouter'
import Contact from './components/Contact'
import AdminRouter from './middlewares/AdminRouter'
export const routes = [
  { path: '/', element: <Header /> },
  {
    path: '/crawl-data',
    element: (
      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: (
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000"
        style={{ width: '60%' }}
        alt="none"
      />
    ),
  },
  {
    path: '/admin',
    element: (
      <AdminRouter>
        <Contact />
      </AdminRouter>
    ),
  },
]
