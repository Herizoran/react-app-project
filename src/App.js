import React, {Component} from 'react';
import logo from './logo.svg';
import SideNavbar from'./Sidebar.js';
import './App.css';

class Body extends Component{
  render() {
    return(
      <body className="sb-nav-fixed">
        <NavbarClass/>
        <SideNavbar/>
      </body>
    );
  }
}

class NavbarClass extends Component{
  render(){
    return(
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
          <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
          <this.SearchButtton/>
          <this.Account/>
      </nav>
      );
  }

  SearchButtton(){
    return(
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
              <input className="form-control" type="text" placeholder="Search for..." ariaLabel="Search for..." ariaDescribedby="btnNavbarSearch" />
              <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
          </div>
      </form>
    );
  }

  Account() {
    return(
      <ul className="navbar-nav ms-auto ms-md-0 me-3 meLg-4">
          <li className="nav-item dropdown">
              <a className="navLink dropdown-toggle" id="navbarDropdown" href="#" role="button" dataBsToggle="dropdown" ariaExpanded="false"><i className="fas fa-user fa-fw"></i></a>
              <ul className="dropdown-menu dropdown-menu-end" ariaLabelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">Settings</a></li>
                  <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Logout</a></li>
              </ul>
          </li>
      </ul>
    );
  }

  Navbar(){
    return(
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
          <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
          <this.SearchButtton/>
          <this.Account/>
      </nav>
    );
  }
}

function App() {
  return <Body/>;
}

export default App;
