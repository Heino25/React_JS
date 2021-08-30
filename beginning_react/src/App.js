import React, { Component } from 'react';
import GitHub from './GitHub';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import AboutMe from './AboutMe'
import GitHubUser from './GitHubUser';
// import * as firebase from 'firebase/app';
import 'firebase/firestore';
import User from './User';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props)
    console.log(firebase)
  }

  
  render() {
    return (
      <div>
        {/*<Header />*/}
        <User />
      </div>
    );
  }
}


export default App;
class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                <Nav.Link href="/aboutme">AboutMe</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:score" component={GitHubUser} /> 
            <Route path="/github/user/:login/:id" component={GitHub} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

