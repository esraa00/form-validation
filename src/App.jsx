import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Usernname',
      errorMessage: `should contain 3 to 16 characters and shouldn't include any special characters`,
      required: 'true',
      pattern: '^[A-Za-z0-9]{3,16}$',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'should be a valid email',
      required: 'true',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
      required: 'true',
    },
    {
      id: 4,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password',
      errorMessage:
        'should be 8-20 characters and include at least 1 letter , 1 number and 1 special character',
      required: 'true',
      pattern: `^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{7,19}$`,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: "password doesn't match",
      required: 'true',
      pattern: formData.password,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Regsiter</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={handleOnChange}
          ></FormInput>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
