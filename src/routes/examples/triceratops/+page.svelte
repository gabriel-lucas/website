<script>
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
{html}
<h1>Render page</h1>
{@html html}
