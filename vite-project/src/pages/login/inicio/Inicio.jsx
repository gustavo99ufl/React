import React, { useState } from 'react';
import styles from './Inicio.module.css'; // Arquivo CSS para estilização

function Inicio_Login(props) {
  return(
      <div className='body'>
        <img src='' alt=''></img>
        <h1>Economize com ofertas imperdíveis!</h1>
        <div className='email'>
          <form action='/enviar' method='POST'>
          <label htmlFor="Email">E-mail</label>
          <input type='email' id='email' name='email' required placeholder='Digite seu e-mail'/>
          <button type='submit'>Entrar</button>
          </form>
        </div>
        <div className='ou'>
          <p>ou</p>
          <div className='facebook'>
            <img src="" alt="facebook" />
          </div>
          <div className='google'>
            <img src="" alt="google" />
          </div>
          <div className='apple'>
            <img src="" alt="apple" />
          </div>
        <div className='descricao'>
          <p>Ao continuar, você concorda com os <a href="">Termos de Uso</a> e <a href="">Política de privacidade</a></p>
          </div>  
        </div>
      </div>
  )
}

export default Inicio_Login
