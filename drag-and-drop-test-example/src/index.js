import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'

import InitialData from './initial-data'
import Column from './column'

const App = () => {

  const [boardItems] = useState(InitialData)

  return (
    boardItems.columnOrder.map(columnId => {
      const column = boardItems.columns[columnId]
      const tasks = column.taskIds.map(taskId => boardItems.tasks[taskId])

      return <Column key={column.id} column={column} tasks={tasks} />
    })
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
