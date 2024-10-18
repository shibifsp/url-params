import React,{useState} from 'react';
import "./Css/Student.css";
import { Link } from 'react-router-dom';
import Details from './Details';

export default function Student() {
  
  const [students,setStudents] = useState([
    {name: "Faseeh"},
    {name: "Mymoon"},
    {name: "Ansif"},
    {name: "Thanveer"},
  ])

  const [id,setId] = useState([
    {id: 111},
    {id: 112},
    {id: 113},
    {id: 114}
  ])

  return (
    <div className='container'>
      <h1>Students</h1>
      <ul className="students">
        {students.map((student, index) => (
          <li key={index}>
            <Link to={`/details/${student.name}`}>
              <h2>{student.name}</h2>
            </Link>
          </li>
        ))}
      </ul>

      <h1>Id's</h1>
      <ul className="id">
        {id.map((number,index) => (
          <li key={index}>
            <Link to={`/details/${number.id}`}>
              <h2>{number.id}</h2>
            </Link>
          </li>
        ))}
      </ul>
      <div className="details">
        <Details />
      </div>
    </div>
  )
}
