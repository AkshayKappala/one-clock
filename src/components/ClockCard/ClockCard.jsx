import React from "react";
import { Card, Container } from "reactstrap";

import CCHeader from "./CCHeader";
import CCBody from "./CCBody";
import CCFooter from "./CCFooter/CCFooter";

function ClockCard() {
  return (
    <>
      <Container className="my-3 mx-auto">
        <Card className="col-md-6 mx-auto">
          <CCHeader />
          <CCBody />
          <CCFooter />
        </Card>
      </Container>
    </>
  );
}
export default ClockCard;
