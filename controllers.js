//declare controller module

/*
 * declare LoginCtrl 
 * Code description for LoginCtrl:
 Method1:
 validate(user): 
 a. Need to validate entered username and password and alert appropriate messages
 b. cross verify against the roles.json inside roles.json file
 and associate the username to rootScope, if valid
 c. if username is set to rootScope , then display success message. 
 otherwise display error message.

 [ Hint: Use angular.forEach for iterations]
 */

var Controllers = angular.module('Controllers', ['ngRoute']);
Controllers.controller('LoginCtrl', ['$scope','$location', '$http', '$rootScope',
    function ($scope,$location, $http, $rootScope) {
        alert("I am in LoginCtrl")
        $scope.validate=function()
        {
            alert("I am in validate function")
            $http.get('data/roles.json').success(function(data) {
                $scope.roles = data;
            });
            var count=0;
            angular.forEach($scope.roles, function(role) {
                if($scope.username==role.username && $scope.password==role.password) {
                    alert("login successful");
                    count=count+1;
                    if($scope.roles=="student") {
                        $location.path("/home/student");
                    }
                    else {
                        $location.path("/home/librarian");
                    }
                }

                else if(count!=1)
                {
                    alert("Please provide valid login credentials");
                    $location.path( "/main" )
                }

            });


        }

    }]);

Controllers.controller('BookListCtrl_Student', ['$scope','$http','BookData','$rootScope',
    function ($scope, $http) {
        $http.get('data/books.json').success(function(data) {
           // $rootScope.books.json = BookData.getData();
            $scope.books = data;
        });
        //$scope.bookLists = ['All Books', 'Available Books'];
    }]);

/*
 * rename BookListCtrl  to BookListCtrl_Student
 * Code description for BookListCtrl_Student:
 Retrieve book details from books.json  and store this in a books.json model
 */

Controllers.controller('BookListCtrl_Librarian', ['$scope','$http','$rootScope','BookData',
    function ($scope, $http , $rootScope , BookData) {
        $http.get('data/books.json').success(function(data) {
        console.log("Gollu1"+$rootScope.books)
        if($rootScope.books=='undefined'){
            $rootScope.books = BookData.getData();
        }
            $scope.books = data;
        });

        $scope.options = ['bookId', 'cost'];
        //$scope.query = 'Search';

        $scope.issued=[];

        $scope.visibility=function(index) {
            if($scope.issued[index]==false){
                $scope.issued[index]=true;
                return $scope.issued[index];
            }
            else{
                $scope.issued[index]=false;
                return $scope.issued[index];
            }

        }

        $scope.mySortFunction = function(book) {
            //if(isNaN(book[$scope.sort]))
            //  return book[$scope.sort];
            //return parseInt(book[$scope.sort]);
        }

        $scope.issue = function(bookId) {
            $location.path('/issue/bookId');
        }

        $scope.return = function(bookId) {
            $location.path('/return/bookId');
        }
    }]);

/*
 * declare LoginCtrl 
 * Code description for LoginCtrl:
        Method1:
            validate(user): 
            a. Need to validate entered username and password and alert appropriate messages
            b. cross verify against the roles.json inside roles.json file
             and associate the username to rootScope, if valid
            c. if username is set to rootScope , then display success message. 
                otherwise display error message.
                
            [ Hint: Use angular.forEach for iterations]

            Redirect user to "/home/student" if role is student.
            Redirect user to "/home/librarian" if role is librarian.
            Redirect user to default route if invalid login data is given.

            
 */

/*
 * rename BookListCtrl  to BookListCtrl_Student
 * Code description for BookListCtrl_Student:
        To Retrieve book details from books.json , invoke the custom service.

        Method1: changeView:
            Define the changeView function which will invoke the custom service
        to set the books.json model in the rootScope.
 */


/*
 * declare BookListCtrl_Librarian
 * Code description for BookListCtrl_Librarian:
        Modify as below:
        1. if books.json inside rootScope is undefined, then invoke custom service to 
        set the books.json model in the rootScope.
        2. declare a method 'issue' which will accept a bookId.
            update the url to '/issue/<bookId>'
        3. declare a method 'return' which will accept a bookId.
            update the url to '/return/<bookId>'
 */

/*
 * declare IssueBookCtrl
 * Code description for IssueBookCtrl:
        
        1. retrieve the bookId from the routeParameter
        2. retrieve the corresponding book information from the books.json json array 
        and store in a book model inside current scope.
        3. declare a method 'issue' which will accept a bookId.
                a. inside this method, retrieve the corresponding book and update the issued to true for the book.
                b. redirect the user to '/home/librarian'.
 */

/*
 * declare ReturnBookCtrl
 * Code description for ReturnBookCtrl:
        
        1. retrieve the bookId from the routeParameter
        2. retrieve the corresponding book information from the books.json json array 
        and store in a book model inside current scope.
        3. declare a method 'return' which will accept a bookId.
                a. inside this method, retrieve the corresponding book and update the issued to false for the book.
                b. redirect the user to '/home/librarian'.
 */

 
