// login page with two fields for username and password, along with a login button
// if the user is authenticated, the app should redirect to "/contacts" to display all contacts
// also a link to a registration page to create new users


import { useNavigate } from "react-router-dom";
// can send states and data with useNavigation
export default function FormComponent({
  formData,
  handleOnSubmit,
  handleOnChange,
  currentPage,
  nextPage,
  postResponse,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>{currentPage}</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>{postResponse}</p>
      <button onClick={() => navigate(`/${nextPage}`)}>
        {nextPage === "Login" ? "Go to Login Page" : "Go to Register Page"}
      </button>
    </div>
  );
}

/*
import {Link} from "react-router-dom";

export default function HomePage(){
    return (
    <div>
        <h1>Home Page</h1>
        <br />
        <Link to="/register">Go to register page with a link</Link>
        <br />
        <Link to="/login">Already a User? LOGIN HERE</Link>

    </div>);
}
*/