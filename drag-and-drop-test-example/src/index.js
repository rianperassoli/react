import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { DragDropContext } from 'react-beautiful-dnd'
import '@atlaskit/css-reset'

import InitialData from './initial-data'
import Column from './column'

const App = () => {

  const [boardItems, setBoardItems] = useState(InitialData)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }
    if ((destination.droppableId === source.droppableId) && (destination.index === source.index)) {
      return
    }

    const column = boardItems.columns[source.droppableId]
    const newTasksIds = Array.from(column.taskIds)
    newTasksIds.splice(source.index, 1)
    newTasksIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTasksIds
    }

    setBoardItems({ ...boardItems, columns: { ...boardItems.columns, [newColumn.id]: newColumn } })
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
