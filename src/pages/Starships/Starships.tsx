import React from 'react'

import './Starships.css'

interface StarshipsProps {}

const Starships: React.FC<StarshipsProps> = (): JSX.Element => {
  return (
    <div className="starships">
      <h2>Starships</h2>
    </div>
  )
}

export default Starships
