import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";

function Dashboard() {
  return (
    <>
      <Container className="my-3 mx-auto">
        <Card className="col-md-6 mx-auto">
          <CardHeader className="HeaderText">Title</CardHeader>
          <CardBody className="ClockText mx-auto">00:00:00:00</CardBody>
          <CardFooter>
            <Container className="col-md-6 d-flex justify-content-between">
              <Button className="py-0 px-1 HeaderButton" color="light">
                <i class="bi bi-play-fill"></i>
              </Button>
              <Button className="py-0 px-1 HeaderButton" color="light">
                <i class="bi bi-pin-angle-fill"></i>
              </Button>
              <Button className="py-0 px-1 HeaderButton" color="light">
                <i class="bi bi-arrow-clockwise"></i>
              </Button>
              <Button className="py-0 px-1 HeaderButton" color="light">
                <i class="bi bi-x-lg"></i>
              </Button>
            </Container>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default Dashboard;
