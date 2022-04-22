import React, { useState } from 'react'
import { css } from '@stitches/react'
import {FaTrashAlt} from "react-icons/fa"
import Modal from './Modal' 

const table = css({
    width:'100%', padding:'15px', border:'1px solid #D9E1E7CC', borderRadius:'7px', marginTop:'30px'
})

const tableInitial = css({
    display:'flex', justifyContent:'space-between'
})

const formSearchInput = css({
    height:'30px', textIndent:'5px', border:'1px solid #ccc', borderRadius:'7px'
})

const tableHeader = css({
    display:'flex', flexWrap:'wrap', flexGrow:1, justifyContent:'space-between', textAlign:'center', backgroundColor:'#0093c9', padding:'15px 20px', color:'#fff', borderRadius:'7px', marginTop:'15px',
    '@media (max-width:768px)': {
        flexDirection:'column'
    }
})

const tableItem = css({
    display:'flex', flexWrap:'wrap', flexGrow:1, justifyContent:'space-between', textAlign:'center', padding:'15px 20px', backgroundColor:'#F8F8F8', margin:'15px 0',
    '@media (max-width:768px)': {
      flexDirection:'column'
    }
})

const tableHeaderItem = css({
    flex:1,
    '@media (max-width:768px)': {
        margin:'5px 0'
    }
})

const tableHeaderItemEmail = css({
    flex:3,
    '@media (max-width:768px)': {
        margin:'5px 0'
    }
})

const buttonTable = css({
    padding:'5px 10px', backgroundColor:'#333', color:'#fff', border:0, borderRadius:'7px', cursor:'pointer',
    variants: {
        variant: {
            buttonTableBlue: {
                backgroundColor:'#5BC0DE',
                '&:hover':{
                    backgroundColor:'#5BC0DEcc'
                }
            },
            buttonTableYellow: {
                backgroundColor:'#f0ad4e',
                '&:hover':{
                    backgroundColor:'#F0AD4Ecc'
                }
            }
        }
    }
})

const buttonTableTrash = css({
    backgroundColor:'transparent', border:0, color:'#ea3a3d', cursor:'pointer', fontSize:'18px',
    '&:hover': {color:'#ea3a3dcc'}
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

export default function Table(){

    const [list, setList] = useState([
        {
            id:0,
            check:false,
            codigo:'000000',
            login:'000000.login',
            email:'any@mail.com',
        }, {
            id:1,
            check:false,
            codigo:'000001',
            login:'000001.login',
            email:'any2@mail.com',
        }
    ])

    const [isModalMailOpen, setIsModalMailOpen] = useState(false)
    const [isModalResetOpen, setIsModalResetOpen] = useState(false)


    const listUsers = () => {
        setList([...list])
    }

    function deleteUser(id){
        const newList = [...list]
        newList.splice(id, 1)
        setList(newList)
    }
    

    return (
        <>
            <div className={`container ${table()}`}>
                <div className={tableInitial()}>
                    <p style={{fontWeight:'bold'}}>Usuários cadastrados</p>
                    <form className="formSearch">
                        <input type="search" id="seach" className={formSearchInput()} placeholder="Busca" />
                    </form>
                </div>

                <div className={tableHeader()}>
                    <div className={tableHeaderItem()}>
                        <input type="checkbox" />
                    </div>

                    <div className={tableHeaderItem()}>
                        Código
                    </div>

                    <div className={tableHeaderItem()}>
                        Login
                    </div>

                    <div className={tableHeaderItemEmail()}>
                        E-mail
                    </div>

                    <div className={tableHeaderItem()}>
                        Resetar senha
                    </div>

                    <div className={tableHeaderItem()}>
                        Deletar
                    </div>
                </div>

                <div className="tableItems">
            
                    { list.map( (itemList, index) => 
                        <div className={tableItem()} id={index} key={index}>

                            <div className={tableHeaderItem()}>
                                <input type="checkbox" value={itemList.id} />
                            </div>

                            <div className={tableHeaderItem()}>
                                {itemList.codigo}
                            </div>

                            <div className={tableHeaderItem()}>
                                {itemList.login}
                            </div>

                            <div className={tableHeaderItemEmail()}>
                                {itemList.email} <button onClick={(index) => setIsModalMailOpen(true)} className={buttonTable({variant:'buttonTableBlue'})}>Mudar e-mail</button>
                            </div>

                            {isModalMailOpen ? (
                            <Modal onClose={ () => setIsModalMailOpen(false) }>
                                <div className="modalConteudo">
                                    <h2 className={tituloModal()}>Insira o endereço de e-mail</h2>
                                    <p>{itemList.codigo}</p>
                                    <form id="formChangeMail" className="formChangeMail">
                                        
                                        <div className={formContainer()}>
                                            <input type="email" name="changeEmail" id="changeEmail" className={formCampo()} maxLength="40" placeholder="E-mail*" required />
                                        </div>

                                        <div className={formContainer()}>
                                            <button type="submit" className={formBotaoCadastrar()}>Ok</button>
                                        </div>
                                    </form>
                                </div>
                            </Modal>
                            ) : null}

                            <div className={tableHeaderItem()}>
                                <button onClick={() => setIsModalResetOpen(true)} className={buttonTable({variant:'buttonTableYellow'})}>Resetar</button>
                            </div>

                            {isModalResetOpen ? (
                            <Modal onClose={ () => setIsModalResetOpen(false) }>
                                <div className="modalConteudo">
                                    <h2 className={tituloModal()}>Resetar senha dos usuários</h2>
                                    <h3>{itemList.codigo}</h3>
                                    <form id="formResetPassword" className="formResetPassword">
                                        
                                        <div className={formContainer()}>
                                            <input type="password" name="resetPassword" id="resetPassword" className={formCampo()} placeholder="Senha*" required />
                                        </div>

                                        <div className={formContainer()}>
                                            <button type="submit" className={formBotaoCadastrar()}>Resetar senha</button>
                                        </div>
                                    </form>
                                </div>
                            </Modal>
                            ) : null}

                            <div className={tableHeaderItem()}>
                                <button className={buttonTableTrash()} onClick={() => deleteUser(index)}><FaTrashAlt /></button>
                            </div>

                        </div>
                    )}
                        
                </div>
            </div>
        </>
    )
}