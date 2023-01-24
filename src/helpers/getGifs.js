export const getGifs = async ( category ) => {
    const apiKey = "1W3VY7VBXaIQ84RRdKuO9c2cGjPw5Msa";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(URL);
    const {data} = await resp.json();
    const gifsArray = data.map( g => ({
        id:g.id,
        title:g.title,
        url:g.images.downsized_medium.url
    }));
    return gifsArray;
  }