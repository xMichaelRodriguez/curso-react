import React from "react";
import { shallow } from "enzyme";
import Counter from "../counterApp";

describe("Pruebas en app", () => {
  let wrapper = shallow(<Counter numero={10} />);
  beforeEach(() => {
    wrapper = shallow(<Counter numero={10} />);
  });

  test("Debe de mostrar el componente <Counter/>", () => {
    const wrapper = shallow(<Counter />);
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
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("11");
  });

  test("Debe disminuir con el boton: restar", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("Debe Colocar valor defecto del boton reset",()=>{
    const wrapper = shallow(<Counter numero={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe('105')
  })
});
