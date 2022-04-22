import React from 'react'
import {css} from '@stitches/react'
import Logo from '../assets/img/nuvem.svg'
import Fundo from '../assets/img/fundo@2x.png'

const topHeader = css({
    width:'100%', backgroundColor:'#00dbff', position:'relative', top:0, left:0
})

const logoHeader = css({
    backgroundImage:`url(${Fundo})`, backgroundSize:'cover', backgroundPosition:'center', backgroundColor:'#008993'
})

const topHeaderText = css({
    color:'#fff', textAlign:'center', padding:'5px 15px', textTransform:'uppercase', fontSize:'11px', fontWeight:'bold'
})

const logoContainer = css({
    padding:'30px 0', textAlign:'center'
})

const logo = css({
    width:'100%', maxHeight:'120px', padding:'0 15px',
    '@media (max-width:768px)': {
        maxHeight:'80px'
    }
})

export default function Header(props){
    return (
        <>
            <div className={topHeader()}>
                <p className={topHeaderText()}>Área administrativa</p>
            </div>

            <header className={logoHeader()}>
                <div className={logoContainer()}>
                    <img src={Logo} alt="Nuvem" title={props.name} className={logo()} />
                </div>
            </header>
        </>
    )
}