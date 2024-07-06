import React, {useState, useEffect, useRef} from 'react'
import {canvas, useFrame, } from 'react-three/fiver'
import {Point, PointMaterial, Preload} from 'react-three/drei'
import * as random from "maath/random/dist/maath-random.esm"

function StarBackground() {
    const ref = useRef();
    const [sphere] = useState(() => {
        random.inSphere(new Float32Array(5000), {radius: 1.2})
    });
    useFrame((state, delta) => {
        ref.current.rotation.y -= delta/15;
        ref.current.rotation.x += 0.001;
    });
  return (
    <div>
      
    </div>
  )
}

export default StarBackground
