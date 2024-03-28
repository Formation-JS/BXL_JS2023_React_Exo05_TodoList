import './App.css'
import Footer from './containers/footer/footer.jsx'
import Header from './containers/header/header.jsx'
import TodoList from './containers/todo-list/todo-list.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
      <Footer />
    </>
  )
}

export default App
