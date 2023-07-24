<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'

  export let model = "/modelos/wikipedia.glb";

</script>

<Canvas>
  <Scene model = {model}/>
</Canvas>


