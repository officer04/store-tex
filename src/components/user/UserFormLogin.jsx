import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import exclamation from './../../images/exclamation.svg'


import styles from './UserFormLogin.module.scss';

const UserFormLogin = () => {
  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });


  return (
    <section className={styles.signUp}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1>Добро пожаловать!</h1>
          <p>Войдите, чтобы получить доступ к панели инструментов, настройкам и проектам.</p>
        </div>
        <form className={styles.form}>
          <div className={styles.group}>
            <label>
              <h3>Электронная почта</h3>
              <input
                {...register('email', {
                  required: 'Поля обязательное к заполнению',
                  pattern: {
                    value:
                      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                    message: 'Почта указана не верно',
                  },
                })}
              />
              {errors?.email && <div className={styles.exclamation}><img src={exclamation}/><p>{errors.email.message}</p></div>}
            </label>
          </div>
          <div className={styles.group}>
            <label>
              <h3>Пароль</h3>
              <input
               type="password"
                {...register('password', {
                  required: 'Поля обязательное к заполнению',
                  pattern: {
                    value: /^(?=.*\d)\w{3,20}$/m,
                    message:
                      'Пароль должен состоять из ластинских букв и цифр длина от 3 до 20 символов',
                  },
                })}
              />
            </label>
            {errors?.password && <div className={styles.exclamation}><img src={exclamation}/><p>{errors.password.message}</p></div>}
          </div>

          <button
            className={`${isValid ? styles.button : styles.buttonDisabled}`}
            disabled={!isValid}
          >
            Войти
          </button>
        </form>
        <p className={styles.text}>
          У вас есть аккаунт?{' '}
          <Link to="/register">
            <span>Зарегистрироваться</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserFormLogin;
