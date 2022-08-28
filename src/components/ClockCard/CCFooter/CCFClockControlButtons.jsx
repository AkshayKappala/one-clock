import React from "react";
import { Container, Button } from "reactstrap";
function CCFClockControlButtons() {
  return (
    <Container className="col-md-4 d-flex justify-content-between">
      <Button className="py-0 px-1 HeaderButton" color="light">
        <i class="bi bi-arrow-clockwise"></i>
      </Button>
      <Button className="py-0 px-1 HeaderButton" color="light">
        <i class="bi bi-play-fill"></i>
      </Button>
      <Button className="py-0 px-1 HeaderButton" color="light">
        <i class="bi bi-stopwatch"></i>
      </Button>
    </Container>
  );
}

export default CCFClockControlButtons;
