import TodoForm from '../components/todoform/TodoForm';
import TodoList from '../components/todolist/TodoList';
import Header from '../components/header/Header';


const Home = () => {
  return (
    <div>
      <div className='top__content'>
        <Header />
        <TodoForm />
      </div>
      <div className='body__content'>
       <TodoList />
      </div>
    </div>
  )
}

export default Home
