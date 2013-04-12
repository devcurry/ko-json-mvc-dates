/// <reference path="../../JsonDates.40/Scripts/_references.js" />
var viewModel = {
    id: ko.observable(0),
    currentDate: ko.observable("")
}

$(document).ready(function ()
{
    ko.applyBindings(viewModel);
    $("#theData").datepicker();

    $(document).delegate("#getDate", "click", function ()
    {
        $.ajax({
            url: "/Home/GetData",
            type: "GET",
            contentType: "text/json",
            success: function (data)
            {
                viewModel.id(data.Id);
                viewModel.currentDate(data.CurrentDate);
            }
        });

    });

    $(document).delegate("#setDate", "click", function ()
    {
        var js = ko.mapping.toJS(viewModel);
        var json = {
            Id: js.id,
            CurrentDate: js.currentDate
        }
        $.ajax({
            url: "/Home/SetData",
            type: "POST",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(json),
            success: function (data)
            {
                viewModel.id(data.Id);
                viewModel.currentDate(data.CurrentDate);
            }
        });

    });

});