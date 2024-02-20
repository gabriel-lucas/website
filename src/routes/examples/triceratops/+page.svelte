<script>
    import { onMount } from 'svelte';
    import App from '$lib/components/App.svelte'
    import { load } from 'cheerio';
    
    export let data;
    const htmlText = data.html;
    
    var html = htmlText.replaceAll('/w/load.php?', 'https://wikipedia.org/w/load.php?');
    html = html.replaceAll('/static', 'https://wikipedia.org/static');

    onMount(async () => {
      const $ = load(html);
      const images = $(".mw-default-size");  // All the image elements
      images.each(function (idx, el) {       // Get size of the images
          var img = $(el).children()[0].children[0];
          const width = img.attribs['width'];   
          const height = img.attribs['height'];
          console.log("Size ", width, " ", height)
      });
      // Replace image content with the component code, but code does not get interpreted by Sveltekit
      //images.html('<App model=\'wikipedia.glb\'/>');
      html = $.html();
	  });
</script>

{@html html}

<!-- This component insertion works well -->
<div>
 <App model='/modelos/triceratops.glb'/>
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
