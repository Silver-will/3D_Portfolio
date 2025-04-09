import React from 'react'
import { useGLTF } from '@react-three/drei'
import { DarkThird } from './Dark_Third'
import { DarkFirst } from './Dark_First'
import { DarkSecond } from './Dark_Second'
import { DarkFourth } from './Dark_Fourth'
import { DarkTargets } from './Dark_Targets'

export default function DarkRoom(props)
{
    return (
        <>
            <DarkFirst />
            <DarkSecond />
            <DarkThird />
            <DarkFourth />
            
        </>
    )
}