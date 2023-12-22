import { Link } from 'react-router-dom';
import styles from './UserFormSignUp.module.scss';
import { useForm } from 'react-hook-form';

import exclamation from './../../images/exclamation.svg';

const UserFormSignUp = () => {
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
        <div className={styles.title}>
          <h1>Добро пожаловать!</h1>
          <p>
            Зарегистрируйтесь, чтобы получить <br /> доступ к панели инструментов, настройкам и
            проектам.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.group}>
            <label>
              <h3>Имя</h3>
              <input
                {...register('username', {
                  required: 'Поля обязательное к заполнению',
                  minLength: {
                    value: 3,
                    message: 'Минимум 5 символов в имени',
                  },
                })}
              />
            </label>
            {errors?.username && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.username.message}</p>
              </div>
            )}
          </div>
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
            </label>
            {errors?.email && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.email.message}</p>
              </div>
            )}
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
            {errors?.password && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.password.message}</p>
              </div>
            )}
          </div>
          <div className={styles.group}>
            <label>
              <h3>Повторите пароль</h3>
              <input
                type="password"
                {...register('repeatPassword', {
                  required: 'Поля обязательное к заполнению',
                  validate: (value, formValues) =>
                    value === formValues.password || 'Пароли не совпадают',
                })}
              />
            </label>
            {errors?.repeatPassword && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.repeatPassword.message}</p>
              </div>
            )}
          </div>

          <button
            className={`${isValid ? styles.button : styles.buttonDisabled}`}
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className={styles.text}>
          У вас есть аккаунт?{' '}
          <Link to="/login">
            <span>Войти</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserFormSignUp;
