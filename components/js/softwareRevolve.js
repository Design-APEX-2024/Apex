import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { gsap } from "https://cdn.skypack.dev/gsap";

let scene, camera, renderer, controls, skybox;
let planet_sun,
  planet_mercury,
  planet_venus,
  planet_earth,
  planet_mars,
  planet_jupiter,
  planet_saturn,
  planet_uranus,
  planet_neptune;

let mercury_orbit_radius = 50;
let venus_orbit_radius = 60;
let earth_orbit_radius = 70;
let mars_orbit_radius = 80;
let jupiter_orbit_radius = 100;
let saturn_orbit_radius = 120;
let uranus_orbit_radius = 140;
let neptune_orbit_radius = 160;

let mercury_revolution_speed = 0.3;
let venus_revolution_speed = 0.25;
let earth_revolution_speed = 0.20;
let mars_revolution_speed = 0.10;
let jupiter_revolution_speed = 0.2;
let saturn_revolution_speed = 0.26;
let uranus_revolution_speed = 0.34;
let neptune_revolution_speed = 0.24;

function createMaterialArray() {
  const skyboxImagepaths = [
    "../images/softwareRevolve/skybox/space_ft.png",
    "../images/softwareRevolve/skybox/space_bk.png",
    "../images/softwareRevolve/skybox/space_up.png",
    "../images/softwareRevolve/skybox/space_dn.png",
    "../images/softwareRevolve/skybox/space_rt.png",
    "../images/softwareRevolve/skybox/space_lf.png",
  ];
  const materialArray = skyboxImagepaths.map((image) => {
    let texture = new THREE.TextureLoader().load(image);
    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
  });
  return materialArray;
}

function setSkyBox() {
  const materialArray = createMaterialArray();
  let skyboxGeo = new THREE.BoxGeometry(500, 500, 500);
  skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
}

function loadPlanetTexture(texturePath, width, height, isSun = false) {
  let geometry;
  if (isSun) {
    geometry = new THREE.PlaneGeometry(width, height);
  } else {
    geometry = new THREE.BoxGeometry(width, width, width);
  }

  const texture = new THREE.TextureLoader().load(texturePath, function (texture) {
    texture.minFilter = THREE.LinearFilter;
  });

  let material;
  if (isSun) {
    material = new THREE.MeshBasicMaterial({
      map: texture,
      emissive: 0xffffff,
      transparent: true,
      side: THREE.DoubleSide,
      alphaTest: 0.1,
    });
  } else {
    material = new THREE.MeshBasicMaterial({ map: texture });
  }

  const planet = new THREE.Mesh(geometry, material);
  return planet;
}

