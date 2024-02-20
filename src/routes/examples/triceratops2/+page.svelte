<script>
    import { Html, isTag } from 'html-svelte-parser';
    import App from '$lib/components/App.svelte'
  
    export let data;
  
    $: html = data.html.replaceAll('/w/load.php?', 'https://wikipedia.org/w/load.php?')
                       .replaceAll('/static', 'https://wikipedia.org/static');
  
    function processNode(node) {
      if (isTag(node) && node.attribs.class?.split(/\s/).includes('mw-default-size')) {
        const img = node.children?.[0]?.children?.[0];
        if (img) {
          //console.log('img', img);
          console.log("WIDTH: ",img.attribs.width, " HEIGHT: ",img.attribs.height)
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
  
  <Html {html} {processNode} />