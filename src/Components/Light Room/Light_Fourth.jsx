/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Light Room/Light_Fourth.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useGLTFWithKTX2 } from '../../utility/useGLTFWithKTX2'
import { convertMaterialsToBasic } from '../../utility/convertToBasic'

export function LightFourth(props) {
  const { nodes, materials } = useGLTFWithKTX2('/models/Light Room//Light_Fourth.glb')

  const newMaterials = convertMaterialsToBasic(materials);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Light_Fourth_Baked.geometry} material={newMaterials.REAL_fourth_Baked} position={[26.632, -0.17, -1.134]} rotation={[Math.PI, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('')
