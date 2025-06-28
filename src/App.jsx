import "./App.css";

function App() {
  return (
    <div className="login-box">
      <h2>Welocme To Login Page </h2>
      <form>
        <div className="input-box">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
