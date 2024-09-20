import * as THREE from "three";

//scene
const scene = new THREE.Scene();

const canvas = document.querySelector(".wbgl");

// object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#00ff00" });
const mesh = new THREE.Mesh(geometry, material);

mesh.scale.set(1, 3, 0.5);
mesh.rotation.x = Math.PI / 2;
mesh.rotation.y = Math.PI;

scene.add(mesh);

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);

// Renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
