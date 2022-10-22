import { Navigate } from 'react-router-dom'

const AdminRouter = ({ children }) => {
  if (
    !localStorage.getItem('user') ||
    JSON.parse(localStorage.getItem('user')).userInfo.role !== 'admin'
  ) {
    return <Navigate to="/not-found" replace />
  }

  return children
}
export default AdminRouter
