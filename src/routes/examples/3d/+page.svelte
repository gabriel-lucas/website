<script>
  import App from '$lib/components/App.svelte'
</script>

<div>
  <App/>
</div>

<style>
  :global(body) {
    margin: 0;
  }

  div {
    width: 300px;
    height: 300px;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(219, 241, 243) 100%);
  }
</style>