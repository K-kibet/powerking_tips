import { Routes, Route} from "react-router-dom";
import { HelmetProvider, HelmetData  } from "react-helmet-async";
import { useEffect, useState, useContext} from 'react';
import { AuthContext } from './AuthContext'

import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import News from './pages/News';
import SingleNews from './pages/SingleNews';
import Admin from './pages/Admin';
import About from './pages/About';
import Error from './pages/Error';
import Topbar from "./components/Topbar/Topbar";
import Tips from "./pages/Tips";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Ticket from "./pages/Ticket/Ticket";

const helmetData = new HelmetData({});

function App() {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [isPremium, setIsPremium] = useState(true)
  
  useEffect(() => {
    if(loading){
      if (window.document.readyState === "complete"){
        setLoading(!loading)
      } else {
        setLoading(false);
      }
    }
    
  }, [loading]);


  
  useEffect(() => {
    currentUser && console.log(currentUser)//getuser(currentUser)
}, [currentUser])

  return (
    <HelmetProvider>
    <div className="App">
      {
        loading&& <Loader />
      }
      {
      !loading && <>
      <Topbar isPremium = {isPremium}/>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='tips' element={<Tips />} />
          <Route path='pay' element={currentUser ? <Ticket /> : <Login />}  />
          <Route path='blogs' element={<News />} />
          <Route path='blogs/:id' element={<SingleNews />} />
          <Route path='admin' element={currentUser ? <Admin /> : <Login />}  />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          
      </Routes>
      <Footer/>
      </>
      }
    </div>
    
    </HelmetProvider>
  );
}
export default App;

const { helmet } = helmetData.context;

