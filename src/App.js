import MyNav from './components/nav/MyNav';
import Main from './components/Main';

const App = () => {
  return (
    <div style={{backgroundImage: 'linear-gradient(to right bottom, #ffffff, #f8f5ff, #f4eaff, #f2deff, #f2d2ff, #ecd0ff, #e6cdff, #dfcbff, #d3d2ff, #c9d7ff, #c2ddff, #bee1ff)'}}>
      <MyNav />
      <Main />
    </div>

  )
}

export default App