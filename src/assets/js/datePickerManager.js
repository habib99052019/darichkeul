var inputs = []
var inputsGlobal = []


function datePickerManager({id,disabledDates,minDt,maxDt}){

    inputs.push({

        id:id,
        disabledDates:disabledDates,
        minDt:minDt,
        maxDt:maxDt

    })

}
function datePickerManagerGlobal({disabledDatesGlobal,minDt,maxDt}){
  inputsGlobal.push({
        disabledDatesGlobal:disabledDatesGlobal,
        minDt:minDt,
        maxDt:maxDt

    })

}
// function datePicker({id,disabledDates,minDt,maxDt}){
//     var dates = disabledDates
//     var today = new Date();
//     console.log('dates', dates)
//     $("#start-date").datepicker({
//         dateFormat:"dd-mm-yy",
//         defaultDate: today.setDate(today.getDate() + 1 ),
//         minDate: today,
//         beforeShowDay: function(date){
//            var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
//            return [ dates.indexOf(string) == -1 ]
//         },
//     })
//   // Set date range for end datepicker
//   $("#start-date").on("change", function() {
//     var startDate = $(this).datepicker("getDate");
//     $("#end-date").datepicker("option", "minDate", startDate);
//     $('#start-date').datepicker("option", "defaultDate", startDate);
//     localStorage.setItem('date_start_room', startDate)
//   });

//   // Set date range for start datepicker
//   $("#end-date").on("change", function() {
//     var endDate = $(this).datepicker("getDate");
//     $("#start-date").datepicker("option", "maxDate", endDate);
//     $('#start-date').datepicker("option", "defaultDate", endDate);
//     localStorage.setItem('date_end_room', endDate)
//   });

// }

function datePickerGlobal({disabledDatesGlobal}){
  var today = new Date();
  var tomorrow = new Date(today);
  console.log('disabledDatesGlobal', disabledDatesGlobal)
  tomorrow.setDate(tomorrow.getDate() + 1);
$('#checkin').datepicker({
  defaultDate: today.setDate(today.getDate() + 1 ),
  minDate: today,
  beforeShowDay: function(date) {
    var dateString = jQuery.datepicker.formatDate('yy-mm-dd', date);
    return [ disabledDatesGlobal.indexOf(dateString) == -1 ]
  }
});
$('#checkout').datepicker({
  minDate: tomorrow,
  beforeShowDay: function(date) {
    var dateString = jQuery.datepicker.formatDate('yy-mm-dd', date);
    return [ disabledDatesGlobal.indexOf(dateString) == -1 ]
  }
});
// Disable end date until start date is selected
$('#checkin').on('change', function() {
  var startDate = $(this).datepicker("getDate");
  var start = new Date(startDate)
  start.setDate(start.getDate()+1)
  $('#checkout').datepicker("option", "minDate", start);
  $('#checkin').datepicker("option", "defaultDate", start);
  localStorage.setItem('date_start_global', new Date(start).toISOString().split('T')[0])
  const inputDate = new Date(start).toISOString().split('T')[0]; // Change this to your desired input date

  const filteredDates = disabledDatesGlobal.filter(date => new Date(date) > new Date(inputDate));
  const firstFilteredDate = filteredDates.length > 0 ? filteredDates[0] : null;
  $('#checkout').datepicker('option', 'beforeShowDay', function(date) {
    var dateString = jQuery.datepicker.formatDate('yy-mm-dd', date);
    // return [ filteredDates.indexOf(dateString) == -1 ]
    if (firstFilteredDate && new Date(dateString) > new Date(firstFilteredDate).setDate(new Date(firstFilteredDate).getDate()-1)) {
      return [false];
    } else {
      return [true];
    }

  });
});

// Disable dates after selected start date
$('#checkout').on('change', function() {
  var endDate = new Date($('#checkout').val());
  var startDate = new Date($('#checkin').val());
  if (endDate <= startDate) {
    $('#checkout').val('');
  }
  $('#checkout').datepicker("option", "defaultDate", endDate);
  endDate.setDate(endDate.getDate() + 1)
  localStorage.setItem('date_end_global', endDate.toISOString().split('T')[0])
});

}
      inputsGlobal.forEach(input=>{
          datePickerGlobal(input)
      })

