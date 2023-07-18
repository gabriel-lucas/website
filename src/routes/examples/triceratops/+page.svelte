<script>
    import App from '$lib/components/App.svelte'

    export let data;
    const htmlText = data.html;
    //htmlText.replace(/href=\"\//g, "href=\"wikipedia.org/");
    //htmlText.replace("/href=/w/load.php/g", "href=\"wikipedia.org/w/load.php");
    // Assuming you have a variable named 'url' containing the original URL
    var html = htmlText.replaceAll('/w/load.php?', 'https://wikipedia.org/w/load.php?');
    var html = html.replaceAll('/static', 'https://wikipedia.org/static');

    //var html = html.replaceAll
    //const imagen = document.getElementsByClassName("mw-file-element");
    //console.log("Imagen", imagen);
</script>

<!--{html}-->

{@html html}

<div>
 <App/>
</div>
  
  <style>
    :global(body) {
      margin: 0;
    }
  
    div {
      position: absolute;
      top: 347px;
      left: 1220px;
      width: 220px;
      height: 167px;
      background: rgb(255, 255, 255);
      background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(219, 241, 243) 100%);
    }
  </style>