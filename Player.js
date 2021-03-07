class Player{
    constructor(){

    }
    getcount(){
        var PC = database.ref('playerCount');
        PC.on("value",function(data){
            playerCount = data.val();
        })
    }
    updatecount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(name){
var pi = "player"+playerCount
database.ref(pi).set({
    name:name
})
    }
}