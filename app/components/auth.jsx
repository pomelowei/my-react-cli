import React, {Component} from 'react';
import classNames  from 'classnames';
import '../assets/scss/auth.scss';

function Loader() {
  return (
      <div className="box-msg">
        <div className="box-loading style3">
          <div className="spinner">

          </div>
        </div>
      </div>
  );
}

function LoginPanel(props) {
  return (
      <div className="tab-form">
        <div className="header">
          <h2 className="heading-medium">Log in with your account</h2>
        </div>
        <div className="buttons">
          <div className="button-row">
            <a className="btn-connect btn-twitter">Connect with Twitter</a>
          </div>
          <div className="button-row">
            <a className="btn-connect btn-facebook">Connect with Facebook</a>
          </div>
          <div className="button-row">
            <span className="btn-connect btn-email" onClick={props.showLoginForm}>Log in with your e-mail</span>
          </div>
        </div>
      </div>
  );
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type, event) {
    if (type === 'name') {
      this.setState({name: event.target.value});
    } else if (type === 'password') {
      this.setState({password: event.target.value});
    }
  }

  handleSubmit() {
    console.log(this.state)
  }

  handleSwitch(value, e) {
    this.props.onSwitch(value)
  }

  render() {
    return (
        <div className="tab-form">
          <div className="header">
            <h2 className="heading-medium">Log in with your e-mail</h2>
          </div>
          <div className="form">
            <form action="/" method="post" noValidate>
              <div className="form-input">
                <label>
                  <input value={this.state.name} onChange={this.handleChange.bind(this, 'name')}
                         name="username" className="text-input" placeholder="Email or Username" type="text"/>
                </label>
              </div>
              <div className="form-input">
                <label>
                  <input value={this.state.password} onChange={this.handleChange.bind(this, 'password')}
                         name="password" className="text-input" placeholder="Password" type="password"/>
                </label>
              </div>
              <div className="form-input check">
                <label>
                  <input name="remember_me" id="remember_me" type="checkbox"/>
                  <span>Keep me logged in</span>
                </label>
              </div>
              <div className="form-input">
                <span className="button" onClick={this.handleSubmit}>LOGIN NOW</span>
              </div>
              <div className="form-input">
                <span className="link" onClick={this.handleSwitch.bind(this, 'reset')}>Forgot your password?</span>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

class ResetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit() {
    console.log(this.state)
  }

  handleSwitch(value, e) {
    this.props.onSwitch(value)
  }

  render() {
    return (
        <div className="tab-form">
          <div className="header">
            <h2 className="heading-medium">Forgot your password</h2>
          </div>
          <div className="form">
            <form action="/" method="post" noValidate>
              <div className="form-input">
                <label>
                  <input value={this.state.name} onChange={this.handleChange}
                         name="username" className="text-input" placeholder="Email or Username" type="text"/>
                </label>
              </div>
              <div className="form-input">
                <span className="button" onClick={this.handleSubmit}>FORGET PASSWORD</span>
              </div>
              <div className="form-input">
                <span className="link" onClick={this.handleSwitch.bind(this, 'none')}>Back</span>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

class LoginTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: 'none'
    };
    this.openLoginForm = this.openLoginForm.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.switchTab = this.switchTab.bind(this);
  }


  openLoginForm() {
    this.setState({
      'formStatus': 'login'
    });
  }

  switchForm(value) {
    this.setState({
      'formStatus': value
    });
  }

  switchTab() {
    this.props.onSwitch('register');
  }

  render() {
    let tab = null;
    if (this.state.formStatus !== 'none') {
      if (this.state.formStatus === 'login') {
        tab = <LoginForm onSwitch={this.switchForm}/>

      } else if (this.state.formStatus === 'reset') {
        tab = <ResetForm onSwitch={this.switchForm}/>
      }
    } else {
      tab = <LoginPanel showLoginForm={this.openLoginForm}/>
    }
    return (
        <div className="box-login">
          {tab}
          <div className="footer">
            <h4 className="heading-small">
              <span>Not a member yet? </span>
              <span className="register" onClick={this.switchTab}>Register now</span>
            </h4>
          </div>
        </div>
    );
  }
}

function RegisterPanel(props) {
  return (
      <div className="tab-form">
        <div className="header">
          <h2 className="heading-medium">Create your account</h2>
        </div>
        <div className="buttons">
          <div className="button-row">
            <a className="btn-connect btn-twitter">Connect with Twitter</a>
          </div>
          <div className="button-row">
            <a className="btn-connect btn-facebook">Connect with Facebook</a>
          </div>
          <div className="button-row">
            <span className="btn-connect btn-email" onClick={props.showRegisterForm}>Sign up with your e-mail</span>
          </div>
        </div>
      </div>
  );
}

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type, event) {
    if (type === 'name') {
      this.setState({name: event.target.value});
    } else if (type === 'email') {
      this.setState({email: event.target.value});
    } else if (type === 'password') {
      this.setState({password: event.target.value});
    }
  }

  handleSubmit() {
    console.log(this.state)
  }

  render() {
    return (
        <div className="tab-form">
          <div className="header">
            <h2 className="heading-medium">Create your account</h2>
          </div>
          <div className="form">
            <form action="/" method="post" noValidate>
              <div className="form-input">
                <label>
                  <input value={this.state.name} onChange={this.handleChange.bind(this, 'name')}
                         name="username" className="text-input" placeholder="Username" type="text"/>
                </label>
              </div>
              <div className="form-input">
                <label>
                  <input value={this.state.email} onChange={this.handleChange.bind(this, 'email')}
                         name="email" className="text-input" placeholder="Email" type="text"/>
                </label>
              </div>
              <div className="form-input">
                <label>
                  <input value={this.state.password} onChange={this.handleChange.bind(this, 'password')}
                         name="password" className="text-input" placeholder="password" type="password"/>
                </label>
              </div>
              <div className="form-input">
                <span className="button" onClick={this.handleSubmit}>FORGOT PASSWORD</span>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

class RegisterTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: 'none'
    };
    this.openRegisterForm = this.openRegisterForm.bind(this);
    this.switchTab = this.switchTab.bind(this);
  }

  openRegisterForm() {
    this.setState({
      'formStatus': 'register'
    });
  }

  switchTab() {
    this.props.onSwitch('login');
  }

  render() {
    let tab = null;
    if (this.state.formStatus !== 'none') {
      tab = <RegisterForm />
    } else {
      tab = <RegisterPanel showRegisterForm={this.openRegisterForm}/>
    }
    return (
        <div className="box-login">
          {tab}
          <div className="footer">
            <h4 className="heading-small">
              <span>Are you a member? </span>
              <span className="register" onClick={this.switchTab}>Login now</span>
            </h4>
          </div>
        </div>
    );
  }
}

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStatus: 'login'
    };
    this.switchTab = this.switchTab.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  switchTab(value) {
    this.setState({tabStatus: value});
  }

  handleClick() {
    this.props.onValueChange(false, 'auth');
    this.setState({tabStatus: 'login'});
  }

  render() {
    let panel = null, panelClassName = classNames(
        'box-lightBox',
        {'open': this.props.authStatus}
    );
    if (this.props.authStatus) {
      if (this.state.tabStatus === 'login') {
        panel = <LoginTab onSwitch={this.switchTab}/>
      } else if (this.state.tabStatus === 'register') {
        panel = <RegisterTab onSwitch={this.switchTab}/>
      }
    }

    return (
        <div className={panelClassName}>
          <div className="box-content-login">
            <div className="btn-close" onClick={this.handleClick}>
              X
            </div>
            {panel}
          </div>
        </div>
    );
  }
}