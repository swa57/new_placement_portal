import React from 'react';
import "./Studentcss/CompanyCard.css"
function CompanyCard({ company }) {
  return (
    <div className="company-card">
      <a class="name" href="https://www.w3schools.com">{company.company_name}</a>
      <br></br>
      <br></br>

      <label className="cgpa">Required CGPA:</label> <p>{company.required_cgpa}</p>
      <br></br>
      <br></br>
      <label>Eligible Courses:</label> <p>{company.eligible_departments}</p>
      <br></br>
      <br></br>
      <label>Cost to Company:</label> <p>{company.cost_to_company}</p>
      <br></br>
      <br></br>
      <label>Due to apply:</label> <p>{company.deadline_to_apply}</p>

      <button>Apply</button> {/* Implement the apply functionality */}
    </div>
  );
}

export default CompanyCard;
