import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    // e.preventDefault();
    // const form = e.currentTarget;
    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    // form.reset();
    e.preventDefault();
    const form = e.target;
    const { email, password } = form.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    console.log({ email: email.value, password: password.value });
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <label>
        Email
        <input
          type='email'
          name='email'
        />
      </label>
      <label>
        Password
        <input
          type='password'
          name='password'
        />
      </label>
      <button type='submit'>Log In</button>
    </form>
  );
};

export default LoginForm;
