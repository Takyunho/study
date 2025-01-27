import * as THREE from 'three';

// ----- 주제: AxesHelper, GridHelper

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
	camera.position.x = 1;
	camera.position.y = 3;
	camera.position.z = 0;
	scene.add(camera);

	//=> light
	const ambientLight = new THREE.AmbientLight("white", 0.5)	// 은은하게 전체적으로 비추는 조명
	scene.add(ambientLight);
	const directionalLight = new THREE.DirectionalLight("white", 1);
	directionalLight.position.x = 1;
	directionalLight.position.z = 2;
	scene.add(directionalLight);

    //^ AxesHelper(축 헬퍼)
	const axesHelper = new THREE.AxesHelper(3);	// 3은 size
	scene.add(axesHelper);

	//^ gridHelper(격자 헬퍼)
	const gridHelper = new THREE.GridHelper(2);	// 2는 size
	scene.add(gridHelper);

	//=> Mesh
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshStandardMaterial({
		color: 'seagreen'
	});
	const mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(2, 0, 0)
	scene.add(mesh);

	//^ 카메라가 메쉬의 위치에서 바라보도록 하기
	camera.lookAt(mesh.position)

	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		const time = clock.getElapsedTime();

		mesh.rotation.y = time;

		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);
	}

	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	window.addEventListener('resize', setSize);

	draw();
}
