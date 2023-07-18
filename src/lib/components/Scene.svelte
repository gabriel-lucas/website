<script>
  import { T, useFrame} from '@threlte/core'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  import { useLoader } from '@threlte/core'
  import { spring } from 'svelte/motion'


  import { interactivity } from '@threlte/extras'


  const gltf = useLoader(GLTFLoader).load('/modelos/triceratops.glb');
  interactivity()
  const scale = spring(2)
  let rotation = 0
  useFrame((state, delta) => {
    rotation += delta
  })
</script>

{#if $gltf}
<T.PerspectiveCamera
  makeDefault
  position={[3, 3, 3]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

  <T is={$gltf.scene} 
  rotation.y={rotation}
  position.y={1}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
  castShadow
  />

  
{/if}


<!-- 
 <script>
  import { T, useFrame } from '@threlte/core'
  import { interactivity } from '@threlte/extras'
  import { spring } from 'svelte/motion'

  interactivity()
  const scale = spring(1)
  let rotation = 0
  useFrame((state, delta) => {
    rotation += delta
  })
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Mesh
  rotation.y={rotation}
  position.y={1}
  scale={$scale}
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
  castShadow
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI/2} receiveShadow>
  <T.CircleGeometry args={[4, 40]}/>
  <T.MeshStandardMaterial color="white" />
</T.Mesh>
 -->