class Game{
    constructor(){

    }
    getstate(){
        var GS = database.ref('gameState');
        GS.on("value",function(data){
            gameState = data.val;
        })
    }
    updatestate(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player = new Player();
            player.getcount();
            form = new Form();
            form.display();
        }
    }
}