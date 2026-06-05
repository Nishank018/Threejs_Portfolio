/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* Target Board (Concentric circles facing forward) */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        {/* Outer Ring (Red) */}
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 0.08, 32]} />
          <meshStandardMaterial color="#ff2222" roughness={0.5} />
        </mesh>
        {/* Middle Ring (White) */}
        <mesh position={[0, 0.01, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
        {/* Inner Ring (Red) */}
        <mesh position={[0, 0.02, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.08, 32]} />
          <meshStandardMaterial color="#ff2222" roughness={0.5} />
        </mesh>
        {/* Bullseye (Yellow) */}
        <mesh position={[0, 0.03, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.08, 32]} />
          <meshStandardMaterial color="#ffdd00" roughness={0.5} />
        </mesh>
      </group>

      {/* Tripod Stand */}
      {/* Main Vertical Pole */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1.1, 8]} />
        <meshStandardMaterial color="#3f3f46" roughness={0.8} />
      </mesh>
      {/* Leg 1 (Left front) */}
      <mesh position={[-0.2, -1.3, 0.1]} rotation={[0, 0, 0.25]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
        <meshStandardMaterial color="#27272a" roughness={0.8} />
      </mesh>
      {/* Leg 2 (Right front) */}
      <mesh position={[0.2, -1.3, 0.1]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
        <meshStandardMaterial color="#27272a" roughness={0.8} />
      </mesh>
      {/* Leg 3 (Back) */}
      <mesh position={[0, -1.3, -0.2]} rotation={[-0.25, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
        <meshStandardMaterial color="#27272a" roughness={0.8} />
      </mesh>
    </group>
  );
};

export default Target;