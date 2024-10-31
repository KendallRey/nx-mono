import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import SpaceShip from './space-ship';
import DynamicObj from './dynamic-obj';
import Ground from './world-ground';
// import OBJObj from './obj-obj';
// import ParticleSystem from './particle-system';
import Effect from './effects';
// import Laser from './laser';
// import Spawner from './spawner';
import HoverShip from './hover-ship';
import Mob from './mobs';
import { IDestroyable } from './interface/killable';
// import FBXObj from './fbx-obj';

class SpaceScene extends THREE.Scene {

  private readonly camera: THREE.PerspectiveCamera;
  private readonly cameraContainer = new THREE.Group();
  private readonly clock = new THREE.Clock();
  // private screenSize = new THREE.Vector2();
  // private star?: THREE.Texture;
  private particlesMesh?: THREE.Points;

  // private screenSize = new THREE.Vector2();

  private mousePosition = new THREE.Vector2();
  private targetPosition = new THREE.Vector3();
  private raycaster = new THREE.Raycaster();
  // private groundMesh?: THREE.Mesh;
  private world: CANNON.World;

  constructor(camera: THREE.PerspectiveCamera, world: CANNON.World, screenX: number, screenY: number) {
    super()
    this.world = world;
    this.camera = camera;
    this.camera.layers.enable(1);
    this.raycaster.layers.set(1);
    this.initScreenSize(screenX, screenY);
  }

  async init() {

    await this.loadTextures();
    this.initGround();
    // this.initBGStarts(10000);
    this.initLighting();
    this.test();
    this.initListeners();

    this.initCamera();
    await this.spawnPlayer();
    this.initObjects();
  }

  private initScreenSize(x: number, y: number) {
    console.log(`X:${x}, Y:${y}`)
    // this.screenSize  = new THREE.Vector2(x, y);
  }

  private async loadTextures() {
    // const textureLoader = new THREE.TextureLoader();
    // this.star = await textureLoader.loadAsync('assets/star.png');
  }

  private initGround() {
    new Ground(this, this.world, 2000, 2000);
  }


  private initLighting() {
    // const pointLight = new THREE.PointLight(0xffffff, 100);
    // pointLight.position.x = 0;
    // pointLight.position.y = 10;
    // pointLight.position.z = 0;
    // pointLight.castShadow= true;
    // this.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.castShadow = true;
    // directionalLight.shadow.camera.top = 10;
    // directionalLight.shadow.camera.bottom = -10;
    // directionalLight.shadow.camera.left = 10;
    // directionalLight.shadow.camera.right = -10;
    // directionalLight.shadow.camera.far = 10;
    // directionalLight.shadow.camera.near = -50;
    this.add(directionalLight);
    
    // this.add(new THREE.CameraHelper(directionalLight.shadow.camera))
  }

  private currentCameraPosition = new THREE.Vector3();
  private currentCameraRotation = new THREE.Quaternion();

  private initCamera() {
    this.camera.position.x = 2;
    this.camera.position.y = 4;
    this.camera.position.z = -2;
    this.camera.rotateX(Math.PI * -.7);
    this.camera.rotateY(Math.PI * .15);
    this.camera.rotateZ(Math.PI * .85);

    this.camera.getWorldPosition(this.currentCameraPosition);
    this.camera.getWorldQuaternion(this.currentCameraRotation);

    this.add(this.cameraContainer);
  }

  // private initBGStarts(count: number) {
  //   const totalCount = count * 3;
  //   const particlesGeometry = new THREE.BufferGeometry();
  //   const positionArr = new Float32Array(totalCount);

  //   for(let i = 0; i < totalCount; i++){
  //     positionArr[i] = (Math.random() - 0.5) * (Math.random() * 100);
  //   }

  //   const particlesMaterial = new THREE.PointsMaterial({
  //     size: 0.005,
  //     map: this.star,
  //     color: 'white',
  //     transparent: true,
  //   });

  //   particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArr, 3));

  //   this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);

  //   this.add(this.particlesMesh);
  // }

  private testMesh?: THREE.Mesh;
  private objs: DynamicObj[] = [];
  private effects: Effect[] = [];

