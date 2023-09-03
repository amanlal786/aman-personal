import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const backgroundRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    backgroundRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('various-cute-things-doodle-style_6997-1057.jpg', function(texture) {
      const geometry = new THREE.PlaneGeometry(5, 3, 32);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="threeBackground" ref={backgroundRef}></div>
  );
};

export default ThreeBackground;
