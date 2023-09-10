import Studentheader from "./Studentheader";
import {useState} from 'react';
import "./Studentcss/Forum.css"
const Forum = () => {
    const [email_id, setemail_id]=useState('');

    const [suggestions, setsuggestions]=useState('');

 

    const handleSubmit=(e) =>

    {

        e.preventDefault();

        console.log(e.target.value);

 

    }
    return (
        <div>
            <Studentheader></Studentheader>
            <h2>Suggestion</h2>

            <form onSubmit={(e)=> {handleSubmit(e)}}>

                <div className="header block-element">

                <label htmlFor="email_id">EMAILID: </label>

                    <input 

                    type="text"

                    id="suggestion_id"

                    value={email_id}

                    onChange={(e) => setemail_id(e.target.value)}

                    required

                    />

                    

                </div>

                <div className="forum">

                    <div className="box"></div>

                <label htmlFor="suggestions">Suggestions: </label>

                    <textarea

                    placeholder={"Add your feedback"}

                    wrap="off"

                    type="text"

                    rows="3"

                    id="suggestions"

                    value={suggestions}

                    onChange={(e) => setsuggestions(e.target.value)}

                    required

                    />

                    

                </div>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Forum;