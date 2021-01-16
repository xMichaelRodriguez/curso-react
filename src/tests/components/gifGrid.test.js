import React from "react";

import { shallow } from "enzyme";
import { GiftGrid } from "../../components/gift-Grid";
import { useFetchGifts } from "../../components/hooks/useFetchGifts";
import { mockReturn } from "react-dom/cjs/react-dom-test-utils.development";
jest.mock("../../components/hooks/useFetchGifts");

describe("Debe Cargar el component <GiftGrid/>", () => {
  const categories = "naturo";
  test("el component <GiftGrid/> ", () => {
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GiftGrid categories={categories} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items al cargar imagenes", () => {
    const gift = {
      id: "ABC",
      title: "asd",
      url: "https://localhost/algo/algo.png",
    };
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GiftGrid categories={categories} />);

    expect(wrapper).toMatchSnapshot()
  });
});
