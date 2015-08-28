app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = "Gaza War 2014"; 
  //$scope.promo = 'Promo';
  $scope.photos = [
    { 
      name: '#1', 
      price: 20, 
      date_taken: new Date('2014', '03', '08'), 
      url: 'img/gaza/1.jpg',
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: '#2', 
      price: 10, 
      date_taken: new Date('2013', '08', '01'), 
      url: 'img/gaza/2.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: '#3',
      price: 200,
      date_taken: new Date('1998', '01', '16'),
      url: 'img/gaza/3.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: '#4',
      price: 70,
      date_taken: new Date('1963', '11', '23'), 
      url: 'img/gaza/4.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: '#5',
      price: 100;
      date_taken: new Date('1980', '10', '7'),
      url: 'img/gaza/5.jpg',
      likes: 0,
      dislikes: 0
    }
    ];
  $scope.plusOne = function(index) {
    $scope.photos[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.photos[index].dislikes +=1;
  };
}]);