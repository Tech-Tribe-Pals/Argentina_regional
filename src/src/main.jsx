import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HeaderProvider from './context/HeaderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HeaderProvider>
  <App />
  </HeaderProvider>
)
