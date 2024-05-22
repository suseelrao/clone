import React from 'react'

function Body() {
  return (
    <div>
      <h2 className='body-main'>A tiny studio making delightful apps for your Mac, brought to you by</h2>
      <div>
      <p className='body'>Date</p>
      </div>
      <div className='body-foot'>
        <h1 className='font'>Sleeve 2</h1>
        <h2 className='font1'>The ultimate music accessory for your Mac.</h2>
        <p className='font2'>Sleeve sits on the desktop, displaying and controlling the music you’re<br></br> currently playing in 
            Image of an app icon
            Apple Music, Image of an app icon Spotify, and Image of an app icon Doppler.
        </p>
        <div className='body-btn1'>
        <div className='body-btn'>
          <button className='btn-by'>
            Mac App Store
          </button>
          <button className='btn-by'>
            Buy Directly
            <button >
              $ 5.99
            </button>
          </button>
          </div>
          <p className='font3'>No subscriptions. No in-app<br></br> purchases. Requires macOS 11 Big Sur<br></br> or later.</p>
        </div>
      </div>
    </div>
  )
}

export default Body
