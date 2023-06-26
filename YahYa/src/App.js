import React, { Fragment} from 'react'
import './index.css'
import Home from './routes/Home'
import {Routes,Route} from 'react-router-dom'
import Scrollbtn from './styled/Scrollbtn'
import CarRent from './routes/CarRent'
import Flight from './routes/Flight'
import Hotel from './routes/Hotel'
import ResultPage from './components/Flight/FlightsearchResult/ResultPage'

const App=()=> {

  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // }, []);
  return (
    <>

    <Fragment>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} /> */}
        <Route path="/carrent" element={<CarRent/>} />
        <Route path="/flight" element={<Flight/>} />
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/flightresult" element={<ResultPage/>} />
      </Routes>
      <Scrollbtn/>
      </Fragment>
    </>
  )
}

export default App