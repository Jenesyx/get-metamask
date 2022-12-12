import React from 'react'
import './style.css'

function mainHeader({connectWallet, disconnectWallet, Address, setAddress}) {
  return (
    <>
      <div>
        <nav className='nav'>
          <div>
            {Address == null &&
              <button type='submit' onClick={connectWallet} className='connectButton'>
                Connect
              </button>
            }

            {Address !== null &&
              <button type='submit' onClick={disconnectWallet} className='disconnectButton'>
                Disconnect
              </button>
            }
          </div>
        </nav>
        <div className='showaddress'>
            <div>
              <h2>
                {Address !== null &&
                    <span>{Address}</span>
                }
                {Address == null && 
                    <span>Your wallet is not connected, click the "connect" button.</span>
                }
              </h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default mainHeader