import { render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import TodoList from '../Todos/List'

const todos = [
  {
    _id: 1,
    text: 'This is test',
    done: false,
  },
]

test('should renders content', () => {
  const deleteTodo = jest.fn()
  const completeTodo = jest.fn()

  const container = render(
    <TodoList
      todos={todos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  ).container
  // eslint-disable-next-line testing-library/no-node-access
  const div = container.querySelector('.text')

  expect(div).toHaveTextContent('This is test')
})
