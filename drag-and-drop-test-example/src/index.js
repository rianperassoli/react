import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { DragDropContext } from 'react-beautiful-dnd'
import '@atlaskit/css-reset'

import InitialData from './initial-data'
import Column from './column'

const App = () => {

  const [boardItems] = useState(InitialData)

  const onDragEnd = (result) => {
    console.log(result)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        boardItems.columnOrder.map(columnId => {
          const column = boardItems.columns[columnId]
          const tasks = column.taskIds.map(taskId => boardItems.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })
      }
    </DragDropContext>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
