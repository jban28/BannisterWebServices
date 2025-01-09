import React from "react";
import Button from "./Button";

describe("Button.jsx", () => {
  it("mounts", () => {
    cy.mount(<Button>Test</Button>);
  });
  it("renders a button by default", () => {
    cy.mount(<Button>Test</Button>);
    cy.get("button").should("exist");
  });
  it("can render a button by passing the 'as' prop", () => {
    cy.mount(<Button as="button">Test</Button>);
    cy.get("button").should("exist");
  });
  it("can render a link by passing the 'as' prop", () => {
    cy.mount(<Button as="a">Test</Button>);
    cy.get("a").should("exist");
  });
});
