window.addEventListener("load", event => main());
window.addEventListener("resize", event => resize());

const resize = () => {

	console.log("resize", window.innerWidth, window.innerHeight);

};


const main = () => {

	console.log("hello world");

	// initialisation de la scène
	var scene = new THREE.Scene();

	// init camera
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

	// web gl renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	// create cube geom and material
	var geometry = new THREE.BoxGeometry(2,2,2,2);
	var rouge = new THREE.MeshBasicMaterial( { color: 0xff00000 } );
	var cube = new THREE.Mesh( geometry, rouge );
	// create rectangle geom and material
	var geometryRectangle = new THREE.BoxGeometry(6,1,1,1);
	var blanc = new THREE.MeshBasicMaterial( { color: 0xffffffff } );
	var rectangle = new THREE.Mesh( geometryRectangle, blanc );
	// create sphere geom and material
	var geometrysphere = new THREE.SphereGeometry(1.5,32,32);
	var jaune = new THREE.MeshBasicMaterial( { color: 0xfffff0f } );
	var sphere = new THREE.Mesh( geometrysphere, jaune );
	// add cube to scene
	scene.add( cube );
	scene.add( rectangle );
	scene.add( sphere );


	var keys = {
		Z: false,
		q: false,
		s: false,
		d: false,
		space:false,
		shift:false
	  };

	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 10;
	camera.rotation.order = 'XYZ';
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	//fonction de mouvement
	var vitesse = 0.2;
	function movecam(){
		if (keys.z) {
			
			camera.position.z += -vitesse ;
		  }
		  if (keys.q) {
			camera.position.x += -vitesse ;
		  }
		  if (keys.s) {
			camera.position.z += vitesse ;
		  }
		  if (keys.d) {
			camera.position.x += vitesse ;
		  }
		  if (keys.space) {
			camera.position.y += vitesse ;
		  }
		  if (keys.shift) {
			camera.position.y += -vitesse ;
		  }

	}
	document.onkeydown = function(e) {
		var char = String.fromCharCode(e.keyCode);
		console.log(char);
		if (char == 'Z')
		  keys.z = true;
		else if (char == 'Q')
		  keys.q = true;
		else if (char == 'S')
		  keys.s = true;
		else if (char == 'D')
		  keys.d = true;
		else if (char == ' ')
		  keys.space = true;
		else if (char == '')
			keys.shift = true;
	  };
	
	  document.onkeyup = function(e) {
		var char = String.fromCharCode(e.keyCode);
		if (char == 'Z')
		  keys.z = false;
		else if (char == 'Q')
		  keys.q = false;
		else if (char == 'S')
		  keys.s = false;
		else if (char == 'D')
		  keys.d = false;
		else if (char == ' ')
		  keys.space = false;
		else if (char == '')
		  keys.shift = false;
		
	  };




	animate();

	// animate loop
	function animate() {
		requestAnimationFrame( animate ); // request next frame
		//camera movement zqsd
		movecam();
		// move cube
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		// move rectangle
		rectangle.rotation.x += 0.02;
		rectangle.rotation.y += 0.02;
		rectangle.position.x = -5
		// move sphere
		sphere.rotation.x += 0.03;
		sphere.rotation.y += 0.03;
		sphere.position.x = 5;
		// render !
		renderer.render( scene, camera );
	}

};


