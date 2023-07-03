import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HeaderProvider from './context/HeaderContext.jsx'
import UserProvider from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
  <HeaderProvider>
  <App />
  </HeaderProvider>
  </UserProvider>
)
