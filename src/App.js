import React from 'react';

import cat1 from './img/w2.png';
import cat2 from './img/w1.png';
import logo from './img/logo.png';
import head from './img/head.png';
import m from './img/me.png';
import team from './img/team.png';
import down from './img/down.gif';
import gs from './img/gs.png';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

  <div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <header style={{margin: "3em"}}>
        <img src={logo} style={{width: "10em", float: "left"}}/>
        <a href="#OurStory">Our Mission</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#Demo">Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <a href="#Team">Team</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <a href="#Install">Get Started</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </header>

      <div class="container">
      	<div class="row">

          <div class="col-lg-8">
          <img src={head} alt="logo" style={{width: "40em", marginTop: "7em"}}/>
            <p>We help connect our customers with their favorite local Seattle
            businesses to thrive during COVID-19. <i>Small World</i> is a inclusive app platform for
            underdog businesses to be visible and flourish in our local marketplace.

            We offer local Seattle residents the portal to discover diverse,
            small businesses and owners can track customer engagement and share their
            products and services.
            </p>
          </div>
          <div class="col-lg-4" >
            <img src={cat1} alt="logo" style={{width: "20em", marginTop: "6em"}}/>
          </div>

      	</div>
      </div>



      <div class="container" id ="OurStory">
        <div class="row">
      <img src={m} style={{width:"100%", marginBottom:"7em", marginTop:"7em"}}/>
        </div>
      </div>


      <div class="container" id="Demo">
        <div class="row">
        <div class="yt-container">
                        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/_kFpeEPOKM0"></iframe>
                      </div>

        </div>
      </div>


      <div class="container" id="Team">
        <div class="row">

          <center><h1></h1></center>
      <img src={team} style={{width:"100%", marginBottom:"7em", marginTop:"7em"}}/>

        </div>
      </div>


      <div class="container" id="Install">
        <div class="row">

          <div class="col-lg-8" >
  <img src={gs} alt="logo"  style={{width:"100%", marginBottom:"7em", marginTop:"7em"}}/>

          </div>
          <div class="col-lg-4" >
          <img src={down} alt="logo" style={{width:"100%", marginBottom:"7em", marginTop:"7em"}} />
          </div>

        </div>
      </div>







    {/*  <div class="container">
      	<div class="row">

      		<div class="col-lg-4" >
      			<p>hei this is terry</p>
             <img src={cat1} alt="logo" />
      		</div>

          <div class="col-lg-8">
            <p>Through our app, users can find local and small businesses easily on a filtered map. We provide users the ability to filter these businesses for three factors: X, Y, Z</p>
          </div>
      	</div>
      </div> */}

    </div>
  )
}

export default App;
