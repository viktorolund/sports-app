import React from 'react'
import CareerListRow from './CareerListRow'

const CareerList = ({career}) => {
  return (
    <div>
        {
            career.map(myCareer =>
                <CareerListRow key={myCareer.id} myCareer={myCareer} />
            )
        }
    </div>
  )
}

export default CareerList
