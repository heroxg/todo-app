import { screen, render, fireEvent} from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import TodoForm from "./TodoForm";

test("That the input field is empty on page render", () => {
    render (
        <Provider store={store}>
            <TodoForm />
        </Provider>
    )
    const inputElm = screen.getByPlaceholderText("Creat a task to get started");
    expect(inputElm.value).toBe("");
})

test("That the input field is not empy when a user is typing", () => {
    render (
        <Provider store={store}>
            <TodoForm />
        </Provider>
    )
    const inputElm = screen.getByPlaceholderText("Creat a task to get started");
    fireEvent.change(inputElm, {target: {value: "Attend Meeting at the office"}})
    expect(inputElm.value).toBe("Attend Meeting at the office")
})

test("that the input field is empty when user clicks on the add to button", () => {
    render(
         <Provider store={store}>
            <TodoForm />
        </Provider>
    )
    const inputElm = screen.getByPlaceholderText("Creat a task to get started");
    const btn = screen.getByRole('button', {name: 'Add todo'})
    fireEvent.click(btn, {target: {value: "" }})
    expect(inputElm.value).toBe("")
})