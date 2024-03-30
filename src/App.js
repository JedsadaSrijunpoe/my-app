import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className='App-header'></div>
      <br/>
      <p className='topic'>สถานที่ ( 10 ) </p><br/><br/>
      <div className="image-row">
        <LocationImage src={"/place1.jpg"}/>
        <LocationImage src={"/place2.jpg"}/>
      </div>
      <div className="image-row">
        <LocationImage src={"/place3.jpg"}/>
        <LocationImage src={"/place4.jpg"}/>
      </div>
      <div className='image-row'>
        <LocationImage src={"/place5.jpg"}/>
        <LocationImage src={"/place6.jpg"}/>
      </div>
      <div className='image-row'>
        <LocationImage src={"/place7.jpg"}/>
        <LocationImage src={"/place8.jpg"}/>
      </div>
      <div className='image-row'>
        <LocationImage src={"/place9.jpg"}/>
        <LocationImage src={"/place10.jpg"}/>
      </div>
      
      <br/>
      <div className='player-container'>
        <br/>
        <p className='topic'>ผู้เล่น ( 7 )</p><br/><br/>
        <PlayerDiv text={"ผู้เล่นที่ 1"} /><br/>
        <PlayerDiv text={"ผู้เล่นที่ 2"} /><br/>
        <PlayerDiv text={"ผู้เล่นที่ 3"} /><br/>
        <PlayerDiv text={"ผู้เล่นที่ 4"} /><br/>
        <PlayerDiv text={"ผู้เล่นที่ 5"} /><br/>
        <PlayerDiv text={"ผู้เล่นที่ 6"} /><br/>
        <PlayerDiv text={"ผู้เล่นที่ 7"} /><br/>
        <br/>
      </div>

      <br/>
      <ResetButton />
    </div>
  );
}

function LocationImage({src}) {
  const [isGrayscale, setIsGrayscale] = useState(false);
  const resetState = () => {
    setIsGrayscale(false);
  };
  return (
    <div className='image-container'>
        <img
            src={src}
            alt="with Grayscale and Overlay"
            className={`my-image ${isGrayscale ? 'grayscale-image' : ''}`}
            onClick={() => setIsGrayscale(!isGrayscale)}
        />
    </div>
  );

}

function PlayerDiv({text}) {
  const [isCrossOut, setIsCrossOut] = useState(false);
  const resetState = () => {
    setIsCrossOut(false);
  };

  return (
    <div 
        className={`player ${isCrossOut ? 'cross-out' : ''}`} 
        onClick={() => setIsCrossOut(!isCrossOut)}
    >
        {text}
    </div>
  );
}

function ResetButton({onClick}) {
  return (
    <div>
      <button 
        className='reset-button'
        onClick={onClick}
        >
        เริ่มใหม่
      </button>
    </div>
  );
}
export default App;
