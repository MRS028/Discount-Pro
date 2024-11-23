import React, { useEffect } from 'react';

const ErrorPage = () => {

  useEffect(() => {
    document.title = "ERROR 404";
  }, []);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Something Went Wrong.</h1>
      <p style={styles.message}>We couldn't find the page you were looking for.</p>
      <button 
        style={styles.button} 
        onClick={() => window.location.href = '/'} 
      >
        Go to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ErrorPage;
