/**
 * Created by Kevin on 10/8/2014.
 */
var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('imageLoader', function($scope){
    $scope.missionImgs = ['style/img/mission1.png',
                        'style/img/mission2.png',
                        'style/img/mission3.png',
                        'style/img/mission4.png'];
});

app.controller('footerCtrl', function($scope){
    $scope.footerNavs = ['Home', 'About Us', 'Our Services', 'Physician Resources', 'Patient Resources', 'Why SOHO?', 'Contact Us'];
});

app.controller('homeCarousel',function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
        {image: '../Front-end/style/img/slide1.jpg', name: 'Soho Vascular'},
        {image: '../Front-end/style/img/slide2.jpg', name: 'Soho Vascular'},
        {image: '../Front-end/style/img/slide3.jpg', name: 'Soho Vascular'},
        {image: '../Front-end/style/img/slide4.jpg', name: 'Soho Vascular'},
        {image: '../Front-end/style/img/slide5.jpg', name: 'Soho Vascular'},
        {image: '../Front-end/style/img/slide6.jpg', name: 'Soho Vascular'},
        {image: '../Front-end/style/img/slide7.jpg', name: 'Soho Vascular'},];
});

app.directive("scroll", function($window){
    return function(scope, element, attrs){
        angular.element($window).bind("scroll", function(){
            scope.isChange = false;
            if(this.pageYOffset >= 100)
                scope.isChange = true;
            scope.$apply();
        })
    }
})