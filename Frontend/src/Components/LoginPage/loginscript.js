
import { useEffect } from 'react';

const LoginScript = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    const handleRegisterClick = () => {
      wrapper.classList.add('active');
    };

    const handleLoginClick = () => {
      wrapper.classList.remove('active');
    };

    registerLink.addEventListener('click', handleRegisterClick);
    loginLink.addEventListener('click', handleLoginClick);

    return () => {
      registerLink.removeEventListener('click', handleRegisterClick);
      loginLink.removeEventListener('click', handleLoginClick);
    };
  }, []);

  return null;
};

export default LoginScript;
