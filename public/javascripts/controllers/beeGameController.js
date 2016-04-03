beeApp.controller('beeGameController',function beeGameController($scope) {
    $scope.resetGameButton=true;
    $scope.startGameButton=false;

    $scope.queen = 100;
    $scope.beeWorker_1 = 75;
    $scope.beeWorker_2 = 75;
    $scope.beeWorker_3 = 75;
    $scope.beeWorker_4 = 75;
    $scope.beeWorker_5 = 75;
    $scope.beeDrone_1 = 50;
    $scope.beeDrone_2 = 50;
    $scope.beeDrone_3 = 50;
    $scope.beeDrone_4 = 50;
    $scope.beeDrone_5 = 50;
    $scope.beeDrone_6 = 50;
    $scope.beeDrone_7 = 50;
    $scope.beeDrone_8 = 50;


    $scope.startGame = function (){
        $scope.resetGameButton=false;
        $scope.startGameButton=true;
        $scope.beeTime=setInterval(animateDiv, 700);
    }

    $scope.beeHit= function(obj){

        if(obj.match("^queen")){
            $scope[obj] = $scope[obj]-8;
            if($scope[obj] <=0){
                $scope[obj] = 0;
                $scope.beeWorker_1 = 0;
                $scope.beeWorker_2 = 0;
                $scope.beeWorker_3 = 0;
                $scope.beeWorker_4 = 0;
                $scope.beeWorker_5 = 0;
                $scope.beeDrone_1 = 0;
                $scope.beeDrone_2 = 0;
                $scope.beeDrone_3 = 0;
                $scope.beeDrone_4 = 0;
                $scope.beeDrone_5 = 0;
                $scope.beeDrone_6 = 0;
                $scope.beeDrone_7 = 0;
                $scope.beeDrone_8 = 0;
                //stop timer
                clearInterval($scope.beeTime);
                //kill all bee
                $(".cursorBee").addClass("bee_queen_dead");
            }
        }
        if(obj.match("^beeWorker_")){
            $scope[obj] = $scope[obj]-10;
            if($scope[obj] <=0){
                $scope[obj]=0;
                //kill all bee
                $("#"+obj).addClass("bee_worker_dead").removeClass(obj);
            }
        }
        if(obj.match("^beeDrone_")){
            $scope[obj] = $scope[obj]-12;
            if($scope[obj] <=0){
                $scope[obj]=0;
                //kill all bee
                $("#"+obj).addClass("bee_drone_dead").removeClass(obj);
            }
        }
    }

    $scope.resetGame = function(){
        clearInterval($scope.beeTime);
        $(".cursorBee").removeClass("bee_queen_dead bee_worker_dead bee_drone_dead");
        $(".cursorBee").each(function(){
            $("#"+this.id).animate({ top: 270, left: 0}, function(){
            });
        })
        $scope.resetGameButton=true;
        $scope.startGameButton=false;

        $scope.queen = 100;
        $scope.beeWorker_1 = 75;
        $scope.beeWorker_2 = 75;
        $scope.beeWorker_3 = 75;
        $scope.beeWorker_4 = 75;
        $scope.beeWorker_5 = 75;
        $scope.beeDrone_1 = 50;
        $scope.beeDrone_2 = 50;
        $scope.beeDrone_3 = 50;
        $scope.beeDrone_4 = 50;
        $scope.beeDrone_5 = 50;
        $scope.beeDrone_6 = 50;
        $scope.beeDrone_7 = 50;
        $scope.beeDrone_8 = 50;

    }

});


function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() -250;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    if(nh<270)
        nh= (270-nh) + nh;
    if(nw<250)
        nw= (250-nw) + nw;
    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    $('.queen').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeWorker_1').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeWorker_2').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeWorker_3').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeWorker_4').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeWorker_5').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_1').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_2').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_3').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_4').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_5').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_6').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_7').animate({ top: newq[0], left: newq[1] }, function(){
    });
    var newq = makeNewPosition();
    $('.beeDrone_8').animate({ top: newq[0], left: newq[1] }, function(){
    });
};