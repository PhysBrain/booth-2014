function SafetyZone(section) {
    switch (section) {
    case 0:
        this.xMin = -135;
        this.xMax = -87;
        this.yMin = -135;
        this.yMax = -111;
        break;
    case 1:
        this.xMin =  111;
        this.xMax =  135;
        this.yMin = -135;
        this.yMax = -87;
        break;
    case 2:
        this.xMin =  87;
        this.xMax =  135;
        this.yMin =  111;
        this.yMax =  135;
        break;
    case 3:
        this.xMin = -135;
        this.xMax = -111;
        this.yMin =  87;
        this.yMax =  135;
        break;
    }
}

SafetyZone.isInside(obj) {
    return ( obj.position.x >= this.xMin &&
             obj.position.x <= this.xMax &&
             obj.position.y >= this.yMin &&
             obj.position.y <= this.xMax );
}

function ScoreKeeper(section) {
    this.score = 0;
    this.interval = null;
    this.osow = false;
    this.safezone = new SafetyZone(section);
    this.chickens = [];
    for (var i=0; i<3; ++i) {
        chickens.push({ alive: true, safe: false });
    }
    
};

ScoreKeeper.prototype.computeScore() {
    this.score = 0;
    if (this.osow == false) {
        return;
    }
    score += computeChickenScore();
    return this.score;
}

function computeScore() {
    if (!OSOWPushed) return 0;
    var score = 0;
    score += computeChickenScore(chicks);
    score += computeSBladesScore();
    score += computeSNacelleScore();
    score += computeLBladeScore();
    score += computeOSOWScore();
    score += computeGateScore();
    if(score < 0) score = 0;
    return score;
}

function computeChickenScore(chickens) { //chickens are done!
    var chicks = [];
    for(var i=0;i<3;i++){
	var c = {
	    alive: 
	    safe: ((chickens[i].position.x>111)&&(chickens[i].position.y<-87))
	};
	chicks.push(c);
    }
    
    var score=0;
    for (var i=0; i<3; i++){
	var alive = (chicken[i].matrixWorld.elements[6] > 0.5);
	var safe = false;
	if (activeSession == 0) {
	    safe = ( chicken[i].position.x < -87 && chicken[i].position.y < -111 );
	}
	else if ( activeSession == 1) {
	    safe = ( chicken[i].position.x > 111 && chicken[i].position.y < -87 );
	}
	else if ( activeSession == 2) {
	    safe = ( chicken[i].position.x > 87 && chicken[i].position.y > 111 );
	}
	else if ( activeSession == 3 ) {
	    safe = ( chicken[i].position.x < -111 && chicken[i].position.y > 87 );
	}
		      
        if(alive) {
	    score+=4;
	    if (chicks[i].safe) {
		score+=6;
	    }
	}
	else {
	    score-=10;
	}
    }
    return score;
}

function computeSBladesScore() {
    var SBlades = { 
	trans: (SBlades[i].position.y > 0)
	installed: 
    };
    var score=0;
    var trans = false;
    var installed = false;
    if (activeSession == 0) {
	trans = (SBlades.position.y < 0 && SBlades.position.x < 0 );
    }
    
    else if (activeSession == 1) {
	trans = (SBlades.position.y < 0 && SBlades.position.x > 0 );
    }

    else if (activeSession == 2) {
	trans = (SBlades.position.y > 0 && SBlades.position.x > 0 );
    }

    else if (activeSession == 3) {
	trans = (SBlades.position.y > 0 && SBlades.position.x < 0 );
    }
    
    if(SBlades.trans) {
	score+=30;
	if(SNacelle.installed && SBlades.installed){
	    score+=30;
	    if (smMasts[s].rotation.y == smRaisedAngles.y){
		score+=20;
	    }
	}
    }
    return score;
}

