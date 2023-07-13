<script>
    export let data;
    const htmlText = data.html;
    //htmlText.replace(/href=\"\//g, "href=\"wikipedia.org/");
    //htmlText.replace("/href=/w/load.php/g", "href=\"wikipedia.org/w/load.php");
    // Assuming you have a variable named 'url' containing the original URL
    var html = htmlText.replaceAll('/w/load.php?', 'https://wikipedia.org/w/load.php?');

</script>

<!--{html}-->

<h1>Render page</h1>
{@html html}

/w/load.php?lang=en&amp;modules=codex-search-styles%7Cext.cite.styles%7Cext.tmh.player.styles%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cjquery.makeCollapsible.styles%7Cskins.vector.icons%2Cstyles%7Cwikibase.client.init&amp;only=styles&amp;skin=vector-2022