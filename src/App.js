import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Events from "./components/EventCard";
import Profile from "./pages/Profile";
import "./App.css"
import { useState } from "react";
import { useEffect } from "react";
import { getAllEvents } from "./events-api";
import { Link } from "react-router-dom"
import { MyContext } from './context/Context'

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Slider from "@mui/material/Slider";

function App() {

  const [event, setEvent] = useState([]);

  const [range, setRange] = React.useState([5, 30]);
   function handleChanges(event, newValue) {
      setRange(newValue);
   }

  useEffect(() => {
    const EventsData = async () => {
      const eventData = await getAllEvents();
      setEvent(eventData._embedded.events);
      console.log(eventData._embedded.events)
    };
    EventsData();
  }, []);

  return (
    <div className="App">
      <h1>ticketmaster</h1>

      {event.map((eventItem, id) => (
        <>
          <div className="imageDiv">
            <img src={eventItem.images[0].url} alt='' />
          </div>

          <div>
            <p className="title" key={eventItem.id}>  {eventItem.name}</p>
            <p className="content" key={eventItem.dateTime}>Date:{eventItem.dates.start.localDate} Time:{eventItem.dates.start.localTime}</p>

{eventItem.priceRanges && <p className="content" > ${eventItem.priceRanges[0].min}-${eventItem.priceRanges[0].max} {eventItem.priceRanges[0].currency}</p>}


{/* <div style = {{ width: "32rem", padding: "20px" }}>
         <h3> Creating the range slider using the material UI in react JS </h3>
         <Slider value = {range} onChange = {handleChanges} valueLabelDisplay="auto"/>
         The selected range is {range[0]} - {range[1]}
      </div> */}



            {/* <p className="content">{eventItem.promoter.id} </p>   */}

            {/* <p className="content">{eventItem.priceRanges[0].min} </p>   */}
            {/* <a className="content" href = {eventItem.seatmap.staticUrl}>Seats map</a>  */}

          </div>
        </>
      )
      )}

      {/* <MyContext.Provider value={{ event }}> 
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Events />} />
          <Route path="/news/:title" element={<Profile/>} />
          <Route path="/about" element={<About />} />
        </Routes>
       </MyContext.Provider>   */}
    </div>
  );
}

export default App;
