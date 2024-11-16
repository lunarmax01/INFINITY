import 'animate.css';
import Navbar from './navbar';
import Object from './object';
function Pagehome() {
    const sound = new Audio('src/material/audio/mixkit-futuristic-door-open-183.mp3'); 

    // Sahifa yuklanganda (reload) ovoz ijro etiladi
    window.onload = function() {
      sound.play();
    };
    return ( <>
    <Navbar/>
    <div class="w-[100%] h-[100vh] animate__animated animate__fadeInUp bg-[url('https://images3.alphacoders.com/174/174937.jpg')] bg-cover"><Object/></div>
    
    </> );
}

export default Pagehome;