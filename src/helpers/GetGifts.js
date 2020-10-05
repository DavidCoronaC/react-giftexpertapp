export const getGift = async (category) => {
    console.log(category);
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=wRRKoEbav5HdcYTzT5qFNJXti0FJTMoP`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gift = data.map((img) => {
    return {
      id: img.id,
      url: img.images?.downsized_medium.url,
      title: img.title,
    };
  });
  return gift;
};