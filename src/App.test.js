import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';


test('addTodo', () => {
  render(<App />)

  userEvent.type(screen.getByRole('textbox'), 'zaid')
  userEvent.click(screen.getByText(/add todo/i))
  const todo = screen.getByText('zaid')
  
})
test('checkErrorMessage', () => {
  render(<App />)
  userEvent.click(screen.getByText(/add todo/i))
  const todo = screen.getByTestId('error');
  
})
test('deleteTodo', () => {
  render(<App />)

  userEvent.type(screen.getByRole('textbox'), 'zaid')
  userEvent.click(screen.getByText(/add todo/i))
  userEvent.click(screen.getByText(/x/i))
  screen.queryByText('zaid')
  
})
test('completeTask', () => {
  render(<App />)

  userEvent.type(screen.getByRole('textbox'), 'zaid')
  userEvent.click(screen.getByText(/add todo/i))
  const cbl = screen.getByTestId("cbShowHide")
  expect(cbl).toBeInTheDocument();
  expect(cbl).not.toBeChecked();
  userEvent.click(cbl);
  expect(cbl).toBeChecked();
  userEvent.click(cbl);
  expect(cbl).not.toBeChecked();
  
})