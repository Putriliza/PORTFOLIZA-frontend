import Nav from './components/nav/Nav';
import NavProvider from './context/NavContext'
import Main from './components/Main';

const App = () => {

  return (
    <div className='container'>
      <NavProvider>
        <Nav />
        <Main />
      </NavProvider>
    </div>

  )
}

export default App