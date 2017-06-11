var app = angular.module("shopApp", ['ngRoute'])
app.controller('MainController', function(){

})
app.component("homepageComponent", {
    templateUrl: "app/homepage.html"
})
app.component("womenComponent", {
    templateUrl: "app/women.component.html", 
    controller: function(){
        
    }
}).component("menComponent", {
    templateUrl: "app/men.component.html",
    controller: function(){
        
    }
}).component("accessoriesComponent", {
    templateUrl: "app/accessories.component.html",
    controller: function(){
        
    }
}).component("navComponent", {
    templateUrl: "app/nav.component.html", 
    controller: function(){
        this.makeActive = function(category){
           this.selected = category;
        }
        this.isActive = function(category){
            return this.selected == category;
        }
        //this.selected = "1"
    },
    controllerAs: "navCtrl"
}).component("carouselComponent", {
    templateUrl: "app/carousel.component.html"
}).component("sampleComponent", {
    templateUrl: "app/sample.component.html"
}).component("newArrivalsComponent", {
    templateUrl: "app/new-arrivals.component.html"
}).component("allArrivalsComponent", {
    templateUrl: "app/all-arrivals.component.html"
})
