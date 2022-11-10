import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Routers from "./components/Router/Routers";
import Navbar from "./components/Navbar/Navbar"
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <div className="app">
            {/*<Navbar />*/}
            <ToastContainer/>
            <Dashboard/>
            <Routers/>
        </div>
    );
}

export default App;
