import React,{ useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Jobs from "./studentcomponents/Jobs";
import Applied from "./studentcomponents/Applied";
import Forum from "./studentcomponents/Forum";

import Companypost from "./admincomponents/Companypost";
import Details from "./admincomponents/Details";
import Forumview from "./admincomponents/Forumview";

import Login from "./frontpagecomponents/login"
import Signup from "./frontpagecomponents/Signup";

const Approuter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('');

     const handleLogin = (username, role) => {
         setIsLoggedIn(true);
         setUserRole(role);
        //  console.log(userRole);
     };
    return (
        <BrowserRouter>
        <div>
            <Routes>
                {/* <Route path="/" element={ <Jobs />}></Route> */}
                {/* <Route path="/" element={isLoggedIn ? <Navigate to="/jobs" /> : <Login onLogin={handleLogin} />}></Route>
                <Route path="/jobs" element={ <Jobs />}></Route>  */}
                 <Route path="/" element={ <Login />}></Route>
                <Route path="/admin" element={isLoggedIn ? ( userRole === 'admin' ? ( <Navigate to="/companypost" /> ) : ( <Navigate to="/jobs" />)) : ( <Login onLogin={handleLogin} />)} />
                <Route path="/jobs" element={ <Jobs />}></Route>  
                <Route path="/applied" element={ <Applied />}></Route>
                <Route path="/forum" element={ <Forum />}></Route>
                <Route path="/companypost" element={ <Companypost />}></Route>
                <Route path="/details" element={ <Details />}></Route>
        {/* //      <Route path="/forumview" element={ <Forumview />}></Route> */}
                <Route path="/signup" element={ <Signup />}></Route>
            </Routes>
        </div>
        </BrowserRouter>


        
    )


}

export default Approuter;