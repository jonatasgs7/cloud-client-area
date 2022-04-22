import React, { useState } from 'react'
import { css } from '@stitches/react';
import {FaUserPlus} from "react-icons/fa" 
import Modal from './Modal'

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

const formContainer = css({
    margin:'10px 0'
})

const formCampo = css({
    width:'100%', minHeight:'60px', border:'2px solid #D9E1E7', borderRadius:'7px', textIndent:'10px', fontSize:'15px'
})

const formBotaoCadastrar = css({
    width:'100%', minHeight:'60px', borderRadius:'7px', backgroundColor:'#1AD598', border:0, fontSize:'18px', color:'#fff', textTransform:'uppercase', fontWeight:'bold', cursor:'pointer',
    '&:hover': {
        backgroundColor:'#1AD598dd'
    }
})

const tituloModal = css({
    textAlign:'center', textTransform:'uppercase', marginBottom:'30px'
})

export default function Totals(){

    const [list, setList] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        // const data = {
        //     cadastroCodigo: e.target.elements.cadastroCodigo.value,
        //     cadastroLogin: e.target.elements.cadastroLogin.value,
        //     cadastroEmail: e.target.elements.cadastroEmail.value,
        //     cadastroSenha: e.target.elements.cadastroSenha.value,
        // }
        // setList(...list, data)
    }

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
                    <button id="cadastrar" className={buttonInsert()} onClick={() => setIsModalOpen(true)}><FaUserPlus /> Cadastrar Usuário</button>
                </div>

                {isModalOpen ? (
                    <Modal onClose={ () => setIsModalOpen(false) }>
                        <div className="modalConteudo">
                            <h2 className={tituloModal()}>Cadastrar usuário</h2>
                            <form id="formCadastro" className="formCadastro" onSubmit={handleSubmit}>
                                <div className={formContainer()}>
                                    <input type="text" name="cadastroCodigo" id="cadastroCodigo" className={formCampo()} maxLength="6" placeholder="Código* (Exemplo: 123456)" required />
                                </div>

                                <div className={formContainer()}>
                                    <input type="text" name="cadastroLogin" id="cadastroLogin" className={formCampo()} maxLength="40" placeholder="Login* (Exemplo: 123456.teste)" required />
                                </div>

                                <div className={formContainer()}>
                                    <input type="email" name="cadastroEmail" id="cadastroEmail" className={formCampo()} maxLength="40" placeholder="E-mail*" required />
                                </div>

                                <div className={formContainer()}>
                                    <input type="password" name="cadastroSenha" id="cadastroSenha" className={formCampo()} placeholder="Senha*" required />
                                </div>

                                <div className={formContainer()}>
                                    <button type="submit" className={formBotaoCadastrar()}>Cadastrar usuário</button>
                                </div>
                            </form>
                        </div>
                    </Modal>
                ) : null}

            </div>
        
        </>
    )
}