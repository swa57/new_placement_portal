import Studentheader from "./Studentheader";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyCard from './CompanyCard'; 

const Jobs = () => {
    const [eligibleCompanies, setEligibleCompanies] = useState([]);

    useEffect(() => {
        // Replace 'your-api-endpoint' with the actual URL to fetch company info and logo.
        const apiUrl = 'http://localhost:8081/companies';
    
        axios
          .get(apiUrl)
          .then((response) => {
            setEligibleCompanies(response.data);
          })
          .catch((error) => {
            console.error('Error fetching company info:', error);
          });
      }, []);
    return (
        <div >
            <Studentheader></Studentheader>
            <div className="company-card-container">
               {eligibleCompanies.map(company => (
               <CompanyCard key={company.id} company={company} />
                ))}
           </div>
           <div><p>Work In Progress</p></div>

            
        </div>
    )
}

export default Jobs;