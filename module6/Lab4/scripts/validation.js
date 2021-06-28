
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
} 

function validateName(nm) {
    var a = document.getElementById(nm).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    //var filter = /^[a-zA-Z]+[-. ]?$/;
    var filter = /^[a-zA-Z\-\s]+$/i;//include spaces
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
} 

function validateCard(card){
    var a = document.getElementById(card).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}




// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    var sDoc = $("#selectVet").children("option:selected").val();
    if(sDoc == "Master Oogway"){
        if(date.getDay() == 1 || date.getDay() == 0 || date.getDay() == 5)
        return [false];
    }else if(sDoc == "Doctor Octopus"){
        if (date.getDay() === 0 || date.getDay() === 2 || date.getDay() === 6)
        return [false];
    }else if(sDoc == "Sakura Haruno"){
            if (date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 6)
            return [false];

    }else{
        if (date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 6)
        return [true];
    }
    // Sunday is Day 0, disable all Sundays
    
    
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Please enter a  North American phone number with the format XXX-XXX-XXXX");
            $("#phone").val("");
            $("#phone").addClass("error");
            $("#submitbtn").prop('disabled',true);
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#inputName").on("change", function(){//validate name
        //check name contains no symbols or numbers
        if(!validateName("inputName")){
            alert("Only Alphabet Allowed");
            $("#inputName").val("");
            $("#inputName").addClass("error");
            $("#submitbtn").prop('disabled',true);
        }else {
            $("#inputName").removeClass("error");
        }
    });

    $("#debit").on("change", function(){//validate credit card
        if (!validateCard("debit")){
            alert("Please enter a credit card with the format XXXX-XXXX-XXXX-XXXX");
            $("#debit").val("");
            $("#debit").addClass("error");
            $("#submitbtn").prop('disabled',true);
        }
        else {
            $("#debit").removeClass("error");
        }
    });

    $("#submitbtn").click(function(){//when the confirm appointment button is pressed
        var date = $("#dateInput").datepicker('getDate');
        var d = ("0" + date.getDate()).slice(-2);
        var m = ("0" + (date.getMonth() + 1)).slice(-2);
        var y = date.getFullYear();

        var time = $("#timeInput").val();

    
        var sService = $("#selectService").children("option:selected").val();
        var sDoc = $("#selectVet").children("option:selected").val();

        var nm = $("#inputName").val();
        var em = $("#inputEmail").val();
        var p = $("#phone").val();
        var cc = $("#debit").val();

       
        document.getElementById("infoFill").innerHTML = "Name: " + nm + "<br>Email: " + em +
                                                    "<br>Phone Number: " + p + "<br>Credit Card: " + cc +
                                                    "<br>Date: " + m + "/" + d + "/" + y   + "<br>"+
                                                    "Time (24hr): " + time  + "<br>"+     
                                                    "Service: " + sService + "<br>"+
                                                    "Veterinarian: " + sDoc;
    })

    //make button work once filled
    $("#submitbtn").prop('disabled', true);

    $("#inputName, #inputEmail, #phone, #debit").keyup(function(){
        if($("#inputName").val() != '' && $("#inputEmail").val() != '' && $("#phone").val() != '' && $("#debit").val() != '' && $("#dateInput").datepicker("getDate") != null ){
            $("#submitbtn").prop('disabled',false);
        }else{
            $("#submitbtn").prop('disabled',true);
        }
    });

    $("#dateInput").change(function(){
        if($("#inputName").val() != '' && $("#inputEmail").val() != '' && $("#phone").val() != '' && $("#debit").val() != '' && $("#dateInput").datepicker("getDate") != null ){
            $("#submitbtn").prop('disabled',false);
        }else{
            $("#submitbtn").prop('disabled',true);
        }
    });










    // https://webkul.com/blog/jquery-datepicker/
    //  https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker({
            
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates

            
        }
    );


   
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });


    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});
