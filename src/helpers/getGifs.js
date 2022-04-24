

 /**
    * Obtener todos los gifs de una categoría
    */
  export const getGifs = async (category, nImages) => {

    const API_KEY = "eRH6kC0Ol2Sbqj1DNGdx2ALy8FV92KC5";
    
    const url = "https://api.giphy.com/v1/gifs/search?" + new URLSearchParams({
        limit: nImages,
        q: category,
        api_key: API_KEY
    });

    console.log(url);
    
    const resp = await fetch(url);
    
    const {data} = await resp.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
    
}