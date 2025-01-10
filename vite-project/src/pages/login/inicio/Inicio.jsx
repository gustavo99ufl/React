import React, { useState } from 'react';
import styles from './Inicio.module.css';
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação do e-mail
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    if (!isValidEmail) {
      setError('Por favor, insira um e-mail válido.');
      document.getElementById('email').focus();
      return;
    }

    setLoading(true);
    // Simula uma requisição de login
    setTimeout(() => {
      setLoading(false); // Simula a resposta do servidor
      alert('Login efetuado com sucesso!');
    }, 2000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.topSection}>
        <img
          src="https://i.imgur.com/PbGeME6.jpg"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.bottomSection}>
        <h2 className={styles.title}>Economize com ofertas imperdíveis!</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
              aria-describedby="emailHelp"
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <div className={styles.separator}>
          <hr className={styles.line} />
          <span className={styles.text}>ou</span>
          <hr className={styles.line} />
        </div>
        <div className={styles.socialButtons}>
          <button className={styles.facebook}>
            <FaFacebook />
          </button>
          <button className={styles.google}>
            <FaGoogle />
          </button>
          <button className={styles.apple}>
            <FaApple />
          </button>
        </div>
        <p className={styles.terms}>
          Ao continuar, você concorda com os{' '}
          <a href="#">Termos <br /> de Uso</a> e{' '}
          <a href="#">Política de privacidade</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
