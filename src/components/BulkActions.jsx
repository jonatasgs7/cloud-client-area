import React from 'react'
import { css } from '@stitches/react'

const bulkActions = css({
    width:'100%', backgroundColor:'#E1E7EC', borderRadius:'7px', padding:'15px', marginTop:'30px', boxSizing:'border-box', 
})

const buttonContainer = css({
    display:'flex', gap:'15px', flexWrap:'wrap', marginTop:'30px'
})

const bulkActionsText = css({
    color:'#06152b', fontSize:'14px', fontWeight:'bold',
    variants : {
        variant : {
            textSmall : {
                fontSize:'13px',
                fontWeight:'normal',
                marginTop:'10px'
            }
        }
    }
})

const buttonBulk = css({
    padding:'15px 25px', border:0, borderRadius:'7px', cursor:'pointer', backgroundColor:'#333', color:'#fff', textTransform:'uppercase',
    '@media (max-width:768px)': {
        width:'100%'
    },
    variants : {
        variant : {
            orangeButton : {
                backgroundColor:'#f0ad4e',
                '&:hover': {
                    backgroundColor:'#F2B560'
                }
            },
            redButton : {
                backgroundColor:'#ea3a3d',
                '&:hover': {
                    backgroundColor:'#EC4E50'
                } 
            }
        }
    }
})

export default function BulkActions(){
    return (
        <>
            <div className={`container ${bulkActions()}`}>
                <p className={bulkActionsText()}>Ações em mais de um usuário</p>
                <p className={bulkActionsText({variant:'textSmall'})}>Caso deseje alterar mais de um usuário, selecione-os através da caixa de marcação e em seguida utilize algumas das funções abaixo:</p>
                <div className={buttonContainer()}>
                    <button id="buttonBulkReset" className={buttonBulk({variant:'orangeButton'})}>Resetar senha dos usuários selecionados</button>
                    <button id="buttonBulkDelete" className={buttonBulk({variant:'redButton'})}>Deletar usuários selecionados</button>
                </div>
            </div>
        </>
    )
}