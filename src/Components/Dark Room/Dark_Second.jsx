/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Dark Room/Dark_Second.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useGLTFWithKTX2 } from '../../utility/useGLTFWithKTX2'
import { convertMaterialsToBasic } from '../../utility/convertToBasic'


export function DarkSecond(props) {
  const { nodes, materials } = useGLTFWithKTX2('/models/Dark Room/Dark_Second.glb')

  const newMaterials = convertMaterialsToBasic(materials);
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Second_Baked.geometry} material={newMaterials.Second_Real_Texture_Set_Baked} position={[0.053, 0, 0.341]} rotation={[Math.PI, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('')
