import React from "react";
import { CardHeader, Container, Button } from "reactstrap";

function CCHeader() {
  return (
    <CardHeader>
      <Container className="d-flex justify-content-between p-0">
        <div className="HeaderText">Title</div>
        <Button className="py-0 px-1 HeaderText" color="light">
          <i class="bi bi-x-lg"></i>
        </Button>
      </Container>
    </CardHeader>
  );
}

export default CCHeader;
