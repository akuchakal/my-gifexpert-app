export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3BJTMUhQL5oWqjQ9u5zClYc36Qkw6hao`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(d => {
        return {
            id: d.id,
            title: d.title,
            url: d.images?.downsized_medium.url
        }
    });
    // setImages(gifs);
    return gifs;
};