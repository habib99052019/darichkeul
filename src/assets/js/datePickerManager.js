var inputs = []


function datePickerManager({id,disabledDates,minDt,maxDt}){

    inputs.push({

        id:id,
        disabledDates:disabledDates,
        minDt:minDt,
        maxDt:maxDt

    })

}


function datePicker({id,disabledDates,minDt,maxDt}){
    var dates = disabledDates

    $("#"+id).datepicker({
        dateFormat:"dd-mm-yy",
        beforeShowDay: function(date){
           var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
           return [ dates.indexOf(string) == -1 ]
        },
        minDate : minDt,
        maxDate : maxDt,
        onSelect:(dt)=>{

            //document.getElementById(id).value = dt
            console.log(dt)
        }

    })

}


function getDateArrv(){
    return dateArrv
}

var dateArrv = ""

$(document).ready(()=>{
       
    inputs.forEach(input=>{
        datePicker(input)
    })

})