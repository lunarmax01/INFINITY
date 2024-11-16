import { Link } from 'react-router-dom';
import * as Tone from 'tone';


function Hom() {
  // const handleClick = () => {
  //   const sound = new Audio('src/material/audio/mixkit-futuristic-door-open-183.mp3'); // Adjust the path to your sound file
  //   sound.play();
  // };


  const bass = () => {
    const osc = new Tone.Oscillator().toDestination();
    osc.frequency.value = "C55";
    osc.frequency.rampTo("c1", 2);
    osc.start().stop("+9");
  };

  return (<>
     <div className="w-[100%] h-[100vh] overflow-hidden bg-[#181818]">
     <svg width="100%" height="auto" viewBox="0 0 2503 1403" background='red' xmlns="http://www.w3.org/2000/svg">
      <path 
        className="path" 
        stroke="#F02E6E" 
        strokeWidth="5" 
        fillRule="evenodd" 
        strokeLinecap="butt" 
        strokeLinejoin="round" 
        fill="none" 
        strokeOpacity="1" 
        strokeDasharray="50,20" 
        strokeDashoffset="3000" 
        d="M31.5 340L30.0045 62.3347C30.0016 61.8006 30.2125 61.2875 30.5903 60.9097L91.5 0" 
      />
      <path 
        className="path" 
        stroke="#F02E6E" 
        strokeWidth="5" 
        fillRule="evenodd" 
        strokeLinecap="butt" 
        strokeLinejoin="round" 
        fill="none" 
        strokeOpacity="1" 
        strokeDasharray="50,20" 
        strokeDashoffset="3000" 
        d="M2370 0.5V214" 
      />
      <path 
        className="path" 
        stroke="#63F2F1" 
        strokeWidth="2" 
        fill="none" 
        fillRule="evenodd" 
        strokeLinecap="butt" 
        strokeLinejoin="round" 
        strokeOpacity="1" 
        strokeDasharray="50,20" 
        strokeDashoffset="3000" 
        d=" M2360 -0.5V203.172C2360 203.702 2360.21 204.211 2360.59 204.586L2487.41 331.414C2487.79 331.789 2488 332.298 2488 332.828V1377.5C2488 1378.6 2487.1 1379.5 2486 1379.5H1827.83C1827.3 1379.5 1826.79 1379.29 1826.41 1378.91L1794.59 1347.09C1794.21 1346.71 1793.7 1346.5 1793.17 1346.5H1507.33C1506.8 1346.5 1506.29 1346.71 1505.91 1347.09L1474.09 1378.91C1473.71 1379.29 1473.2 1379.5 1472.67 1379.5H552.328C551.798 1379.5 551.289 1379.71 550.914 1380.09L531.086 1399.91C530.711 1400.29 530.202 1400.5 529.672 1400.5H257.828C257.298 1400.5 256.789 1400.29 256.414 1399.91L236.586 1380.09C236.211 1379.71 235.702 1379.5 235.172 1379.5H19C17.8954 1379.5 17 1378.6 17 1377.5V576.828C17 576.298 17.2107 575.789 17.5858 575.414L40.4142 552.586C40.7893 552.211 41 551.702 41 551.172V350.328C41 349.798 40.7893 349.289 40.4142 348.914L17.5858 326.086C17.2107 325.711 17 325.202 17 324.672V54.3284C17 53.798 17.2107 53.2893 17.5858 52.9142L71 -0.5" 
      />
      {/* Fourth path with another custom stroke */}
      <path 
        className="path" 
        stroke="#F02E6E" 
        strokeWidth="5" 
        fill="none" 
        fillRule="evenodd" 
        strokeLinecap="butt" 
        strokeLinejoin="round" 
        strokeOpacity="1" 
        strokeDasharray="50,20" 
        strokeDashoffset="3000" 
        d="M2488 444.5L2468.59 463.914C2468.21 464.289 2468 464.798 2468 465.328V837.672C2468 838.202 2468.21 838.711 2468.59 839.086L2488 858.5M2488 1172L2500.91 1184.91C2501.29 1185.29 2501.5 1185.8 2501.5 1186.33V1386C2501.5 1387.1 2500.6 1388 2499.5 1388H2201.83C2201.3 1388 2200.79 1387.79 2200.41 1387.41L2179.59 1366.59C2179.21 1366.21 2178.7 1366 2178.17 1366H1879.33C1878.8 1366 1878.29 1366.21 1877.91 1366.59L1864.5 1380"
      />
      {/* Fifth path with additional stroke details */}
      <path 
        className="path" 
        stroke="#F02E6E" 
        strokeWidth="5" 
        fill="none" 
        fillRule="evenodd" 
        strokeLinecap="butt" 
        strokeLinejoin="round" 
        strokeOpacity="1" 
        strokeDasharray="50,20" 
        strokeDashoffset="3000" 
        d="M1715 1346.5L1705.59 1355.91C1705.21 1356.29 1704.7 1356.5 1704.17 1356.5H1509.83C1509.3 1356.5 1508.79 1356.71 1508.41 1357.09L1476.59 1388.91C1476.21 1389.29 1475.7 1389.5 1475.17 1389.5H1402.83C1402.3 1389.5 1401.79 1389.29 1401.41 1388.91L1392 1379.5" 
      />
      {/* Sixth path with custom stroke */}
      <path 
        className="path" 
        stroke="#F02E6E" 
        strokeWidth="5" 
        fill="none" 
        fillRule="evenodd" 
        strokeLinecap="butt" 
        strokeLinejoin="round" 
        strokeOpacity="1" 
        strokeDasharray="50,20" 
        strokeDashoffset="3000" 
        d="M880.5 1380.5L863.086 1363.09C862.711 1362.71 862.202 1362.5 861.672 1362.5H546.828C546.298 1362.5 545.789 1362.71 545.414 1363.09L519.586 1388.91C519.211 1389.29 518.702 1389.5 518.172 1389.5H352.828C352.298 1389.5 351.789 1389.71 351.414 1390.09L340 1401.5M18 1309.5L1.58579 1293.09C1.21071 1292.71 1 1292.2 1 1291.67V971.328C1 970.798 1.21071 970.289 1.58579 969.914L18 953.5L30.9142 940.586C31.2893 940.211 31.5 939.702 31.5 939.172V564"
      />
    </svg>
      <Link to='Pagehome'>
      <button onClick={bass} className="sci-fi-button relative bottom-[390px] left-[660px] z-10">Open website</button>4
      
      </Link>
{/* anim */}
     <div className="w-[700px] h-[500px] relative bottom-[650px] left-[435px] bg-[url('https://i.pinimg.com/originals/e3/7c/21/e37c2105950eb3d999f38ddc6cad2860.gif')] bg-no-repeat bg-center"></div>
     </div>

  </>);
}

export default Hom;