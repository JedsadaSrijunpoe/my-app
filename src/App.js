import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [locations, setLocations] = useState([
    {
      src: '/image/locations/place1.JPG',
      locationName: 'ปราสาท',
      isGrayscale: false
    },
    {
      src: '/image/locations/place2.JPG',
      locationName: 'ลานดอกไม้',
      isGrayscale: false
    },
    {
      src: '/image/locations/place3.JPG',
      locationName: 'หนองน้ำ',
      isGrayscale: false
    },
    {
      src: '/image/locations/place4.JPG',
      locationName: 'เรือโจรสลัด',
      isGrayscale: false
    },
    {
      src: '/image/locations/place5.JPG',
      locationName: 'ร้านสะดวกซื้อ',
      isGrayscale: false
    },
    {
      src: '/image/locations/place6.JPG',
      locationName: 'ฝั่งทะเลสาบ',
      isGrayscale: false
    },
    {
      src: '/image/locations/place7.JPG',
      locationName: 'โรงเตี๊ยม',
      isGrayscale: false
    },
    {
      src: '/image/locations/place8.JPG',
      locationName: 'กระท่อมลึกลับ',
      isGrayscale: false
    },
    {
      src: '/image/locations/place9.JPG',
      locationName: 'ถ้ำหัวกะโหลก',
      isGrayscale: false
    },
    {
      src: '/image/locations/place10.JPG',
      locationName: 'เหมืองแร่',
      isGrayscale: false
    }
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

      <Timer />

      <p className='header-text'>สถานที่ ( 10 )</p>
      <div className='location-container'>
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
      </div>

      <p className='header-text'>ผู้เล่น ( 7 )</p>
      <div className='player-container'>
        <PlayerDiv player={players[0]} onClick={() => toggleCrossOut(0)} />
        <PlayerDiv player={players[1]} onClick={() => toggleCrossOut(1)} />
        <PlayerDiv player={players[2]} onClick={() => toggleCrossOut(2)} />
        <PlayerDiv player={players[3]} onClick={() => toggleCrossOut(3)} />
        <PlayerDiv player={players[4]} onClick={() => toggleCrossOut(4)} />
        <PlayerDiv player={players[5]} onClick={() => toggleCrossOut(5)} />
        <PlayerDiv player={players[6]} onClick={() => toggleCrossOut(6)} />
      </div>

      <MyButton
        onClick={resetAllState}
        src='image/Button_Reset.png'
        className='reset-button'
      />
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

      <div className='overlay'>{location.locationName}</div>
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

function MyButton ({ onClick, src, className }) {
  return (
    <div className={className} onClick={onClick}>
      <img src={src} alt='reset button' className='button-image' />
    </div>
  )
}

function Header () {
  return (
    <div className='image-container'>
      <img src='/image/Top.png' alt='header' className='header-image' />
      <InformationButton />
    </div>
  )
}

function InformationButton () {
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () => {
    setIsOpen(true)
  }
  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <div className='information-button' onClick={openPopup}>
        <img
          className='information-button-image'
          src='/image/icon_i.png'
          alt='information-button'
        />
      </div>
      {isOpen && (
        <div className='image-popup' onClick={closePopup}>
          <img
            className='image-manual'
            src='image/IMG_7526.JPG'
            alt='Popup manual'
          />
          <div className='text-close-popup'>TAB TO CLOSE</div>
        </div>
      )}
    </div>
  )
}

function Timer () {
  const DEFAULT_COUNTDOWN = 600
  const DEFAULT_COUNTDOWN_ALMOST_UP = 60
  const [countDown, setCountdown] = useState(DEFAULT_COUNTDOWN)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isBlink, setIsBlink] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    if (isTimerRunning) {
      setIsBlink(false)
      const interval = setInterval(() => {
        if (countDown > 0) {
          setCountdown(countDown - 1)
          setIsBlink(false)
        } else {
          clearInterval(interval)
          setIsBlink(true)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isTimerRunning, countDown])

  useEffect(() => {
    if (isBlink) {
      const interval_blink = setInterval(() => {
        setIsHidden(!isHidden)
      }, 800)
      return () => clearInterval(interval_blink)
    } else {
      setIsHidden(false)
    }
  }, [isBlink, isHidden])

  const formatTimer = () => {
    const min = Math.floor(countDown / 60)
    const second = countDown % 60
    return `${min > 9 ? min : `0${min}`} : ${
      second > 9 ? second : `0${second}`
    }`
  }

  const startTimer = () => {
    setIsTimerRunning(true)
  }

  const stopTimer = () => {
    setIsTimerRunning(false)
  }

  const resetTimer = () => {
    setCountdown(DEFAULT_COUNTDOWN)
    setIsTimerRunning(false)
    setIsBlink(false)
  }

  return (
    <div className='timer-container'>
      {isTimerRunning ? (
        <MyButton
          onClick={stopTimer}
          src='image/Button_stop.png'
          className='start-button'
        />
      ) : (
        <MyButton
          onClick={startTimer}
          src='image/Button_start.png'
          className='start-button'
        />
      )}
      <div
        className={`timer-text-container ${
          countDown < DEFAULT_COUNTDOWN_ALMOST_UP && 'timer-text-almost-up'
        } ${isHidden && 'timer-text-hidden'}`}
      >
        {formatTimer()}
      </div>
      <MyButton
        onClick={resetTimer}
        src='image/Reset.png'
        className='reset-timer-button'
      />
    </div>
  )
}
export default App
