import React from "react";

export const GiftGrid = ({ categories }) => {
  const getGift = async () => {
    const url =
      "http://api.giphy.com/v1/gifs/search?q=shingeky+no+kyojin&api_key=VhegtbryG91P1UrFcad9NiBEvQUAuAFW&limit=10";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.group("FETCH GIFTS");
    console.log(gifts);
    console.groupEnd();
  };
  getGift();
  return (
    <>
      <h3>{categories}</h3>
    </>
  );
};
