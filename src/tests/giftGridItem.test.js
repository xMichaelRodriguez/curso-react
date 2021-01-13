import React from "react";
import { shallow } from "enzyme";
import { GiftGridItem } from "../components/giftGridItem";

describe("Debe retornar el componente <GiftGridItem />", () => {
  const title = "Hola papi";
  const url = "http://localhost/algo.jpg";

  const wrapper = shallow(<GiftGridItem title={title} url={url} />);

  test("Debe mostrar el componenete correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un parrafo con el TITLE", () => {
    const p = wrapper.find("span").text().trim();

    expect(p).toBe(title);
  });
  test("Debe tener la imagen igual a la url  de los props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener animate__flipInX", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__flipInX")).toBe(true);
  });
});
