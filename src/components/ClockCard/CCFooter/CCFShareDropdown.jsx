import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function CCFShareDropdown() {
  return (
    <UncontrolledDropdown>
      <DropdownToggle className="py-0 px-1 HeaderButton" color="light">
        <i class="bi bi-link-45deg"></i>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <i class="bi bi-toggles"></i> Editable
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <i class="bi bi-eye-fill"></i> View Only
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default CCFShareDropdown;
