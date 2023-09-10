import React from "react";
import "./Studentcss/Studentheader.css"
const Studentheader = () => {
    return (
        <div>
             
            <header >
                <nav>
                <h1 className="center-text">Placement Portal</h1>
                    <a class="jobs" href="/jobs" ><button
                    class="button">JOBS</button></a>
                    <a class="applied" href="/applied"><button  class="button">APPLIED</button></a>
                    <a class="forum" href="/forum"><button  class="button">FORUM</button></a>
                </nav>
            </header>
          
        </div>
    )
}

export default Studentheader;