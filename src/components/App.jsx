import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <>
      <Navbar className="my-0" color="secondary" dark>
        <NavbarBrand href="/">
          ONE CL<i class="bi bi-stopwatch BrandIcon"></i>CK
        </NavbarBrand>
      </Navbar>
      <h1>Greetings!</h1>
    </>
  );
}

export default App;
