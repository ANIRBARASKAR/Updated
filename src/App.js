import { BrowserRouter , Route , Routes} from 'react-router-dom';


import Header from './Home/Header';
import Footer from './Home/Footer'
import MentorshipCourses from './components/MentorshipCourses';
import Home from './Home/Home'
import Page from './Page'
import Login from './Login'
import About from './About'
import Team from './Team'
import Register from './Register'
import Logout from './Logout'
import IimIndroreForm from './components/IimIndroreForm';

const App = () => { 
  return (
    <BrowserRouter>
    <Header/>
   
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/page" element={<Page/>} />
<Route path="/login" element={<Login />} />
<Route path="/about" element={<About />} />
<Route path="/team" element={<Team />} />
<Route path="/register" element={<Register />} />
<Route path="/Logout " element={<Logout  />} />
<Route path='/mentorship_courses' element={<MentorshipCourses/>}/>
<Route path='/iimindoreform' element={<IimIndroreForm/>} />
    </Routes>
      {/* <Routes>
         <Route path='/' element={<Platinum/>}/>
         <Route path='/booking' element={<BookingForm/>}/>
         <Route path='/icons' element={<Icons/>}/>
         <Route path='/testimonial' element={<Testimonials/>}/>
         <Route path='/mentors' element={<Mentors/>}/>
      </Routes> */}
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
{/* <Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/page" element={<Page/>} />
<Route path="/login" element={<Login />} />
<Route path="/about" element={<About />} />
<Route path="/team" element={<Team />} />
<Route path="/register" element={<Register />} />
<Route path="/Logout " element={<Logout  />} />
</Routes>
<Footer/> */}