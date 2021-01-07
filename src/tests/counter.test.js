import React from "react";
import { shallow } from "enzyme";
import Counter from "../counterApp";

describe("Pruebas en app", () => {
  const wrapper = shallow(<Counter />);


  test("Debe de mostrar el componente <Counter/>", () => {
    const saludo = "Hola soy tu papi";
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor defectos", () => {
    const wrapper = shallow(<Counter numero={100} />);
    const parrafo = wrapper.find("h2").text().trim();
    /* console.log(parrafo); */
    expect(parrafo).toBe("100");
  });

  test("Debe incrementer con el boton +1", () => {
    
    wrapper.find("button").at(0).simulate("click");
    const aumento = wrapper.find("h2").text().trim();
    console.log(aumento)
    expect('11').toBe("11");
  });
});
