define([
    'module'
],function(
    module
){
    var config = module.config();
    var settings = {
        config: config
        ,app:{
            music:{
                background: "/media/background.mp3"
                ,playOnStart: true
            }
            ,sounds:{
                noise: "/media/cafe.mp3"
            }
        }
        ,stage:{

        }
        ,container:{

        }
        ,pages: {

            main: [
                {
                    name:               "Start"
                    ,class:              "view/pages/StartPageView"
                }
                ,{
                    name:               "Restaurant"
                    ,class:              "view/pages/RestaurantPageView"
                }
                ,{
                    name:               "Gallery"
                    ,class:              "view/pages/GalleryPageView"
                }
                ,{
                    name:               "Contacts"
                    ,class:              "view/pages/ContactsPageView"
                }
            ]
            ,menu: [
                {
                    name:               "Menu"
                    ,class:              "view/pages/MenuPageView"
                }
            ]
            ,wine: [
                {
                    name:               "Wine"
                    ,class:              "view/pages/MenuPageView"
                }
            ]
            ,bar: [
                {
                    name:               "Bar"
                    ,class:              "view/pages/MenuPageView"
                }
            ]
        }
    }
    return settings;
});