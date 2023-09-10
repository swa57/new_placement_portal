import Adminheader from "./Adminheader";
import "./Admincss/Details.css"

const Details = () => {
    // let ApiKey = 'https://api.openweathermap.org/data/2.5/weather?q=erode&appid=68873c895eea90003888868c624268cc&units=metric';
    // useEffect(() => {

    //     fetch(ApiKey).then((e) => e.json().then((data) => console.log(data))
    //     )


    // })
    return (
        <div>
            <Adminheader></Adminheader>
            {/* <h3>view Companydetails</h3> */}
            <div className='container'>
            <div className="title-box1">
                <div className="bg">
                    <h1> AVALARA</h1>
                    <span id='a'>No.ofstudents eligible</span>
                    <h5 id='b'> 100</h5>
                    <span id='c'>No.ofstudents applied</span>
                    <h5 id='d'>50</h5>
                </div>
            </div>
            <div className="title-box1">
                <div className="bg">
                    <h1> Latest view</h1>
                    <span id='a'>No.ofstudents eligible</span>
                    <h5 id='b'> 200</h5>
                    <span id='c'>No.ofstudents applied</span>
                    <h5 id='d'>150</h5>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Details;