import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// when using form we dont use onclick we use onSubmit on form and this will submit form and use event
// but still we need to use preventDefault so page would not reloded
// function App() {
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const { login, password } = event.target.elements; // destructuriaze event to get login and password
//     // event targer will contain all information from submit form
//     console.log("submitting...", login.value, password.value); // to use value of login from submit
//     event.target.reset(); // this we reset form
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}> {/*in on submit w assign behavior after submit */}
//         <input name="login"/>
//         <input name="password"/>
//         <button type="submit">Wyślij</button> {/* but we need to remeber to ad type to button so form will know which is submit  */}
//       </form>
//     </>
//   )
// }
// ======================================================================================================
// function App() {
//   const [login, setLogin] = useState('login val');
//   const [password, setPassword] = useState('pass val');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(login, password); // here we log our input value
//   };

//   const handleLoginChange = (e) => {
//     setLogin(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input name="login" value={login} onChange={handleLoginChange} />
//         <input
//           name="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <button type="submit">Wyślij</button>
//       </form>
//     </>
//   );
// }
// ==================================================================================================
//
// lets connect login and password to one object

function App() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });
  // now we have object user that have two object keys login and password
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ user });
  };
  // we can make two handlers for each keys if we wnat it to be more direct
  // const handleLoginChange = (e) => {
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     login: e.target.value,
  //   }));
  // };
  // const handlePasswordChange = (e) => {
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     password: e.target.value,
  //   }));
  // };

  // but can be done better more universal

  // with one handler what will change object depending on where we would modify it

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input name="login" value={user.login} onChange={handleLoginChange} /> */}
        <input name="login" value={user.login} onChange={handleChange} />
        <input
          name="password"
          value={user.password}
          // onChange={handlePasswordChange}
          onChange={handleChange}
        />
        <button type="submit">Wyślij</button>
      </form>
    </>
  );
}
export default App;
