
import './App.css';
import { Link ,Route,Routes} from 'react-router-dom';
import SlideShow from './components/SlideShow';
import Webcam from './components/Webcam';

function App() {
  return (
    <>
       <div className='app' >
        <nav className='app_navbar' >
          <div className='navbar_left'>
             <Link to="/" ><img className='navabar_img' src="https://firebasestorage.googleapis.com/v0/b/whatsapp-mern-3546a.appspot.com/o/images%2FShinjite.png?alt=media&token=c22d90ec-91fc-47d9-8cc3-04a5dd4badf4" alt="" /></Link> 
             <div>
                <h1 className='app_heading' >Shinjite Drinks</h1>
             </div>
          </div>
          <div className='navbar_right'>

              <span className='right_items' >
                {/* <InfoIcon/> */}
                <p>Home</p>
              </span>
              <span className='right_items' >
                {/* <LogoutIcon/> */}
                <p>About</p>
              </span>
              <span className='right_items' >
                <button className='admin_button' >Admin Login</button>
              </span>

          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<SlideShow/>} />
          <Route exact path='/orders' element={<Webcam/>} />
        </Routes>
        <footer className='app_footer' > Copyrigth &copy; Shinjite Drinks  </footer>
      </div>
    </>
  );
}

export default App;
