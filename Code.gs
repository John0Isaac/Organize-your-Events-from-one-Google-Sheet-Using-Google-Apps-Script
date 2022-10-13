function createCalendarEvent() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var values = sheet.getDataRange().getValues();
  var headers = values[0];

  // Get Index of Data
  var titleIndex = headers.indexOf("Title");
  var startTimeIndex = headers.indexOf("Start Time");
  var endTimeIndex = headers.indexOf("End Time");
  var descriptionIndex = headers.indexOf("Description");
  var locationIndex = headers.indexOf("Location");
  var guestsGmailIndex = headers.indexOf("Guests Gmail");

  var sendInvites = true;

  for (var i = 1; i < (values.length); i++) {
    // Get Each Row
    var rowData = values[i];

    // Get value from Each Row
    var title = rowData[titleIndex];
    var startTime = rowData[startTimeIndex];
    var endTime = rowData[endTimeIndex];
    var description = rowData[descriptionIndex];
    var location = rowData[locationIndex];
    var guestsGmail = rowData[guestsGmailIndex];
    
    var calendar = CalendarApp.getCalendarById("primary").createEvent(title, startTime, endTime, {description: description, location: location, guests: guestsGmail, sendInvites: sendInvites});

  }
  
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Manage Events")
  .addItem("Create New Events", "createCalendarEvent")
  .addToUi();
}
