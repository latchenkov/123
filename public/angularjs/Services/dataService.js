
adsManagementApp.factory('Data', function ($http, $q) {
    return {
        getLocationList: function(){
                            var deferred = $q.defer();
                                $http.get('home/location-list').
                                success(function(data) {
                                    deferred.resolve(data);
                                });
                            return deferred.promise;
                        },
        getCategoryList: function(){
                            var deferred = $q.defer();
                                $http.get('home/category-list').
                                success(function(data) {
                                    deferred.resolve(data);
                                });
                            return deferred.promise;
                        },
        getAllAdsFromDb: function(){
                            var deferred = $q.defer();
                                $http.get('home/all-ads').
                                success(function(data) {
                                    deferred.resolve(data);
                                });
                            return deferred.promise;
                        },
        saveAdFromDb: function(ad){
                            var deferred = $q.defer();
                                $http.post('ads/save', ad).
                                    success(function(data) {
                                        deferred.resolve(data);
                                    }).
                                    error(function(data, status) {
                                        data.status = status;
                                        deferred.reject(data);
                                    });    
                            return deferred.promise;
                        },
        removeAdFromDb: function(id){
                            var deferred = $q.defer();
                                $http({method:'GET', url:'ads/delete/' + id}).
                                    success(function(data) {
                                        deferred.resolve(data);
                                    }).
                                    error(function(data) {
                                        deferred.reject(data);
                                    });    
                            return deferred.promise;
                        }    
                        
   }; 
});

