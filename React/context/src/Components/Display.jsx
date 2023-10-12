import React, { useContext } from 'react'

import { useData } from '../Context/DataContext'

function Display() {

    const { textareaData } = useData();
    {console.log(textareaData)}

  return (
    <div>Display
        <h1>{textareaData}</h1>
    </div>
  )
}

export default Display