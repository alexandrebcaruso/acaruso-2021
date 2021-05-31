import React from "react"; 
import "./Triad.scss";

const Triad = () => (
    <svg className="triad" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="-40%" r="60%" className="plan" />
        <text x="50%" y="-40%" text-anchor="middle">Plan</text>

        <circle cx="80%" cy="60%" r="60%" className="design" />
        <text x="80%" y="60%" text-anchor="middle">Design</text>
        
        <circle cx="20%" cy="60%" r="60%" className="develop" />
        <text x="20%" y="60%" text-anchor="middle">Develop</text>
    </svg>
)

export default Triad;