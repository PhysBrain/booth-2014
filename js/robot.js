//////////////ROBOT SIMULATOR CODE - GORDON TENEV/////////////
function initRobot(x0, y0) {
    robot = new THREE.Object3D;
    robot.position.x = x0;
    robot.position.y = y0;
    robot.position.z = 5;
    robot.body=new THREE.Mesh( new THREE.BoxGeometry(5,12,1), woodMat);
    robot.body.position.x = -5;
    robot.body.position.y = 0;
    robot.body.position.z = 0;
    robot.add(robot.body);
    var pvc1= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,16,16), pvcMat);
    pvc1.position.y = 6;
    pvc1.rotation.z = Math.PI/2;
    robot.body.add(pvc1);
    var pvc2= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,16,16), pvcMat);
    pvc2.position.y = -6;
    pvc2.rotation.z = Math.PI/2;
    robot.body.add(pvc2);
    var pvc3= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,20,16), pvcMat);
    pvc3.position.z = -2;
    pvc3.position.y = -6;
    pvc3.position.x = -2;
    pvc3.rotation.z = Math.PI/2;
    robot.body.add(pvc3);
    var pvc4= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4,16), pvcMat);
    pvc4.position.y = -6;
    pvc4.position.z = -0.25;
    pvc4.position.x = 8;
    pvc4.rotation.z = Math.PI/2;
    pvc4.rotation.y = Math.PI/2;
    robot.body.add(pvc4);
    var pvc5= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,20,16), pvcMat);
    pvc5.position.z = -2;
    pvc5.position.y = 6;
    pvc5.position.x = -2;
    pvc5.rotation.z = Math.PI/2;
    robot.body.add(pvc5);
    var pvc6= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4,16), pvcMat);
    pvc6.position.set(8, 6, -0.25);
    pvc6.position.x = 8;
    pvc6.rotation.z = Math.PI/2;
    pvc6.rotation.y = Math.PI/2;
    robot.body.add(pvc6);
    var pvc7= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,2,16), pvcMat);
    pvc7.position.set(-7.5, 6, -1);
    pvc7.rotation.z = Math.PI/2;
    pvc7.rotation.y = Math.PI/2;
    robot.body.add(pvc7);
    var pvc8= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,2,16), pvcMat);
    pvc8.position.set(-7.5, -6, -1);
    pvc8.rotation.z = Math.PI/2;
    pvc8.rotation.y = Math.PI/2;
    robot.body.add(pvc8);
    var pvc9= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,10.5,16), pvcMat);
    pvc9.position.set(0, 0, 4);
    robot.body.add(pvc9);
    var pvc10= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,12.2,16), pvcMat);
    pvc10.position.set(-11.5, 0, -2);
    robot.body.add(pvc10);
    var pvc11= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,2,16), pvcMat);
    pvc11.position.set(0, -6, 1);
    pvc11.rotation.z = Math.PI/2;
    pvc11.rotation.y = Math.PI/2;
    robot.body.add(pvc11);
    var pvc12= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,2,16), pvcMat);
    pvc12.position.y = 6;
    pvc12.position.z = 1;
    pvc12.rotation.z = Math.PI/2;
    pvc12.rotation.y = Math.PI/2;
    robot.body.add(pvc12);

    var elbowGeom = new THREE.TubeGeometry(new QuarterCircle(2), 10, 0.75, 16, false);

    var elbow1 = new THREE.Mesh(elbowGeom, pvcMat, 5);
    elbow1.rotation.y = Math.PI/2;
    elbow1.position.set(0, 4, 4);
    robot.body.add(elbow1);

    var elbow2 = new THREE.Mesh(elbowGeom, pvcMat, 5);
    elbow2.rotation.y = -Math.PI/2;
    elbow2.rotation.z = Math.PI;
    elbow2.position.set(0, -4, 4);
    robot.body.add(elbow2);

    var elbow3 = new THREE.Mesh(elbowGeom, pvcMat, 5);
    elbow3.rotation.z = -Math.PI;
    elbow3.rotation.x = Math.PI/2;
    elbow3.position.set(8, 6, 0);
    robot.body.add(elbow3);


    var gg = new THREE.CylinderGeometry(3,3,0.7,12);
    var gearmesh = new THREE.Mesh(gg, woodMat);
    gearmesh.position.x = 0;
    gearmesh.position.z = 1.5;
    gearmesh.rotation.z = Math.PI/0.5;
    robot.add(gearmesh);
    var mg = new THREE.BoxGeometry(2,1,1);
    var mmesh = new THREE.Mesh(mg, woodMat);
    mmesh.position.z = 1.5;
    mmesh.position.x = -3.5;
    mmesh.position.y = 0.9;
    robot.add(mmesh);
    //arm
    var ag1 = new THREE.CylinderGeometry(0.4,0.4,13.5,12);
    var armmesh1 = new THREE.Mesh(ag1, pvcMat);
    armmesh1.position.z = 6;
    armmesh1.rotation.x = Math.PI/2;
    gearmesh.add(armmesh1);
    var ag2 = new THREE.CylinderGeometry(0.4,0.4,2,12);
    var armmesh2 = new THREE.Mesh(ag2, pvcMat);
    armmesh2.position.z = 12.3;
    armmesh2.position.x = -1;
    armmesh2.rotation.z = Math.PI/2;
    gearmesh.add(armmesh2);
    var ag3 = new THREE.CylinderGeometry(0.4,0.4,4,12);
    var armmesh3 = new THREE.Mesh(ag3, pvcMat);
    armmesh3.position.z = 14;
    armmesh3.position.x = -1.45;
    armmesh3.rotation.x = Math.PI/2;
    gearmesh.add(armmesh3);
    var cbg = new THREE.BoxGeometry(1,0.2,1.8);
    var cbasemesh = new THREE.Mesh(cbg, stoneMat);
    cbasemesh.position.y = 2.1;
    armmesh3.add(cbasemesh);
    var c1g = new THREE.BoxGeometry(1,0.8,0.2);
    var c1mesh = new THREE.Mesh(c1g, stoneMat);
    c1mesh.position.y = 0.4;
    c1mesh.position.z = 0.85;
    cbasemesh.add(c1mesh);
    var c2g = new THREE.BoxGeometry(1,0.8,0.2);
    var c2mesh = new THREE.Mesh(c2g, stoneMat);
    c2mesh.position.y = 0.4;
    c2mesh.position.z = -0.85;
    cbasemesh.add(c2mesh);

    // Add the body to the scene
    scene.add(robot);

    // Add the wheels to the scene independently
    robot.wheelL = createWheel();
    robot.wheelL.position.set(x0-4, y0-6.5, 5);
    scene.add(robot.wheelL);

    robot.wheelR = createWheel();
    robot.wheelR.position.set(x0-4, y0+6.5, 5);
    scene.add(robot.wheelR);

    return robot;
}

