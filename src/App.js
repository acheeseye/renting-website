import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <main>
            <div id="landing">
              <div id="landing-text">
                <div id="landing-text-inner">
                  <h1>Renting From Mom</h1>
                  <h2>Beautiful buildings for rent</h2>
                  <a href="#images" class="btn" id="view-units">
                    View Units
                    </a>
                </div>
              </div>
              <div id="landing-image"></div>
            </div>
            <div id="images">
              <div id="header">
                <h2>Units for rent</h2>
              </div>
              <img src="https://source.unsplash.com/561igiTyvSk" alt=""></img>
              <div class="caption">
                <h3>Unit One</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, unde.</p>
              </div>
              <img src="https://source.unsplash.com/1ddol8rgUH8" alt=""></img>
              <div class="caption">
                <h3>Unit Two</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, unde.</p>
              </div>
              <img src="https://source.unsplash.com/VW5YwCYbPyk" alt=""></img>
              <div class="caption">
                <h3>Unit Three</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, unde.</p>
              </div>
              <img src="https://source.unsplash.com/PJMbzWAz26M" alt=""></img>
              <div class="caption">
                <h3>Unit Four</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, unde.</p>
              </div>
            </div>
          </main>
          <footer>
            <h3>Get In Touch</h3>
            <p>Email or call to set up a consult</p>
            <p>Email: yiyin314@gmail.com</p>
            <p>Phone: (907) 764 6347</p>
          </footer>

          <script src="http://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
          <script src="js/main.js"></script>
        </body>
      </header>
    </div >
  );
}

export default App;
