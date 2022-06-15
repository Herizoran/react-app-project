import React, {Component} from 'react';
import MainContent from'./Content.js';

class SideNavbar extends Component{
  render() {
    return(
        <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <a className="nav-link" href="index.html">
                  <div className="sb-nav-link-icon"><i className="fas faTachometer-alt" /></div>
                  Dashboard
                </a>
                <div className="sb-sidenav-menu-heading">Interface</div>
                <a className="nav-link collapsed" href="#" dataBsToggle="collapse" dataBsTarget="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                  Layouts
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" dataBsParent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                  </nav>
                </div>
                <a className="nav-link collapsed" href="#" dataBsToggle="collapse" dataBsTarget="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <div className="sb-nav-link-icon"><i className="fas faBook-open" /></div>
                  Pages
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" dataBsParent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <a className="nav-link collapsed" href="#" dataBsToggle="collapse" dataBsTarget="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                      Authentication
                      <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                    </a>
                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" dataBsParent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link" href="login.html">Login</a>
                        <a className="nav-link" href="register.html">Register</a>
                        <a className="nav-link" href="password.html">Forgot Password</a>
                      </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" dataBsToggle="collapse" dataBsTarget="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                      Error
                      <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                    </a>
                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" dataBsParent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <a className="nav-link" href="401.html">401 Page</a>
                        <a className="nav-link" href="404.html">404 Page</a>
                        <a className="nav-link" href="500.html">500 Page</a>
                      </nav>
                    </div>
                  </nav>
                </div>
                <div className="sb-sidenav-menu-heading">Addons</div>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                  Charts
                </a>
                <a className="nav-link" href="tables.html">
                  <div className="sb-nav-link-icon"><i className="fas faTable" /></div>
                  Tables
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <MainContent/>
          </main>
          <FooterPage/>
        </div>
      </div>
    );
  }
}

class FooterPage extends Component{
  render() {
    return(
      <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center justify-contentBetween small">
            <div className="text-muted">Copyright © Your Website 2022</div>
            <div>
              <a href="#">Privacy Policy</a>
              ·
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      );
  }
}

export default SideNavbar;