import React from 'react'
import { css } from '@stitches/react'

const modal = css({
    width:'100%', height:'100%', position:'fixed', top:0, left:0, zIndex:'8000', visibility:'visible', opacity:1, transition:'all 200ms linear',
})

const modalOverlay = css({
    width:'100%', height:'100%', position:'fixed', top:0, left:0, zIndex:'8001', background:'rgba(0,0,0,.7)',
})

const modalContainer = css({
    width:'600px', minHeight:'250px', position:'fixed', top:'50%', left:'50%', opacity:1, padding:'30px', transform:'translate(-50%, -50%) scale(0.7)', backgroundColor:'#fff', borderRadius:'7px', overflow:'hidden', zIndex:'8002', transition:'all 120ms linear',
    '@media (max-width:768px)': {
        width:'calc(100% - 30px)', left:'15px', transform:'translate(0, -50%)'
    }
})

const buttonClose = css({
    minHeight:'50px', border:'2px solid #D9E1E7', backgroundColor:'#fff', borderRadius:'7px', fontSize:'15px', paddingLeft:'20px', paddingRight:'20px', cursor:'pointer', float:'right', marginTop:'15px',
    '&:hover':{
        border:'2px solid #ea3a3d', backgroundColor:'#ea3a3d', color:'#fff'
    }
})

export default function Modal( { onClose = () => {}, children } ){

    return (
        <>
            <div className={modal()}>
                <div className={modalOverlay()} onClick={onClose}></div>
                <div className={modalContainer()}>
                    <div className="content">
                        {children}
                    </div>
                    
                    <button className={buttonClose()} onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </>
    )
}