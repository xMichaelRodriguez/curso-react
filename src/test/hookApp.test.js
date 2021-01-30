import { shallow } from "enzyme";
import React from "react";

import { HookApp } from "../hookApp";

describe("Retorna match de componente", () => {


  test("Muestra el componente HookApp", () => {


    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
