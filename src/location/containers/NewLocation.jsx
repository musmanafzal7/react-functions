import React from "react";
import { VALIDATOR_REQUIRE } from "../../shared/Utils/Validators";

import Input from "../../shared/components/FormElements/Input";

const NewLocation = () => {
  const titleInputHandler = (id, value, isValid) => {};

  return (
    <form>
      <Input
        element="input"
        type="text"
        label="Location Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter Valid Title"
      />
    </form>
  );
};

export default NewLocation;
