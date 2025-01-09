import React from "react";
import PostCard from "./PostCard";
import { BrowserRouter } from "react-router-dom";

describe("PostCard.jsx", () => {
  it("mounts", () => {
    cy.mount(
      <BrowserRouter>
        <PostCard
          id="someID"
          title="The post Title"
          date="2025-01-09"
          summary="A short summary of the article"
          category="Summary"
          arrTags={["tag 1", "tag 2"]}
        />
      </BrowserRouter>,
    );
  });
});
