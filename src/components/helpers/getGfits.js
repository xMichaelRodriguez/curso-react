export const getGift = async (categories) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categories
  )}&api_key=VhegtbryG91P1UrFcad9NiBEvQUAuAFW&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifts;
};
