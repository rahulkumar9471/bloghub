import React from 'react'
import { commonInputClasses } from './Theme'

const LiveSearch = () => {
  return (
    <div>
        <input type="text" className={commonInputClasses + 'border-2 p-1 text-lg w-full rounded'} />
    </div>
  )
}

export default LiveSearch