function computeSNacelleScore() {
    var SNacelle = {
	trans: (SNacelle[i].position.y > 0),
	installed: 
    };
    var score=0;
    var trans = false;
    var installed = false;
    if (activeSession == 0) {
	trans = (SNacelle.position.y < 0 && SNacelle.position.x < 0 );
    }
    
    else if (activeSession == 1) {
	trans = (SNacelle.position.y < 0 && SNacelle.position.x > 0 );
    }
    
    else if (activeSession == 2) {
	trans = (SNacelle.position.y > 0 && SNacelle.position.x > 0 );
    }
    
    else if (activeSession == 3) {
	trans = (SNacelle.position.y > 0 && SNacelle.position.x < 0 );
    }

    if(SNacelle.trans) {
	score=+30;
	if(SNacelle.installed) {
	    score+=30;
	    if (smMasts[s].rotation.y == smRaisedAngles.y){
		score+=20;
	    }
	}
    }
    return score;
}

function computeLBladeScore() {
    var LBlade = [];
    for (var i=0; i<3; i++){
	var c = {
	    trans:(LBlade[i].position.y > 0),
	     pos1: false,
	     pos2: false 
	    };
	c.trans = false; //(LBlade[i].position.x > 0);
	LBlade.push(c);
    }
  
    var score=0;
    var trans = false;
    var pos1 = false;
    var pos2 = false;
    if (activeSession == 0) {
	trans = (LBlade.position.y < 0 && LBlade.position.x < 0 );
    }
    
    else if (activeSession == 1) {
	trans = (LBlade.position.y < 0 && LBlade.position.x > 0 );
    }
    
    else if (activeSession == 2) {
	trans = (LBlade.position.y > 0 && LBlade.position.x > 0 );
    }
    
    else if (activeSession == 3) {
	trans = (LBlade.position.y > 0 && LBlade.position.x < 0 );
    }
    for (var i=0; i<3; i++){
	if(LBlade[i].trans){
	    score+=10;
	    if (LBlade[i].pos1){
		score+=30;
		if (lgMasts[s].rotation.y == lgRaisedAngles.y){
		score+=20;
		}
	    }
	    else if (LBlade[i].pos2){   
		score+=50;
	    }
	}
    }  
    return score;
}

function computeOSOWScore() {
    var OSOW = {
	if OSOW
    };

    var score=0;
    var on = false;
    if (activeSession == 0) {
	on = (OSOW.position.y > -20 && OSOW.position.y < 0 && OSOW.position.x < -100 && OSOW.position.x > -130 );
	
    }
    else if (activeSession == 1) {
	on = (OSOW.position.y < 20 && OSOW.position.y > 0 && OSOW.position.x > 100 && OSOW.position.x < 130 );
	
    }
    else if (activeSession == 2) {
	on = (OSOW.position.y < 20 && OSOW.position.y > 0 && OSOW.position.x > 111 && OSOW.position.x < 150 );
	
    }
    else if (activeSession == 3) {
	on = (OSOW.position.y < 20 && OSOW.position.y > 0 && OSOW.position.x < -111 && OSOW.position.x > -150 );
	
    }
    
    if(OSOW.on){
	score+=5;
    }
    return score;
}

function computeGateScore(gate) {
    var Gate= [];
    for (var i=0; i<2; i++) {
    var c = {
	open: ( gates[s][i].rotation.x == gateRaisedAngles[i]*Math.cos(phi))
    };                                                                         
    Gate.push(c);
}
    var score=0;
        var on = false;
    if (activeSession == 0) {
	open = ( Gate[i].position.y > -20 && Gate[i].position.y < 0 && Gate[i].position.x < -50 && Gate[i].position.x > -100 );
	
    }
    else if (activeSession == 1) {
		on = ( Gate[i].position.y > -20 && Gate[i].position.y < 0 && Gate[i].position.x > 50 && Gate[i].position.x < 100 );
	
    }
    else if (activeSession == 2) {
	on = ( Gate[i].position.y < 20 && OSOW.position.y > 0 && OSOW.position.x > 50 && OSOW.position.x < 100 );
	
	
    }
    else if (activeSession == 3) {
	on = ( Gate[i].position.y < 20 && Gate[i].position.y > 0 && Gate[i].position.x < -50 && Gate[i].position.x > -100 );
	
    }

    for (var i=0; i<2; i++) {
	if(Gate[i].open){
	    score+=5;
	}
    }
    return score;	
}
