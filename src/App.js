import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from "react-tsparticles";


function App() {
  return (
    <>
      <Particles
        options={{

          particles:{

              number: {
                value: 200,
                limit: 300,
                density: {
                  enable: true,
                  value_area: 800
                }
              },

              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00"
                },
                polygon: {
                  nb_sides: 5
                },
              },
          }

        }}
    />


      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
