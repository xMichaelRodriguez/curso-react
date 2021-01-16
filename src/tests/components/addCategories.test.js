import React from "react";

const { shallow } = require("enzyme");
const { AddCategories } = require("../../components/addCategories");

describe("Pruebas en <AddCategories />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategories setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategories setCategories={setCategories} />);
  });
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Dede de cambiar el input", () => {
    const input = wrapper.find("input");
    const value = "hola que hace";
    input.simulate("change", { target: { value } });
  });

  test("No debe de postear la informacion ", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar setcategories y limpiar el input", () => {
    const input = wrapper.find("input");
    const value = "hola que hace2";
    input.simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(2);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
