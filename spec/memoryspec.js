describe ("MemoryGame", function(){
    beforeEach(function(){
        function startGame (){
            var playerNames = ["Sjoerd", "Simone"];
            var cardNames = ["1", "2", "3", "4"];
           // var shuffleMachine = new ShuffleMachine ();
            var shuffleMachine = new BrokenShuffleMachine ();
            var visualiser = new Visualiser();
            return new MemoryGame (playerNames, cardNames, shuffleMachine, visualiser);
        }
         game = startGame();
    });
    it("should show whose turn it is and how many points that player has", function(){

        expect(game.getNameOfActivePlayer()).toEqual("Sjoerd");
        expect(game.getScoreOfActivePlayer()).toEqual(0);
    });
    it("should show whose turn it is and how many points that player has", function(){

        game.selectPosition(0);
        game.selectPosition(1);
        expect(game.getNameOfActivePlayer()).toEqual("Sjoerd");
        expect(game.getScoreOfActivePlayer()).toEqual(1);
    });



});