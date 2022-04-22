import React from 'react'
import { css } from '@stitches/react';
import {FaUserPlus} from "react-icons/fa" 

const totalsContainer = css({
    width:'100%', display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'30px',
    '@media (max-width:768px)': {
        flexWrap: 'wrap', gap:'10px', marginTop:'15px'
    }
})

const countItem = css({
    width:'100%', minHeight:'75px', border:'1px solid #D9E1E7CC', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'15px', boxSizing:'border-box', borderRadius:'7px'
})

const countItemText = css({
    fontSize:'14px', fontWeight:'bold', marginRight:'10px'
})

const countItemQty = css({
    fontSize:'32px', color:'#1ad598', fontWeight:'bold'
})

const buttonInsert = css({
    width:'100%', minHeight:'75px', borderRadius:'7px', fontSize:'16px', fontWeight:'bold', textTransform:'uppercase', backgroundColor:'#1ad598', border:0, cursor:'pointer', color:'#fff',
    '&:hover': {backgroundColor:'#1DE3A1'},
})

export default function Totals(){
    return (
        <>

            <div className={`container ${totalsContainer}`}>

                <div className={countItem()}>
                    <div className={countItemText()}>Quantidade de usuários cadastrados:</div>
                    <div className={countItemQty()}>2</div>
                </div>

                <div className={countItem()}>
                    <div className={countItemText()}>Limite de usuários permitidos:</div>
                    <div className={countItemQty()}>10</div>
                </div>

                <div className="countItem" style={{width:'100%'}}>
                    <button id="cadastrar" className={buttonInsert()}><FaUserPlus /> Cadastrar Usuário</button>
                </div>

            </div>
        
        </>
    )
}