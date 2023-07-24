export async function load({ page, fetch }) {
    const response = await fetch(`https://en.wikipedia.org/wiki/Triceratops`);
    //const response = await fetch(`https://en.wikipedia.org/wiki/${page.params.slug}`);
    const html = await response.text();
    return {
      html
    };
}