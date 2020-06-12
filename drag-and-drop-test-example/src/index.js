import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import '@atlaskit/css-reset'

import InitialData from './initial-data'
import Column from './column'

const Container = styled.div`
  display: flex;
`

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

    const start = boardItems.columns[source.droppableId]
    const finish = boardItems.columns[destination.droppableId]

    if (start === finish) {
      const newTasksIds = Array.from(start.taskIds)
      newTasksIds.splice(source.index, 1)
      newTasksIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTasksIds
      }
      setBoardItems({ ...boardItems, columns: { ...boardItems.columns, [newColumn.id]: newColumn } })

      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    setBoardItems({ ...boardItems, columns: { ...boardItems.columns, [newStart.id]: newStart, [newFinish.id]: newFinish } })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {
          boardItems.columnOrder.map(columnId => {
            const column = boardItems.columns[columnId]
            const tasks = column.taskIds.map(taskId => boardItems.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
          })
        }
      </Container>
    </DragDropContext>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
