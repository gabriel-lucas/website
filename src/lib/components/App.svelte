<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'

  export let model = "/modelos/wikipedia.glb";
  export let size={width: 100, height:100}
  let scale = 1;

  let modalOpen = false;

  function toggleModal() {
    modalOpen = !modalOpen;
    if (modalOpen) {
      size = {width: 800, height: 500}; // Increase canvas size x3
      scale = 2; // Increase 3D model scale x3
    } else {
      size = {width: 230, height: 200};
      scale = 1;
    }
  }
  
</script>
<div id="canvas-container" class:modal={modalOpen}>
  <Canvas size={size}>
    <Scene model = {model}/>
  </Canvas>
  {#if !modalOpen}
  <img src="/fullscreen2.svg" width="30px" alt="Open Modal" on:click={toggleModal} />
  {/if}
  
</div>


{#if modalOpen}
  <div id="modal-backdrop" on:click={toggleModal}></div>
{/if}

<style>
  #canvas-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  #canvas-container.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 60wh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh; /* Adjust as needed */
    background: white; /* Add this line to change the background color to white */
    border: 2px solid black; /* Add this line to add a 2px black border */
  }
  #modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  img {
    position: relative;
    right: 10px;
    top: 5px;
  }
</style>