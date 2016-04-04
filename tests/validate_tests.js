describe('beeGameController', function() {
   beforeEach(module('bee'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));


    describe('*** Check if controller is defined ***', function() {
        it('Should return true if controller is defined', function() {
            var $scope = {};
            var controller = $controller('beeGameController', { $scope: $scope });
            expect(controller).toBeDefined();
        });
    });


    describe('*** Check Life Points ***', function() {
        it('Should return true if the life points are correctly set', function() {
            var $scope = {};
            var controller = $controller('beeGameController', { $scope: $scope });
            expect($scope.queen).toEqual(100);
            expect($scope.beeWorker_1).toEqual(75);
            expect($scope.beeWorker_2).toEqual(75);
            expect($scope.beeWorker_3).toEqual(75);
            expect($scope.beeWorker_4).toEqual(75);
            expect($scope.beeWorker_5).toEqual(75);
           expect($scope.beeDrone_1).toEqual(50);
           expect($scope.beeDrone_2).toEqual(50);
           expect($scope.beeDrone_3).toEqual(50);
           expect($scope.beeDrone_4).toEqual(50);
           expect($scope.beeDrone_5).toEqual(50);
           expect($scope.beeDrone_6).toEqual(50);
           expect($scope.beeDrone_7).toEqual(50);
           expect($scope.beeDrone_8).toEqual(50);


        });
    });

    describe('*** Check queen hit ***', function() {
        it('When the queen is hit, should return life points of queen less 8', function() {
            var $scope = {};
            var controller = $controller('beeGameController', { $scope: $scope });
            $scope.beeHit('queen');
            expect($scope.queen).toEqual(92);
        });
    });


    describe('*** Check beeWorker hit ***', function() {
        it('When the beeWorker is hit, should return life points of beeWorker less 10', function() {
            var $scope = {};
            var controller = $controller('beeGameController', { $scope: $scope });
            $scope.beeHit('beeWorker_1');
            $scope.beeHit('beeWorker_2');
            $scope.beeHit('beeWorker_3');
            $scope.beeHit('beeWorker_4');
            $scope.beeHit('beeWorker_5');
            expect($scope.beeWorker_1).toEqual(65);
            expect($scope.beeWorker_2).toEqual(65);
            expect($scope.beeWorker_3).toEqual(65);
            expect($scope.beeWorker_4).toEqual(65);
            expect($scope.beeWorker_5).toEqual(65);

        });
    });


    describe('*** Check beeDrone hit ***', function() {
        it('When the beeDrone is hit, should return life points of beeDrone less 12', function() {
            var $scope = {};
            var controller = $controller('beeGameController', { $scope: $scope });
            $scope.beeHit('beeDrone_1');
            $scope.beeHit('beeDrone_2');
            $scope.beeHit('beeDrone_3');
            $scope.beeHit('beeDrone_4');
            $scope.beeHit('beeDrone_5');
            $scope.beeHit('beeDrone_6');
            $scope.beeHit('beeDrone_7');
            $scope.beeHit('beeDrone_8');
            expect($scope.beeDrone_1).toEqual(38);
            expect($scope.beeDrone_2).toEqual(38);
            expect($scope.beeDrone_3).toEqual(38);
            expect($scope.beeDrone_4).toEqual(38);
            expect($scope.beeDrone_5).toEqual(38);
            expect($scope.beeDrone_6).toEqual(38);
            expect($scope.beeDrone_7).toEqual(38);
            expect($scope.beeDrone_8).toEqual(38);


        });
    });


    describe('*** Check if, when the queen is died , all the bees are died ***', function() {
        it('Should return true if,  the life points of all bees are ugual at 0', function() {
            var $scope = {};
            var controller = $controller('beeGameController', { $scope: $scope });


            while($scope.queen>0){
                $scope.beeHit('queen');
            };

            expect($scope.beeWorker_1).toEqual(0);
            expect($scope.beeWorker_2).toEqual(0);
            expect($scope.beeWorker_3).toEqual(0);
            expect($scope.beeWorker_4).toEqual(0);
            expect($scope.beeWorker_5).toEqual(0);
            expect($scope.beeDrone_1).toEqual(0);
            expect($scope.beeDrone_2).toEqual(0);
            expect($scope.beeDrone_3).toEqual(0);
            expect($scope.beeDrone_4).toEqual(0);
            expect($scope.beeDrone_5).toEqual(0);
            expect($scope.beeDrone_6).toEqual(0);
            expect($scope.beeDrone_7).toEqual(0);
            expect($scope.beeDrone_8).toEqual(0);
        });
    });



});