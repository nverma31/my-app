import React, { useEffect, Component } from "react";
import { BrowserRouter, Route, Link,useLocation, Redirect, withRouter, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Heade from "./components/Heade";
import AnimatedCursor from "react-animated-cursor";
import DynamicScrollToTop from "./components/dynamicScrollToTop";

import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import Nubitalk from "./pages/nubitalk";
import Trickle from "./pages/trickle";
import PayPal from "./pages/paypal";
import Nemo from "./pages/nemo";
import Crowded from "./pages/crowded";
import Ewe from "./pages/ewe";
import Quinta from "./pages/quinta";
import Uci from "./pages/Uci";




const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "caseStudies", Component: CaseStudies },
  { path: "/approach", name: "approach", Component: Approach },
  { path: "/services", name: "services", Component: Services },
  { path: "/about-us", name: "about", Component: About },
  { path: "/nubitalk", name: "nubitalk", Component: Nubitalk },
  { path: "/paypal", name: "paypal", Component: PayPal },
  { path: "/trickle", name: "about", Component: Trickle },
  { path: "/crowded", name: "crowded", Component: Crowded },
  { path: "/quinta", name: "quinta", Component: Quinta },

];

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

const Public = () => <h3>Public Content</h3>;
const Protected = () => <h3>Protected Content</h3>;

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      value:''
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  login = (event) => {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if (this.state.value === "PortfolioPassword") {

    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  }
  else {
    alert("wrong password");
  }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      this.props.history.push(from.pathname);
    }

    return (
      <div>
        <AuthButton/>
        <div class="password-form">
        <p class="form-text">You need to a password to view this content.</p>
        <form onSubmit={this.login}>
        <label class="password-text">
          Enter password:
          <input type="text" class="form-textbox" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" class="form-button" value="Submit" />
      </form>
      </div>
      </div>
    )
  }
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuthCentralState.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
);

const AuthButton = withRouter(({ history }) => (
  fakeAuthCentralState.isAuthenticated ? (
    <p>
      <form onSubmit={() => {
        fakeAuthCentralState.signout(() => history.push('/'))
      }}></form>
    </p>
  ) : (
    <p></p>
  )
));

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <> 
    <AnimatedCursor
    innerSize={10}
    outerSize={25}
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={2}
    color='58,44,86'
  />

      <BrowserRouter>
      <ScrollToTop>
         <div className='App'>
      <Heade />
            <Route path="/public" component={Public}/>
            {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
            <Route path="/login" component={withRouter(Login)}/>
            <ProtectedRoute path='/protected' component={Protected} />
            <ProtectedRoute path='/nemo' component={Nemo} />
            <ProtectedRoute path='/uci' component={Uci} />
            <ProtectedRoute path='/ewe' component={Ewe} />

   
    
      </div>
      </ScrollToTop>
      </BrowserRouter>
          </>
  );
}

export default App;
