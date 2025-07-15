import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

const{ speciality } = useParams()

const[filterDoc,setFilterDoc] = useState([])

const{doctors}= useContext(AppContext)

  return (
    <div>
      <p>Browse through the docotrs specialist</p>
    <div>
      <div>
        
        <p>speal1</p>
        <p>speal2</p>
        <p>speal3</p>
        <p>speal4</p>
        <p>speal5</p>
        <p>speal6</p>
      </div>
      <div>
        {

        }
      </div>
    </div>
   
    </div>
    
  )
}

export default Doctors
