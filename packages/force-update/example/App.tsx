import React, { useRef } from 'react'

import { useForceUpdate } from '../src'

const App = () => {
  const renderTimes = useRef(0)
  const forceUpdate = useForceUpdate()
  renderTimes.current++

  return (
    <div>
      Rendered {renderTimes.current} times
      <button onClick={forceUpdate}>Update</button>
    </div>
  )
}

export default App
