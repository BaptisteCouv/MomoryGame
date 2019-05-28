class Jeu {
    constructor(){
        this.gridOne = document.querySelector(".grid");
        this.gridTwo = document.querySelector(".grid");
        this.carte; 
        this.carte2;
        this.random = ["🍒", "🍉", "🍓", "🍌", "🍏", "🍍"];
        this.index = 0;
        this.ratconteur = 0;
        this.wait = 0;
        this.targetId = "";
        this.targetId2 = "";
    }

    jeuCarte1(){
        this.carte.forEach(element => {
            element.addEventListener('click', event =>{
                if(this.wait == 0){
                        this.targetTarget = event.target.innerHTML;
                        if(this.targetId == ""){
                            this.targetId = event.target.id;
                        }else{
                            this.targetId2 = event.target.id;
                        }

                        this.ratconteur++;                        
                        let carte = document.getElementById(this.targetId);
                        let carte2 = document.getElementById(this.targetId2);

                        carte.className = "carte11";

                        if(this.ratconteur == 2){
                            setTimeout(() => {
                                carte.className = "carte1";
                                carte2.className = "carte1";                              
                            }, 2000);
                        }

                        this.successCard();
                    }
            });
        });
    }

    jeuCarte2(){
        this.carte2.forEach(element2 => {
            element2.addEventListener('click', event =>{
                if(this.wait == 0){
                    this.targetTarget2 = event.target.innerHTML;
                    
                    if(this.targetId == ""){
                        this.targetId = event.target.id;
                    }else{
                        this.targetId2 = event.target.id;
                    }
                    this.ratconteur++;

                    let carte = document.getElementById(this.targetId);
                    let carte2 = document.getElementById(this.targetId2);

                    carte2.className = "carte11";

                    if(this.ratconteur == 2){
                        setTimeout(() => {
                            carte.className = "carte1";
                            carte2.className = "carte1";                              
                        }, 2000);
                    }

                    this.successCard();
                }
            });
        });
    }
    
    boucleRandom(){
        this.shuffle(this.random);
        this.carte.forEach(element => {
            for (this.index; this.index < this.random.length; this.index++) {
                element.innerHTML = this.random[this.index];
                this.index++;
                break;
            }
        });
    }

    boucleRandom2(){
        this.shuffle(this.random);
        this.index = 0;
        this.carte2.forEach(element => {
            for (this.index; this.index < this.random.length; this.index++) {
                element.innerHTML = this.random[this.index];
                this.index++;
                break;
            }
        });
    }

    shuffle(array) {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    createCard(){
        for(let i = 0; i < 6; i++){
            // Permet d'écrir du HTML dans le JS !!
            this.gridOne.innerHTML += '<div id="carte1-'+ i +'" class="carte1 color"></div>';
            this.gridTwo.innerHTML += '<div id="carte2-'+ i +'" class="carte2 color"></div>';
        }
        this.carte = document.querySelectorAll('.carte1');
        this.carte2 = document.querySelectorAll('.carte2');
    }

    successCard(){
        if (this.targetTarget == this.targetTarget2) {
            this.wait = 1;
            let carte = document.getElementById(this.targetId);
            let carte2 = document.getElementById(this.targetId2);
            console.log(this.compteurChangement);
            
            carte.style.backgroundColor = "white";
            carte.style.pointerEvents = "none";
            carte.style.fontSize = "100px";
            carte.style.textAlign = "center";


            carte2.style.pointerEvents = "none";
            carte2.style.backgroundColor = "white";
            carte2.style.fontSize = "100px";
            carte2.style.textAlign = "center";

            

            setTimeout(() => {
                this.targetId = "";
                this.targetId2 = "";
                this.ratconteur = 0;
            }, 1000);

            setTimeout(() => {
                this.compteurChangement = 0;
                this.compteurChangement2 = 0;
                this.wait = 0;
            }, 2000);
            
        } else if (this.ratconteur == 2){
            this.wait = 1;
            this.targetTarget = "";
            this.targetTarget2 = "";
            this.ratconteur = 0;
            this.targetId = "";
            this.targetId2 = "";
            
            setTimeout(() => {
                this.wait = 0;
                this.compteurChangement = 0;
                this.compteurChangement2 = 0;
            }, 2000);
        }
    }
}


let jeuMemoire = new Jeu();
jeuMemoire.createCard();
jeuMemoire.jeuCarte1();
jeuMemoire.jeuCarte2();
jeuMemoire.boucleRandom();
jeuMemoire.boucleRandom2();