<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'

  export let model = "/modelos/wikipedia.glb";
  export let size={width: 100, height:100}
</script>

<Canvas size={size}>
  <Scene model = {model}/>
</Canvas>