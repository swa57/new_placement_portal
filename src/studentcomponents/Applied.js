import React, { useState, useEffect } from 'react';
import Studentheader from "./Studentheader";
import "./Studentcss/Applied.css"
const Applied = () => {
    const [appliedCompanies, setAppliedCompanies] = useState([{name: "avalar",status: "inprogress"},{name: "ABC company",status: "inprogress"},{name: "XYZ COMPANY",status: "inprogress"}]);

    // useEffect(() => {
    //     // Fetch data from the API when the component mounts
    //     fetch('YOUR_API_ENDPOINT')
    //     .then(response => response.json())
    //     .then(data => setAppliedCompanies(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        <div>
            <Studentheader></Studentheader>
            <div className="content">
        <h1 class="head">APPLIED COMPANIES</h1>
        <div className="appliedcompany-list">
          {appliedCompanies.map(company => (
            <div key={company.id} className="appliedcompany-card">
              <h2>{company.name}</h2>
              
              <p>Status: {company.status}</p>
            </div>
          ))}
        </div>
      </div>
        </div>
    )
}

export default Applied;