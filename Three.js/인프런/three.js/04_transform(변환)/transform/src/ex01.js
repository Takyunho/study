import * as THREE from 'three';
import dat from 'dat.gui';

// ----- 주제: position

export default function example() {
	//=> Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);


	//=> Scene
	const scene = new THREE.Scene();


	//=> Camera
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.y = 1.5;
	camera.position.z = 4;
	scene.add(camera);


	//=> Light
	const ambientLight = new THREE.AmbientLight('white', 0.5);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight('white', 1);
	directionalLight.position.x = 1;
	directionalLight.position.z = 2;
	scene.add(directionalLight);


	//=> Mesh
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshStandardMaterial({
		color: 'seagreen'
	});
	const mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);


	//=> AxesHelper
	const axesHelper = new THREE.AxesHelper(3);
	scene.add(axesHelper);


	//=> Dat GUI
	const gui = new dat.GUI();
	gui.add(camera.position, 'x', -5, 5, 0.1).name('카메라 X');
	gui.add(camera.position, 'y', -5, 5, 0.1).name('카메라 Y');
	gui.add(camera.position, 'z', 2, 10, 0.1).name('카메라 Z');


	//=> 그리기
	const clock = new THREE.Clock();

	function draw() {
		const delta = clock.getDelta();

		// set메소드로 x, y, z를 한 번에 지정 가능
		mesh.position.set(1, 0, -3);

		//^ Vector3
		//^ 3차원 공간에서 한 점의 위치를 나타내는 객체. (x, y, z)를 갖는다.
		
		//^ 벡터의 거리를 구하는 방법
		// => distanceTo() 메소드로 거리를 구할 수 있다.
		// console.log(mesh.position.length());	// 원점으로부터 떨어진 x,y,z의 거리
		// console.log(mesh.position.distanceTo(new THREE.Vector3(1, 0, -3)));	// 새로운 벡터까지의 거리를 나타냄
		console.log(mesh.position.distanceTo(camera.position));		// 메쉬부터 카메라까지의 거리
		
		
		

		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);
	}


	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}


	//=> 이벤트
	window.addEventListener('resize', setSize);

	draw();
}
