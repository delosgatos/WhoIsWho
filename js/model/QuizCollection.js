/**
 * @project NationQuiz
 * @author delosgatos(a)gmail.com
 * @date: 07.06.13 23:37
 */

define([
    'backbone'
],function(
    Backbone
){
    var QuizCollection = Backbone.Collection.extend({

       initialize: function(params){

       },

        sync: function(method, model, options) {
            /*
            if (method === "read") {
                app.adapters.employee.findById(parseInt(this.id)).done(function (data) {
                    options.success(data);
                });
            }
            */
        }

    });
    return QuizCollection

});