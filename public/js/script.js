// Import the necessary libraries
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();

// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Keep the 3D object on a global variable so we can access it later
let object;

// OrbitControls allow the camera to move around the scene
let controls;

// Set which object to render
let objToRender = 'motherboard';

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Load the file
loader.load(
  `3dModels/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
    console.log("Model loaded successfully!");
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error('An error happened:', error);
  }
);

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio); // Match the device's pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Set how far the camera will be from the 3D model
camera.position.z = objToRender === "motherboard" ? 3 : 500;
camera.position.y = objToRender === "motherboard" ? 3 : 500;
camera.position.x = objToRender === "motherboard" ? -5 : 500;

// Add lights to the scene
const topLight = new THREE.DirectionalLight(0xffffff, 3);
topLight.position.set(100, 100, 50);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "motherboard" ? 5 : 1);
scene.add(ambientLight);

// Add controls to the camera
if (objToRender === "motherboard") {
  controls = new OrbitControls(camera, renderer.domElement);
}

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
  console.log('Resizing to:', window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  console.log('Canvas size set to:', renderer.domElement.width, renderer.domElement.height);
}

// Call the function once to set the initial size
onWindowResize();

// Trigger resize after a delay when the page first loads
window.onload = function () {
  setTimeout(onWindowResize, 50);
};

// Start the rendering loop
animate();

// Listen for window resize events
window.addEventListener('resize', onWindowResize);
