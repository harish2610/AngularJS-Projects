//declare custom service module

//define custom service BookData
/*declare a function getData inside which you need to
 * make an ajax call to books.json and store the result.data to books.json model
 * inside rootScope.
 * 
 */

Controllers.factory('BookData', ['$http','$rootScope', function(http){
    return {
        getData: function() {
            console.log('inside custom service');
            return http.get('data/books.json').then(function(result) {
                return result.data;
                }
            );
        }
    };
}
]);