///////////////////////////////////////////////////////////////////////////
//The Wheels
function createWheel() {
    var wheelGeom = new THREE.CylinderGeometry(5,5,0.5,32);
    var wheelMat = new THREE.MeshLambertMaterial( { color: 0x000080 } );
    var wheelSurf = Physijs.createMaterial( wheelMat, 0.8, 0.2 );
    var mesh = new Physijs.CylinderMesh(wheelGeom, wheelSurf, 100);
    return mesh;
}

/*
    //The movement
    window.addEventListener('keydown', function(e){
	      var step = 1.5;//distance moved when a key is pressed.
	      var walk = 2.5;//walking speed
	      var deg = 10 //degrees to rotate when key pressed for the robot.
	      var wdeg = 1 //degrees to rotate when key is pressed for the gear.
	      var rot= deg*Math.PI/180;
	      var wrot= wdeg*Math.PI/180;
	      var theta = robot.rotation.z;
	      var cr = camera.rotation.y;
	      var dx = Math.cos(theta);
	      var dy = Math.sin(theta);
	      var wx = Math.cos(cr);
	      var wy = Math.sin(cr);
	      var dir = new THREE.Vector3(0,0,0);
	      switch(e.keyCode){
	      case 87://w
	          robot.position.x += step*dx;//helps it move on the x axis and y axis to make it go diagonal.
	          robot.position.y += step*dy;
	          break;
	      case 65://a
	          robot.rotation.z+=rot;
	          break;
	      case 83://s
	          robot.position.x -= step*dx;
	          robot.position.y -= step*dy;
	          break;
	      case 68://d
	          robot.rotation.z-=rot;
	          break;
	      case 33: // page up
	          camera.position.z = 200; // For a bird's-eye-view.
	          break;
	      case 34: // page down
	          camera.position.z = 10; //For a view on arena ground.
	          break;
	      case 38://up arrow
	          if(gearmesh.rotation.y < (Math.PI/2)) {
		            gearmesh.rotation.y += wrot;
	          }
	          console.log(gearmesh.rotation.y);
	          break;
	      case 40://down arrow
	          if(gearmesh.rotation.y > -(Math.PI/2)) {
		            gearmesh.rotation.y -= wrot;
	          }
	          console.log(gearmesh.rotation.y);
	          break;
	          
	          
	          
	      }
	  });
    return robot;

    //Thus sayeth the Chicken Chucker, "My fair brethren, what hast
    //ye done to me? Why shall I hurl chickens to yonder places,
    //when, indeed, I am supposed to save them, and bring the pitieous
    //prairie fowl to place of refuge? Why then, are ye so foolish as
    //to christen me this unbefitting name?"

    //                                       --From the desk of the
    //                                         Humble Scribe of his
    //                                         Majesty The Chicken
    //                                         Chucker

}
*/

