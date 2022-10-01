import React from "react";

function Content({ loggedIn }) {
  return loggedIn && <p>CONTENT</p>;
}

export default Content;
