import React from "react";
import SideNav from "react-simple-sidenav";
import SideNavItems from "./sidenavitems";
const SideNavigation = props => {
  return (
    <div>
      <SideNav
        navStyle={{
          background: "#242424",
          cursor: "pointer",
          maxWidth: "220px"
        }}
        showNav={props.showNav}
        onHideNav={props.onHideNav}
      >
        <SideNavItems />
      </SideNav>
    </div>
  );
};
export default SideNavigation;
