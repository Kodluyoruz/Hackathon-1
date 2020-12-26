  
import React from 'react'
import {ReactFlvPlayer} from 'react-flv-player'


function live() {
    return (
        <>
        <h1 className="mt-5 mb-5">Canlı Yayın </h1>
        <div class="livestrm" >
          <ReactFlvPlayer
          url = "ws://tr.smtl.me:8081/live/deneme.flv"
          heigh = "100%"
          width = "100%"
          isMuted={true}
        />
        </div>
        </>
    )
}


export default live