import * as THREE from 'three';

// ----- 주제: 애니메이션 기본

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

	// Scene
	const scene = new THREE.Scene();

	// Camera
	const camera = new THREE.PerspectiveCamera(
		75, // 시야각(field of view)
		window.innerWidth / window.innerHeight, // 종횡비(aspect)
		0.1, // near
		1000 // far
	);
	camera.position.z = 5;
	scene.add(camera);

	const light = new THREE.DirectionalLight(0xffffff, 1);	// (색, 빛의 강도)
	light.position.x = 1;
	light.position.z = 2;
	scene.add(light);

	/* 
		DirectionalLight은 태양 빛하고 비슷하다고 보면 된다.
		mesh, light, camera => position으로 조정
	*/


	// Mesh
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshStandardMaterial({
		color: 'red'
	});
	const mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	// 그리기
	function draw() {
		// 0.1(각도)은 Radian(라디안)을 사용s
		// 360도는 2파이 (2 * 파이 = 6.3이므로, 6.3이 360도라고 보면 됨) 
		mesh.rotation.y += 0.1; 

		mesh.rotation.y += THREE.MathUtils.degToRad(1);
		// MathUtils.degToRad(각도)
		// 우리가 아는 degree(각도)를 Radian(라디안)으로 변환해주는 three.js 내장함수

		renderer.render(scene, camera);
	
		window.requestAnimationFrame(draw);
		// renderer.setAnimationLoop(draw)
	}

	function setSize() {
		// 카메라
		camera.aspect = window.innerWidth / window.innerHeight;
		// updateProjectionMatrix 카메라 투영에 관련된 값에 변화가 있을 경우 실행해야 함
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// 이벤트
	window.addEventListener('resize', setSize);

	draw();
}
