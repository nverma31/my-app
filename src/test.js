import {
  BrowserRouter as Router, 
  Link,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

import React, { useEffect, Component } from "react";
import ReactDOM from 'react-dom';
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Heade from "./components/Heade";
import AnimatedCursor from "react-animated-cursor";

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
  { path: "/my-app", name: "Home", Component: Home },
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

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated
    ? <p>
        Welcome! <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    : <p>You are not logged in.</p>
))

export default function App () {
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
    <Router>
      <div className='App'>
        <AuthButton />
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
    </Router>
  )
}
