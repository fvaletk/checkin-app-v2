/** Dependencies */
import React, { Component } from "react";
import { List, Icon, Button } from 'semantic-ui-react'
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

/** Styles */
import "./Sidebar.css";

/** Methods */
class Sidebar extends Component<RouteComponentProps> {
  render() {
    const { props } = this;
    const { history } = props;

    const listClasses = {
      root: "Sidebar__links"
    };

    const listItemClasses = {
      root: "Sidebar__link",
      selected: "Sidebar__link--active"
    };

    const listItemIconClasses = {
      root: "Sidebar__item-text"
    };

    const listItemTextClasses = {
      primary: "Sidebar__item-text"
    };

    return (
      <div className="Sidebar">
        <div className="Sidebar__background_image" />
        <div className="Sidebar__menu">
          <div className="Sidebar__header">
            <div className="Sidebar__logo_container">
              <div className="Sidebar__logo" />
            </div>
            <h1 className="Sidebar__company">YONA TRACKER</h1>
          </div>
          <div className="Sidebar__divider" />
          <List>
            <List.Item>

            </List.Item>
            <List.Item>Projects</List.Item>
            <List.Item>Team</List.Item>
          </List>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
