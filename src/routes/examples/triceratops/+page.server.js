export async function load({ page, fetch }) {
  // createHTML();  
  //const articleUrl = 'https://en.wikipedia.org/wiki/Triceratops'; 
    const response = await fetch(`https://en.wikipedia.org/wiki/Triceratops`);
    //const response = await fetch(`https://en.wikipedia.org/wiki/${page.params.slug}`);
    const html = await response.text();
    return {
      html
    };
}

/* export async function load({ page, fetch }) {
  crearHTML();
  const response = await fetch(`https://en.wikipedia.org/wiki/Triceratops`);
  //const response = await fetch(`https://en.wikipedia.org/wiki/${page.params.slug}`);
  const html = await response.text();
  return {
    html
  };
} */

function createHTML(){

  const doc = document.implementation.createDocument(
    "https://en.wikipedia.org/wiki/Triceratops",
    "html",
    null,
  );

  console.log("Doc ", doc);

}
// Hacer la petición fetch, cargar un documento HTML Cargar 
