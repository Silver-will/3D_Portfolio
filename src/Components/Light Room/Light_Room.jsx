import React from 'react'
import { useGLTF } from '@react-three/drei'
import { LightThird } from './Light_Third'
import { LightFirst } from './Light_First'
import { LightSecond } from './Light_Second'
import { LightFourth } from './Light_Fourth'
import { LightTargets } from './Light_Targets'

export default function LightRoom(props)
{
    return (
        <>
            <LightFirst />
            <LightSecond />
            <LightThird />
            <LightFourth />
            
        </>
    )
}