/**
 * Created by Kevin on 7/31/14.
 */
var carouselApp = angular.module('carouselApp', ['ui.bootstrap']);
carouselApp.controller('homeCarousel',function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
        {image: 'img/ace.jpg', name: 'ace'},
        {image: 'img/tutor.jpg', name: 'tutor'},
        {image: 'img/blackboard.jpg', name: 'blackboard'},
        {image: 'img/homework.jpg', name: 'homework'},
        {image: 'img/course.jpg', name:'course'},
        {image: 'img/books.png', name: 'books'},
        {image: 'img/kids.jpg', name: 'kids'}];
});