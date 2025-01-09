import React from "react";
import TextLoader from "./TextLoader.jsx";

describe("TextLoader.jsx", () => {
  it("mounts", () => {
    cy.mount(<TextLoader />);
  });
});