function createRing(innerRadius) {
  let outerRadius = innerRadius - 0.1;
  let thetaSegments = 100;
  const geometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments);
  const material = new THREE.MeshBasicMaterial({
    color: "#ffffff",
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    85,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  setSkyBox();

  planet_sun = loadPlanetTexture("../images/softwareRevolve/logo_2c.png", 70, 30, true);
  planet_mercury = loadPlanetTexture("../images/softwareRevolve/premierePro.png", 4, 4);
  planet_venus = loadPlanetTexture("../images/softwareRevolve/illustrator.png", 5, 5);
  planet_earth = loadPlanetTexture("../images/softwareRevolve/photoshop.png", 6, 6);
  planet_mars = loadPlanetTexture("../images/softwareRevolve/davinci.png", 7, 7);
  planet_jupiter = loadPlanetTexture("../images/softwareRevolve/blender.png", 10, 10);
  planet_saturn = loadPlanetTexture("../images/softwareRevolve/maya.png", 12, 12);
  planet_uranus = loadPlanetTexture("../images/softwareRevolve/figma.png", 14, 14);
  planet_neptune = loadPlanetTexture("../images/softwareRevolve/canva.png", 16, 16);

  scene.add(planet_sun);
  scene.add(planet_mercury);
  scene.add(planet_venus);
  scene.add(planet_earth);
  scene.add(planet_mars);
  scene.add(planet_jupiter);
  scene.add(planet_saturn);
  scene.add(planet_uranus);
  scene.add(planet_neptune);

  const sunLight = new THREE.PointLight(0xffffff, 1, 0);
  sunLight.position.copy(planet_sun.position);
  scene.add(sunLight);

  createRing(mercury_orbit_radius);
  createRing(venus_orbit_radius);
  createRing(earth_orbit_radius);
  createRing(mars_orbit_radius);
  createRing(jupiter_orbit_radius);
  createRing(saturn_orbit_radius);
  createRing(uranus_orbit_radius);
  createRing(neptune_orbit_radius);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const container = document.getElementById("solar-system-container");
  container.appendChild(renderer.domElement);
  renderer.domElement.id = "c";

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 40;
  controls.maxDistance = 170;

  controls.minPolarAngle = Math.PI / 3;
  controls.maxPolarAngle = Math.PI / 1.5;
}

function planetRevolver(time, speed, planet, orbitRadius) {
  let orbitSpeedMultiplier = 0.001;
  const planetAngle = time * orbitSpeedMultiplier * speed;
  planet.position.x = planet_sun.position.x + orbitRadius * Math.cos(planetAngle);
  planet.position.z = planet_sun.position.z + orbitRadius * Math.sin(planetAngle);
}

function animate(time) {
  requestAnimationFrame(animate);

  const rotationSpeed = 0.005;
  planet_sun.lookAt(camera.position);

  planet_mercury.rotation.y += rotationSpeed;
  planet_venus.rotation.y += rotationSpeed;
  planet_earth.rotation.y += rotationSpeed;
  planet_mars.rotation.y += rotationSpeed;
  planet_jupiter.rotation.y += rotationSpeed;
  planet_saturn.rotation.y += rotationSpeed;
  planet_uranus.rotation.y += rotationSpeed;
  planet_neptune.rotation.y += rotationSpeed;

  planetRevolver(time, mercury_revolution_speed, planet_mercury, mercury_orbit_radius);
  planetRevolver(time, venus_revolution_speed, planet_venus, venus_orbit_radius);
  planetRevolver(time, earth_revolution_speed, planet_earth, earth_orbit_radius);
  planetRevolver(time, mars_revolution_speed, planet_mars, mars_orbit_radius);
  planetRevolver(time, jupiter_revolution_speed, planet_jupiter, jupiter_orbit_radius);
  planetRevolver(time, saturn_revolution_speed, planet_saturn, saturn_orbit_radius);
  planetRevolver(time, uranus_revolution_speed, planet_uranus, uranus_orbit_radius);
  planetRevolver(time, neptune_revolution_speed, planet_neptune, neptune_orbit_radius);

  const distance = camera.position.distanceTo(scene.position);
const overlay = document.querySelector('.threeOverlay');

if (distance > 169) {
  overlay.style.zIndex = 2;
  setTimeout(() => {
    overlay.style.zIndex = -1;
  }, 1000);

} else {
  overlay.style.zIndex = -1;
}


  controls.update();
  renderer.render(scene, camera);
}


function startCameraAnimation() {
  const cameraPositions = [
    { x: -100, y: 50, z: -100 },
    { x: 0, y: 100, z: 0 },
    { x: 0, y: 50, z: 100 },
    { x: 100, y: 0, z: 0 },
  ];

  const selectedPosition = cameraPositions[Math.floor(Math.random() * cameraPositions.length)];

  camera.position.set(selectedPosition.x, selectedPosition.y, selectedPosition.z);
  camera.lookAt(planet_sun.position);
  gsap.to(camera.position, {
    duration: 5,
    x: 100,
    y: 50,
    z: 100,
    ease: "power2.inOut",
    onUpdate: function () {
      camera.lookAt(planet_sun.position);
    },
  });

  camera.position.z = 100;
}

init();
animate();
startCameraAnimation();
