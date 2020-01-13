import React, { Component } from "react";
import Header from "../../Header/header";
import "./layout.css";
import Footer from "../../footer/footer";
class Layout extends Component {
  state = {
    showNav: false
  };
  togglesideNav = action => {
    this.setState({
      showNav: action
    });
  };
  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.togglesideNav(false)}
          onOpenNav={() => this.togglesideNav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default Layout;
