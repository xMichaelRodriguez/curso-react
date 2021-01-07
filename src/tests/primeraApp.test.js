import React from "react";
import { shallow } from "enzyme";
import App from "../primeraApp";

describe("Pruebas en app", () => {
  /*   test("Debe de mostrar el mensaje hola", () => {
    const saludo = "Hola Soy Tu papi";
    const {getByText} = render(<App saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument()
  }); */

  test("Debe de mostrar el componente <App/>", () => {
    const saludo = "Hola soy tu papi";
    const wrapper = shallow(<App saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo pai", () => {
    const saludo = "Hola soy tu papi";
    const subtitulo = "Hola soy tu subtitulo";
    const wrapper = shallow(<App saludo={saludo} subtitulo={subtitulo} />);
    const parrafo = wrapper.find("p").text();
    /* console.log(parrafo); */
    expect(parrafo).toBe(subtitulo);
  });
});
