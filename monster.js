new Vue({
    el:"#app",
    data:{
        you: 100,
        monster:100,
        start:false,
        turns: []
    },
    methods:{
        startGame : function(){
            this.start = true;
            this.you = 100;
            this.monster = 100;
            this.turns = [];
        },

        attack : function(){
            // var max = 10;
            // var min = 3
            // var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
    
            // var damage = this.calculateDamage(3,10);
            // this.monster -= damage;
            
            var damage = this.calculateDamage(3,10);
            this.monster -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'You hits Monster for' + damage
            });
            if(this.checkWin()){
                return;
            }
            // if(this.monster <= 0){
            //     alert('You Won!');
            //     this.start = false;
            //     return;
            // }

//--------------------------
            // max = 12;
            // min = 5;
            // damage = Math.max(Math.floor(Math.random() * max) + 1, min)
  
            // var damage = this.calculateDamage(5,10);
            // this.you -= damage;


            // if(this.you <= 0){  第一版
            //     alert('You Lose!');
            //     this.start = false;
            // }

            // this.you -= this.calculateDamage(5,10);  第二版
            // this.checkWin();

            this.monsterAttack();

        },

        specialAttack : function(){
            var damage = this.calculateDamage(10,20);
            this.monster -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'You hits Monster for' + damage
            });

            if(this.checkWin()){
                return;
            }
            // this.you -= this.calculateDamage(5,10);
            // this.checkWin();
            this.monsterAttack();
        },

        heal : function(){
            if(this.you <= 90){
                this.you += 10;
            }
            else{
                this.you = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'You heals for 10' 
            });
            this.monsterAttack();
        },

        giveUp : function(){
            this.start = false;
        },
        monsterAttack: function(){
            var damage = this.calculateDamage(5,12)
            this.you -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hit You for' + damage
            });
        },

        calculateDamage : function(min,max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin: function () {
            if(this.monster <= 0){
                if(confirm('You won! New Game?')){
                    this.startGame();
                }
                else{
                    this.start = false;
                    }
                return true;
                }
            else if (this.you <= 0){
                if(confirm('You lost! New Game?')){
                    this.startGame();
                }
                else{
                this.start = false;
                    }
                return true;
                }
            return false;
        }
    }
})