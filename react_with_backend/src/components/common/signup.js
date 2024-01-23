import close from "../../assets/close.png";

export const SignUpForm = (props) => {
  return (
    props.open && (
      <div className="login">
        <div className="login-backdrop" onClick={props.close}></div>
        <div className="login-box slide-in">
        <div className="close" onClick={props.close}><img src={close}/></div>
          <div class="title">
            <h1>Sign Up</h1>
          </div>
          <form>
            <div class="inputs">
              <div class="box">
                <label for="Username" class="icon material-icons">
                  person
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  id="Username"
                  name="Username"
                  class="text"
                  required
                />
              </div>
              <div class="box">
                <label for="Password" class="icon material-icons">
                  key
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  id="Password"
                  class="text"
                  required
                />
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  );
};
