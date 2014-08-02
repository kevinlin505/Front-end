/**
 * Created by Kevin on 7/31/14.
 */
var carouselApp = angular.module('carouselApp', ['ui.bootstrap']);
carouselApp.controller('homeCarousel',function($scope) {
    $scope.myInterval = 10000;
    var slides = $scope.slides = [{image: 'img/travel.jpg', name:'travel'},
        {image: 'img/airport.jpg', name: 'airport'},
        {image: 'img/balloons.jpg', name: 'balloons'},
        {image: 'img/guides.jpg', name: 'guides'},
        {image: 'img/planes.jpg', name: 'planes'},
        {image: 'img/sites.jpg', name: 'sites'},
        {image: 'img/memories.jpg', name: 'memories'}];
});