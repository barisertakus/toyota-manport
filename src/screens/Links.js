import Header from "components/core/Header/Header";
import LinkList from "components/links/LinkList";
import React from "react";
import "styles/Dashboard.css";

function Links() {

  return (
    <div>
      <Header />
      <h1 className="header__name">Quick Links</h1>
      <LinkList />
    </div>
  );
}

export default Links;
