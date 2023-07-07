import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
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
    const { name, email, password } = form.elements;
    dispatch(register({ name: name.value, email: email.value, password: password.value }));
    console.log({ name: name.value, email: email.value, password: password.value });
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <label>
        Username
        <input
          type='text'
          name='name'
        />
      </label>
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
      <button type='submit'>Register</button>
    </form>
  );
};

export default RegisterForm;
