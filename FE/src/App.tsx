import Router from "./routes/router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={1500} />
    </>
  )
}

export default App
