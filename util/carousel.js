/**
 * Created by Kevin on 7/31/14.
 */
var carouselApp = angular.module('carouselApp', ['ui.bootstrap'])

carouselApp.controller('homeCarousel',function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
        {image: '../style/img/slide1.jpg', name: 'Soho Vascular'},
        {image: '../style/img/slide2.jpg', name: 'Soho Vascular'},
        {image: '../style/img/slide3.jpg', name: 'Soho Vascular'},
        {image: '../style/img/slide4.jpg', name: 'Soho Vascular'},
        {image: '../style/img/slide5.jpg', name: 'Soho Vascular'},
        {image: '../style/img/slide6.jpg', name: 'Soho Vascular'},
        {image: '../style/img/slide7.jpg', name: 'Soho Vascular'},];
});