/*
function initRobot(x0, y0) {
    var robot = new THREE.Object3D();
    robot.position.x = x0;
    robot.position.y = y0;
    robot.position.z = 5;
    var bodyGeom = new THREE.CylinderGeometry(0,0,0);
    var bodyMat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
    robot.add (bodyMesh);
    var b1Geom = new THREE.CylinderGeometry(0.5,0.5,10.25);
    var b1Mat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var b1Mesh = new THREE.Mesh(b1Geom,b1Mat);
    b1Mesh.position.x = -4.7;
    b1Mesh.position.y = 5;
    b1Mesh.position.z = -1;
    b1Mesh.rotation.z = 90*Math.PI/180;
    b1Mesh.rotation.y = -55*Math.PI/180;
    robot.add(b1Mesh);
    // robot.add (bodyMesh);
    var b2Geom = new THREE.CylinderGeometry(0.5,0.5, 10.25);
    var b2Mat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var b2Mesh = new THREE.Mesh(b2Geom,b2Mat);
    b2Mesh.position.x = -4.7;
    b2Mesh.position.y = -5;
    b2Mesh.position.z = -1;
    b2Mesh.rotation.z = 90*Math.PI/180;
    b2Mesh.rotation.y = -55*Math.PI/180;
    robot.add(b2Mesh);
    // robot.add (bodyMesh);
    var b4Geom = new THREE.CylinderGeometry(0.5,0.5,16);
    var b4Mat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var b4Mesh = new THREE.Mesh(b4Geom,b4Mat);
    b4Mesh.position.x = 4.15;
    b4Mesh.position.y = -5;
    b4Mesh.position.z = -0.5;
    b4Mesh.rotation.z = 90*Math.PI/180;
    b4Mesh.rotation.y = 35*Math.PI/180;
    robot.add(b4Mesh);
    var b3Geom = new THREE.CylinderGeometry(0.5,0.5,10.65);
    var b3Mat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var b3Mesh = new THREE.Mesh(b3Geom,b3Mat);
    b3Mesh.position.x = -7.5;
    b3Mesh.position.y = 0;
    b3Mesh.position.z = -4.25;
    robot.add(b3Mesh);
    var b5Geom = new THREE.CylinderGeometry(0.5,0.5,16.6);
    var b5Mat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var b5Mesh = new THREE.Mesh(b5Geom,b5Mat);
    b5Mesh.position.x = 4.15;
    b5Mesh.position.y = 5;
    b5Mesh.position.z = 0;
    b5Mesh.rotation.z = 90*Math.PI/180;
    b5Mesh.rotation.y = 35*Math.PI/180;
    robot.add(b5Mesh);
    var skid1Geom = new THREE.CylinderGeometry(0.5,0.5,1.5);
    var skid1Mat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var skid1Mesh = new THREE.Mesh(skid1Geom,skid1Mat);
    skid1Mesh.position.x = 11.3;
    skid1Mesh.position.y = 5;
    skid1Mesh.position.z = -4.5;
    skid1Mesh.rotation.z = 90*Math.PI/180;
    skid1Mesh.rotation.y = 170*Math.PI/180;
    robot.add(skid1Mesh);
    var skid2Geom = new THREE.CylinderGeometry(0.5,0.5,1.5);
    var skid2Mat = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } );
    var skid2Mesh = new THREE.Mesh(skid2Geom,skid2Mat);
    skid2Mesh.position.x = 11.3;
    skid2Mesh.position.y = -5;
    skid2Mesh.position.z = -4.65;
    skid2Mesh.rotation.z = 90*Math.PI/180;
    skid2Mesh.rotation.y = 170*Math.PI/180;
    robot.add(skid2Mesh);
    var wheelgeom=new THREE.CylinderGeometry(5,5,0.5,16);
    var wheelmat = new THREE.MeshBasicMaterial( { color: 0x662200 } );
    var wheelmesh=new THREE.Mesh(wheelgeom, wheelmat);
    robot.add(bodyMesh);
    wheelmesh.position.x=0;
    wheelmesh.position.y=-6;
    wheelmesh.position.z=0;
    robot.add(wheelmesh);
    var wheelgeom2=new THREE.CylinderGeometry(5,5,0.5,16);
    var wheelmat2=new THREE.MeshBasicMaterial( { color: 0x662200 } );
    var wheelmesh2=new THREE.Mesh(wheelgeom2, wheelmat2);
    wheelmesh2.position.x=0;
    wheelmesh2.position.y=6;
    wheelmesh2.position.z=0;
    robot.add(wheelmesh2);
    var plankgeom=new THREE.BoxGeometry(14,10,0.5)
    var plankmat=new THREE.MeshBasicMaterial( { color:0x663300 } );
    var plankmesh=new THREE.Mesh(plankgeom,plankmat);
    plankmesh.position.x=4.3;
    plankmesh.position.y=0;
    plankmesh.position.z=0.5;
    plankmesh.rotation.y= 35*Math.PI/180;
    robot.add(plankmesh);
    var rodgeom=new THREE.BoxGeometry(15,3,1.5);
    var rodmat=new THREE.MeshBasicMaterial( { color: 0x773300 } );
    var rodmesh=new THREE.Mesh(rodgeom,rodmat);
    rodmesh.position.x=7.1;
    rodmesh.position.y=0;
    rodmesh.position.z=7;
    rodmesh.rotation.y=78;
    robot.add(rodmesh);
    window.addEventListener('keydown', function(e){
	      var step = 1.5;//distance moved when a key is pressed.
	      var deg = 10 //degrees to rotate when key pressed.
	      var rot= deg*Math.PI/180;
	      var theta = robot.rotation.z;
	      var dx = Math.cos(theta);
	      var dy = Math.sin(theta);
	      switch(e.keyCode){
	      case 87://w
	          robot.position.x += step*dx;
	          robot.position.y += step*dy;
	          break;
	      case 65://a
	          robot.rotation.z+=rot;
	          break;
	      case 83://s
	          robot.position.x -= step*dx;
	          robot.position.y -= step*dy;
	          break;
	      case 68://d
	          robot.rotation.z-=rot;
	          break;
	      }
	  });
    scene.add(robot);
    //Thus sayeth the Chicken Chucker, "My fair brethren, what hast
    //ye done to me? Why shall I hurl chickens to yonder places,
    //when, indeed, I am supposed to save them, and bring the pitieous
    //prairie fowl to place of refuge? Why then, are ye so foolish as
    //to christen me this unbefitting name?"

    //                                         --From the desk of the
    //                                         Humble Scribe of his
    //                                         Majesty The Chicken
    //                                         Chucker

}
*/
