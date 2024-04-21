import './App.css'
import { useState } from 'react'

function App () {
  const [locations, setLocations] = useState([
    { src: '/image/locations/place1.JPG', isGrayscale: false },
    { src: '/image/locations/place2.JPG', isGrayscale: false },
    { src: '/image/locations/place3.JPG', isGrayscale: false },
    { src: '/image/locations/place4.JPG', isGrayscale: false },
    { src: '/image/locations/place5.JPG', isGrayscale: false },
    { src: '/image/locations/place6.JPG', isGrayscale: false },
    { src: '/image/locations/place7.JPG', isGrayscale: false },
    { src: '/image/locations/place8.JPG', isGrayscale: false },
    { src: '/image/locations/place9.JPG', isGrayscale: false },
    { src: '/image/locations/place10.JPG', isGrayscale: false }
  ])

  const toggleGrayscale = index => {
    setLocations(prevLocations =>
      prevLocations.map((location, i) =>
        i === index
          ? { ...location, isGrayscale: !location.isGrayscale }
          : location
      )
    )
  }

  const [players, setPlayers] = useState([
    { text: 'ผู้เล่นที่ 1', isCrossOut: false },
    { text: 'ผู้เล่นที่ 2', isCrossOut: false },
    { text: 'ผู้เล่นที่ 3', isCrossOut: false },
    { text: 'ผู้เล่นที่ 4', isCrossOut: false },
    { text: 'ผู้เล่นที่ 5', isCrossOut: false },
    { text: 'ผู้เล่นที่ 6', isCrossOut: false },
    { text: 'ผู้เล่นที่ 7', isCrossOut: false }
  ])

  const toggleCrossOut = index => {
    setPlayers(prevPlayers =>
      prevPlayers.map((player, i) =>
        i === index ? { ...player, isCrossOut: !player.isCrossOut } : player
      )
    )
  }

  const resetAllState = () => {
    setLocations(
      locations.map(location => ({ ...location, isGrayscale: false }))
    )
    setPlayers(players.map(player => ({ ...player, isCrossOut: false })))
  }

  return (
    <div className='App'>
      <Header />
      <h1>สถานที่ ( 10 )</h1>
      <div className='image-row'>
        <LocationImage
          location={locations[0]}
          onClick={() => toggleGrayscale(0)}
        />
        <LocationImage
          location={locations[1]}
          onClick={() => toggleGrayscale(1)}
        />
      </div>
      <div className='image-row'>
        <LocationImage
          location={locations[2]}
          onClick={() => toggleGrayscale(2)}
        />
        <LocationImage
          location={locations[3]}
          onClick={() => toggleGrayscale(3)}
        />
      </div>
      <div className='image-row'>
        <LocationImage
          location={locations[4]}
          onClick={() => toggleGrayscale(4)}
        />
        <LocationImage
          location={locations[5]}
          onClick={() => toggleGrayscale(5)}
        />
      </div>
      <div className='image-row'>
        <LocationImage
          location={locations[6]}
          onClick={() => toggleGrayscale(6)}
        />
        <LocationImage
          location={locations[7]}
          onClick={() => toggleGrayscale(7)}
        />
      </div>
      <div className='image-row'>
        <LocationImage
          location={locations[8]}
          onClick={() => toggleGrayscale(8)}
        />
        <LocationImage
          location={locations[9]}
          onClick={() => toggleGrayscale(9)}
        />
      </div>

      <div className='player-container'>
        <h1>ผู้เล่น ( 7 )</h1>
        <PlayerDiv player={players[0]} onClick={() => toggleCrossOut(0)} />
        <PlayerDiv player={players[1]} onClick={() => toggleCrossOut(1)} />
        <PlayerDiv player={players[2]} onClick={() => toggleCrossOut(2)} />
        <PlayerDiv player={players[3]} onClick={() => toggleCrossOut(3)} />
        <PlayerDiv player={players[4]} onClick={() => toggleCrossOut(4)} />
        <PlayerDiv player={players[5]} onClick={() => toggleCrossOut(5)} />
        <PlayerDiv player={players[6]} onClick={() => toggleCrossOut(6)} />
      </div>

      <ResetButton onClick={resetAllState} />
      <div className='App-footer'></div>
    </div>
  )
}

function LocationImage ({ location, onClick }) {
  return (
    <div className='image-container' onClick={onClick}>
      <img
        src={location.src}
        alt='with Grayscale and Overlay'
        className={`my-image ${location.isGrayscale ? 'grayscale-image' : ''}`}
      />

      {/* {location.isGrayscale && <div className='x-overlay'>X</div>} */}

      <div className='overlay'>สถานที่ทดสอบ (test)</div>
    </div>
  )
}

function PlayerDiv ({ player, onClick }) {
  return (
    <div
      className={`player ${player.isCrossOut ? 'cross-out' : ''}`}
      onClick={onClick}
    >
      {player.text}
    </div>
  )
}

function ResetButton ({ onClick }) {
  return (
    <div className='image-container reset-button' onClick={onClick}>
      <img
        src='image/Button_Reset.png'
        alt='reset button'
        className='reset-button-image'
      />
    </div>
  )
}

function Header () {
  return (
    <div className='image-container'>
      <img src='/image/Top.png' alt='header' className='header-image' />
    </div>
  )
}
export default App
