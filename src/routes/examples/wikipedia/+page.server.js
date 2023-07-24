export async function load({params, fetch }) {
     var articleURL = 'https://en.wikipedia.org/wiki/Wikipedia'; 
    const response = await fetch(articleURL);
    //const response = await fetch(`https://en.wikipedia.org/wiki/${params.slug}`);
    const html = await response.text();
    return {
      html
    };
}