  private test() {

    const xAxis = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0,0.5,0), 50, 0xff0000);
    const yAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0,0.5,0), 50, 0x00ff00);
    const zAxis = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0,0.5,0), 50, 0x0000ff);

    this.add(xAxis);
    this.add(yAxis);
    this.add(zAxis);

    const geometry = new THREE.BoxGeometry( .1, .1, 1);
    const material = new THREE.MeshBasicMaterial();

    this.testMesh = new THREE.Mesh(geometry, material);

    this.add(this.testMesh);
  }


  private initListeners() {
    document.addEventListener('mousemove', (ev) => {

      this.mousePosition.x = (ev.clientX / window.innerWidth) * 2 - 1;
      this.mousePosition.y = -(ev.clientY / window.innerHeight) * 2 + 1;
      
    })

    document.addEventListener('mouseup', () => {
      this.spaceShip?.fireTurret(this.targetPosition, this.effects)
    })
  }

  // private spawnParticle(origin: THREE.Vector3, target: THREE.Vector3) {
  //   const newParticleSystem = new ParticleSystem(this, this.world, 50, target, 100);
  //   this.effects.push(newParticleSystem);

  //   const laser = new Laser(this, origin, target, 20);
  //   this.effects.push(laser);
  // }

  // #region Player

  private spaceShip?: SpaceShip;
  private spaceShipMesh?: THREE.Object3D<THREE.Object3DEventMap>;

  private async spawnPlayer() {
    this.spaceShip = new SpaceShip(this, this.world);
    await this.spaceShip.init(0.2, new THREE.Vector3(0, 20, 0), 'assets/three-js');
    this.spaceShipMesh = this.spaceShip.getMesh();

    if(this.spaceShipMesh?.position)
      this.cameraContainer.position.copy(this.spaceShipMesh.position);

    this.spaceShip.initController();
    const objMesh = this.spaceShip.getMesh();
    if(!objMesh) return;

    const pointLight = new THREE.PointLight(0x55EFC4, 200);
    pointLight.position.x = 0;
    pointLight.position.y = 0;
    pointLight.position.z = 70;
    pointLight.castShadow= true;
    objMesh.add(pointLight);
    
    this.add(objMesh);

    this.objs.push(this.spaceShip);

    this.cameraContainer.add(this.camera);

    const { x: xPos, y: yPos , z: zPos } = this.currentCameraPosition;
    const { x: xRot, y: yRot , z: zRot, w } = this.currentCameraRotation;

    this.camera.position.set(xPos * 15, yPos * 15, zPos * 15);
    this.camera.quaternion.set(xRot, yRot, zRot, w);

    this.camera.position.sub(objMesh.position);
    this.camera.position.applyQuaternion(objMesh.quaternion.invert());
    this.camera.quaternion.premultiply(objMesh.quaternion.invert());

    // this.cameraContainer.setRotationFromAxisAngle(new THREE.Vector3(0,1,0), Math.PI / 3 );
  }

  // #endregion

  private async initObjects() {

    // await spawnLogo({ scene: this, world: this.world, objs: this.objs, position: { x: 20, y: 0, z: 2} });
    // const k2 = new FBXObj(this, this.world, 'assets/letters/lower/z');
    // await k2.init(new THREE.Vector3(0, 5, 0), { bodyProps: { mass: 200 }})
    // this.objs.push(k2);
    // await spawnString({ value: 'abcD', scene: this, world: this.world, objs: this.objs });
    // const spawner = new Spawner(this, this.world, { x: 5, y: 5});
    // spawner.init();
    // this.objs.push(...spawner.objs);

    // this.spawnMob();
  }

  // #region Hover Ships 

  private hoverShips: HoverShip[] = [];

  // #endregion

  // #region Mobs

  async spawnMob() {
    if(!this.spaceShip) return;
    const mob = new Mob(this, this.world);
    await mob.init(0.2, new THREE.Vector3(20, 20, 20), 'assets/mob');
    const playerBody = this.spaceShip.getBody();
    if(playerBody)
      mob.setTarget(playerBody)
    this.objs.push(mob);
    this.hoverShips.push(mob);
  }

  // #endregion

  update(){
    const elapsedTime = this.clock.getElapsedTime();

    this.updateBGStars(elapsedTime);
    this.updateRaycast();

    this.spaceShip?.updateTurrets(this.targetPosition);
    this.spaceShip?.updateMovement();

    this.hoverShips.forEach((ship) => ship.updateMovement())

    this.updateCamera();

    this.objs.forEach((obj) => obj.update())
    this.effects.forEach((obj) => obj.updateEffect())
    this.effects = this.garbageCollection(this.effects);
  }

  private lerpFactor = 0.1;

  private updateCamera() {
    if(!this.spaceShipMesh) return;
    this.cameraContainer.position.lerp(this.spaceShipMesh.position, this.lerpFactor);
  }

  private updateBGStars(time: number) {
    if(!this.particlesMesh) return;
    this.particlesMesh.rotation.y = (time * 0.008);
    this.particlesMesh.rotation.x = (time * 0.008);
  }

  private updateRaycast() {
    this.raycaster.setFromCamera(this.mousePosition, this.camera);
    const intersects = this.raycaster.intersectObjects(this.children);
    if(intersects.length > 0){
      const obj = intersects[0];
      this.targetPosition.copy(obj.point);
    }
  }

  private garbageCollection<T>(destroyables: IDestroyable[]) {
    return destroyables.filter((destroyable) => destroyable.isAlive) as T;
  }
}

export default SpaceScene;