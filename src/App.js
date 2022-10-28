import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topbar from './layout/Topbar';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import Purchase_document from './pages/Purchase_document';
import Sales_document from './pages/Sales_document';
import NewDocument from './pages/NewDocument';



const App = () => {
  const [showsidebar, setShowsidebar] = useState(true)
  return (
    <div className=' min-h-screen bg-pr overflow-x-hidden'>
      <Router>
        {showsidebar && <Sidebar
          setShowsidebar={setShowsidebar}  showsidebar={showsidebar} />}
        <div className={showsidebar ? 'ml-20 lg:ml-60 relative' : "ml-0"}>
          <Topbar
            setShowsidebar={setShowsidebar}  showsidebar={showsidebar} 
             />
        </div>
        <div className={showsidebar ? 'ml-0 lg:ml-72 ' : "ml-0 "}>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/purchase-document">
              <Purchase_document/>
            </Route>
            <Route exact path="/sales-document">
              <Sales_document/>
            </Route>
        
            <Route exact path="/new-document">
              <NewDocument/>
            </Route>
        
          
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
