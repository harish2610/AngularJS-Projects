//declare main module and its dependencies

//declare config block for main module to provide route configurations
//declare main module and its dependencies

var bookApp = angular.module('bookApp', [
    'Controllers','ngRoute'
]);
console.log("Gollu12")
bookApp.config(['$routeProvider',
    function($routeProvider) {
        console.log("Gollu13")
        $routeProvider.
        when('/main', {
            templateUrl: 'Login',
            controller: 'LoginCtrl'
        }).
        when('/home/student', {
            templateUrl: 'ViewBooks_Student.html',
            controller: 'BookListCtrl_Student'
        });
        when('/home/librarian', {
            templateUrl: 'ViewBooks_Librarian.html',
            controller: 'BookListCtrl_Librarian'
        });
        when('/issue/:bookId', {
            templateUrl: 'IssueBook.html',
            controller: 'IssueBookCtrl'
        });
        when('/return/:bookId', {
            templateUrl: 'ReturnBook.html',
            controller: 'ReturnBookCtrl'
        });
        otherwise({
            redirectTo: '/main'
        });
    }]);

/*
 * Route1: "/main"
 *      Display Login template. Use the same LoginCtrl here.
 * 
 * Route2: "/home/student"
 *      Display the partial page ViewBooks_Student.html present in the partials folder. 
 *      Use the same BookListCtrl_Student here.
 *      
 * Route3: "/home/librarian"
 *      Display the partial page ViewBooks_Librarian.html present in the partials folder. 
 *      Use the same BookListCtrl_Librarian here.
 *      
 *      
 * Route4: "/issue/:bookId"
 *      Display the partial page IssueBook.html present in the partials folder. 
 *      Use the IssueBookCtrl here.   
 *      
 *  Route5: "/return/:bookId"
 *      Display the partial page ReturnBook.html present in the partials folder. 
 *      Use the ReturnBookCtrl here. 
 *                        
 * Default Route: "/main"
 */