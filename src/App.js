import MyNav from './components/nav/MyNav';
import Main from './components/Main';
import { BsSuitHeartFill } from 'react-icons/bs';



const App = () => {
  return (
    <div style={{backgroundImage: 'linear-gradient(to right bottom, #ffffff, #f8f5ff, #f4eaff, #f2deff, #f2d2ff, #ecd0ff, #e6cdff, #dfcbff, #d3d2ff, #c9d7ff, #c2ddff, #bee1ff)'}}>
      <MyNav />
      <Main />
      <footer style={{backgroundColor: '#f8f5ff', marginTop: '30px', padding: '10px 0 0 0', textAlign: 'center'}}>
        <p>
          <b>Made with <BsSuitHeartFill /> by Putri Nurhaliza, 2022</b>
        </p>
      </footer>
    </div>

  )
}

export default App