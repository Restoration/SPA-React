# Single Page Application with React.js

## Flow of implementation
1. Prepare environment
1. Create main page
1. Create content page
1. Routing process
1. Navigation process

## Prepare environment

```
$ yaourt -S create-react-app
$ create-react-app app
$ cd app
$ npm i react-router-dom --save
```

Doing things
- Install create-react-app
- Create React project with create-react-app
- Install npm package `react-router-dom`

create-react-app is [Toolchains](https://en.wikipedia.org/wiki/Toolchain).

### Representative toolchains
- Create React App (For SPA development)
- Next.js (For Node.js development)
- Gatsby(For static content websites)

This time I will use Create React App for SPA development

- [AUR (en) - create-react-app - Arch Linux](https://aur.archlinux.org/packages/create-react-app/)
- [react-router-dom - npm](https://www.npmjs.com/package/react-router-dom) 

## Create main page
Edit index.html  in public folder
```
$ vim public/index.html
```

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
   <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
 </body>
</html>
```

It is base page, then edit index.js  that only contents in the root of div are replaced.
```
$ vim src/index.js
```

```JavaScript
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);
```

This index.html is a frame of SPA and becomes a common parts and It will construct common parts.

```
$ vim src/Main.js
```

```JavaScript
import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Single Page Application</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
          </div>
        </div>
    );
  }
}
 
export default Main;
```


This Main.js is a common part to be generated using React.
This part is a part to be dynamically operated, it is necessary to control by React.

## Create content page
This time,Create Home,About and Contact page.
```
$ vim src/Home.js
```

```
import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>Hello World!! This page is top page.</p>
     </div>
    );
  }
}
 
export default Home;

```

```
$ vim src/About.js
```
```
import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>My hobby is using Arch Linux and sleeping.</p>
      </div>
    );
  }
}
 
export default About;
```

```
$ vim src/Contact.js
```

```
import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <p>Please feel free to contact me</p>
        <p>info@example.com</p>
      </div>
    );
  }
}
 
export default Contact;
```

## Routing process
Edit Main.js to use router

```
import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Single Page Application</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
```

Import `Route,NavLink,BrowserRouter`
Next, Change link and content path.

Finaly, Confirm page.
```
$ npm start
```
