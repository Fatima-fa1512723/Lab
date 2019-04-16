import React from 'react'
import NavBar from "./components/NavBar";
import Accounts from "./components/Accounts";
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import AddTransForm from "./components/AddTransForm";

function App() {
    return (
        <Router>
           <NavBar/>
           <Route path="/accts/:action" component={Accounts}/>
            <Route path="/addtrans" component={AddTransForm}/>
        </Router>
    )
}

export default App;