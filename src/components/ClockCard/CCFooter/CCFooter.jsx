import React from "react";
import { CardFooter } from "reactstrap";

import CCFInvisibleButton from "./CCFInvisibleButton";
import CCFClockControlButtons from "./CCFClockControlButtons";
import CCFShareDropdown from "./CCFShareDropdown";

function CCFooter() {
  return (
    <CardFooter>
      <div className="d-flex align-items-center ">
        <CCFInvisibleButton />
        <CCFClockControlButtons />
        <CCFShareDropdown />
      </div>
    </CardFooter>
  );
}

export default CCFooter;
