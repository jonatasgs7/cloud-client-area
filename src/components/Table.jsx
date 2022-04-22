import React, { useState } from 'react'
import { css } from '@stitches/react'
import {FaTrashAlt} from "react-icons/fa" 

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

    // const totalItemsList = list.length

    const listUsers = () => {
        setList([...list])
    }

    const deleteUser = (id) => {
        let filtered = list.filter( listwow => {
            listwow.id !== id 
        })
        setList(filtered)
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
            
                    { list.map(itemList => 
                        <div className={tableItem()} id={itemList.id} key={itemList.id}>

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
                                {itemList.email} <button className={buttonTable({variant:'buttonTableBlue'})}>Mudar e-mail</button>
                            </div>

                            <div className={tableHeaderItem()}>
                                <button className={buttonTable({variant:'buttonTableYellow'})}>Resetar</button>
                            </div>

                            <div className={tableHeaderItem()}>
                                <button className={buttonTableTrash()} onClick={() => deleteUser(itemList.id)}><FaTrashAlt /></button>
                            </div>

                        </div>
                    )}
                        
                </div>
            </div>
        </>
    )
}