// declare custom filter module

//add custom filter to filter data
/*
 * declare a custom filter 'filterunissued'.
 * the filter will accept the books.json and the viewbookoption selected by the user.
 * if the viewbookoption selected by the user is 'Available', then return a filtered 
 * array of books.json. the filtered array should have only those books.json which have not
 * been issued.
 * if the viewbookoption selected is not 'Available', then return the initial array itself.
 */
Controllers.filter('filterUnissued', function() {
    return function(books,viewbookoption) {
        var name_received=String(name);
        if(name_received.indexOf(" ")==-1)
        {
            return String(name);
        }
        else
        {
            return String(name).substring(0, name_received.indexOf(" "));
        }
    }
});