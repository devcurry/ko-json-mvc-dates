/// <reference path="_references.js" />

var viewModelApi = {
    idApi: ko.observable(0),
    currentDateApi: ko.observable("")
}


$(document).ready(function ()
{
    ko.applyBindings(viewModelApi);
    $("#theDataApi").datepicker();

    $(document).delegate("#getDateApi", "click", function ()
    {
        $.ajax({
            url: "/api/Values",
            type: "GET",
            contentType: "text/json",
            success: function (data)
            {
                viewModelApi.idApi(data.Id);
                viewModelApi.currentDateApi(data.CurrentDate);
            }
        });

    });
    
    $(document).delegate("#setDateApi", "click", function ()
    {
        var js = ko.mapping.toJS(viewModelApi);
        var json = {
            Id: js.idApi,
            CurrentDate: js.currentDateApi
        }
        $.ajax({
            url: "/api/Values",
            type: "PUT",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(json),
            success: function (data)
            {
            }
        });

    });
});