<script>
    import { Html, isTag } from 'html-svelte-parser';
    import App from '$lib/components/App.svelte'
  
    export let data;

    $: html = data.fullHtml.replaceAll('/w/load.php?', 'https://wikipedia.org/w/load.php?')
                       .replaceAll('/static', 'https://wikipedia.org/static');
    
    let replaced = false; // Add this line

    function processNode(node) {
      if (!replaced && isTag(node) && node.attribs.class?.split(/\s/).includes('mw-default-size')) {
        const img = node.children?.[0]?.children?.[0];
        if (img) {
          replaced = true; // Add this line
          //console.log('img', img);
          console.log("SRC", img.attribs.src, "WIDTH: ",img.attribs.width, " HEIGHT: ",img.attribs.height)
           return {
            component: App,
            noChildren: true,
            props: {
              model: '/modelos/triceratops.glb',
              size: { width: img.attribs.width, height: img.attribs.height}
            }
          };
        }
      }
    }
  </script>
  {#if html}
  <Html {html} {processNode} />
  {/if}