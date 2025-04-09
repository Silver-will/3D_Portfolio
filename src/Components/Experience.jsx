import { Text,  ContactShadows, Environment, Float, Html, OrbitControls, PresentationControls } from "@react-three/drei";
import { Macbook } from "./Laptop";
import DarkRoom from "./Dark Room/Dark_Room";
import LightRoom from "./Light Room/Light_Room";

export default function ()
{
    return (
        <>
            <color args={['#241a1a']} attach="background"/>
            <PresentationControls global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap>
                <DarkRoom />
                <LightRoom/>
               {/*  <Float rotationIntensity={0.8}>
                    <rectAreaLight
                        width={2.5}
                        height={1.65}
                        intensity={65}
                        color={'#f8f8ff'}
                        rotation={[0.1, Math.PI, 0]}
                        position={[0, 0.52, -1.3]}
                    />
                    <group>
                    <Macbook />
                    <Html transform
                        wrapperClass="html_screen"
                            distanceFactor={0.79}
                            position={[0, 0.52, -1.3]}
                        rotation-x={-0.256}>
                        <iframe src="https://portfolio-site-one-pied.vercel.app/" />
                        </Html>
                    </group>
                    <Text
                        position={[3.5, 0.75, -0.5]} 
                        rotation-y={-1.25}
                        maxWidth={2}
                        textAlign="center"
                    >Daunte omo</Text>
                   
            </Float> */}
            </PresentationControls>
            <ContactShadows position-y={-1.0}/>
            <Environment preset="city"/>
        </>   
    );
}