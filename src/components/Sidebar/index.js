import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Sidebar.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className={`navbar-default sidebar ${style.sidebar}`} role="navigation">
        <div className={`sidebar-nav navbar-collapse collapse ${style.sidebarNav} ${style.navbarCollapse}`}>
          <ul className="nav in" id="side-menu">
            <li className={style.sidebarSearch}>
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>

            <li>
              <a href="">
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li className={classNames({ active: !this.state.chartsElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                  return false;
                }}
              >
                <i className="fa fa-bar-chart-o fa-fw" /> &nbsp;Charts
                <span className="fa arrow" />
              </a>
              <ul
                className={`
                  ${classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.chartsElementsCollapsed,
                  })} ${style.navSecondLevel}`}
              >
                <li>
                  <a href="">
                    FlotCharts
                  </a>
                </li>
                <li>
                  <a href="">
                    Morrisjs Charts
                  </a>
                </li>
              </ul>
            </li>


            <li>
              <a href="">
                <i className="fa fa-table fa-fw" /> &nbsp;Tables
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa fa-table fa-fw" /> &nbsp;Forms
              </a>
            </li>

            <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ uiElementsCollapsed: !this.state.uiElementsCollapsed,
                }); return false;
                }}
              >
                <i className="fa fa-edit fa-fw" /> UI Elements<span className="fa arrow" />
              </a>

              <ul
                className={`${classNames({
                  "nav nav-second-level": true,
                  collapse: this.state.uiElementsCollapsed,
                })} ${style.navSecondLevel}`}
              >
                <li>
                  <a href="">
                    Panels And Wells
                  </a>
                </li>
                <li>
                  <a href="">
                    Buttons
                  </a>
                </li>
                <li>
                  <a href="">
                    Notification
                  </a>
                </li>
                <li>
                  <a href="">
                    Typography
                  </a>
                </li>
                <li>
                  <a href="">
                    Icons
                  </a>
                </li>
                <li>
                  <a href="">
                    Grid
                  </a>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.multiLevelDropdownCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed,
                  });
                  return false;
                }}
              >
                <i className="fa fa-sitemap fa-fw" />
                &nbsp;Multi-Level Dropdown
                <span className="fa arrow" />
              </a>
              <ul
                className={`${classNames({
                  "nav nav-second-level": true,
                  collapse: this.state.multiLevelDropdownCollapsed,
                })} ${style.navSecondLevel}`}
              >
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); }}>Second Level Item</a>
                </li>
                <li className={classNames({ active: !this.state.thirdLevelDropdownCollapsed })}>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed,
                      });
                      return false;
                    }}
                  >
                    Third Level<span className="fa arrow" />
                  </a>
                  <ul
                  className={`${classNames({
                    "nav nav-third-level": true,
                    collapse: this.state.thirdLevelDropdownCollapsed,
                  })} ${style.navThirdLevel}`}
                  >
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                    <li>
                      <a href="" onClick={(e) => { e.preventDefault(); }}>Third Level Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={classNames({ active: !this.state.samplePagesCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({
                    samplePagesCollapsed: !this.state.samplePagesCollapsed,
                  });
                  return false;
                }}
              >
                <i className="fa fa-files-o fa-fw" />
                &nbsp;Sample Pages
                <span className="fa arrow" />
              </a>
              <ul
                className={
                  classNames({
                    'nav nav-second-level': true,
                    collapse: this.state.samplePagesCollapsed,
                  })}
              >
                <li>
                  <a href="">
                    Blank
                  </a>
                </li>
                <li>
                  <a href="">
                    Login
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="http://www.strapui.com/">Premium React Themes</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
