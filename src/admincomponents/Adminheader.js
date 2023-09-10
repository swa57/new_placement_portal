import React from "react";
import "./Admincss/Adminheader.css"
const Adminheader = () => {
    return (
        <div>
            <header>
                <nav>
                <h1 className="center-text">Placement Portal</h1>
                    <a class="companypost" href="/companypost"><button>COMPANYPOST</button></a>
                    <a class="details" href="/details"><button>DETAILS</button></a>
                    <a class="forumview" href="/forumview"><button>QUERYVIEW</button></a>
                </nav>
            </header>
        </div>
    )
}

export default Adminheader;