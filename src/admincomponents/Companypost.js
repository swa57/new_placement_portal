import Adminheader from "./Adminheader";
import "./Admincss/Companypost.css"

const Companypost = () => {
    return (
        <div className="form">
            <Adminheader></Adminheader>
           
            <div className="form-control">


                <h2> WELCOME ADMIN TO PLACEMENT PORTAL </h2>
                <label> Company name :   </label>
                <input type="text" />
                <label>Company Url :     </label>
                <input type="text" />
                <label>Company logo</label>
                <input type="file"></input>

                <label> Eligible Department :  </label>
                <input type="text" />
                <label> 10th aggregate :  </label>
                <input type="text" />
                <label> 12th aggregate :  </label>
                <input type="text" />
                <label> Required CGPA :  </label>
                <input type="text" />
                <label> No.of standing arrear:  </label>
                <input type="text" />
                <label> Due date to apply :  </label>
                <input type="text" />
                <button id="btn" > Post</button>
            </div>

        </div>
    )
}

export default Companypost;