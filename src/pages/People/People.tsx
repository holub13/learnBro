import React from 'react'

import './People.css'

interface PeopleProps {}

const People: React.FC<PeopleProps> = (): JSX.Element => {
  return (
    <div className="people">
      <h2>People</h2>
    </div>
  )
}

export default People
