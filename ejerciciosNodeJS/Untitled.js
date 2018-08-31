function changeNewCode(){
  var tergetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("replace_codes");
  var paramsData = tergetSheet.getDataRange().getValues();
  for (var j = 1; j < paramsData.length; j++) {
    var oldCode = paramsData[j][0];
    var newCode = paramsData[j][1];
    if(newCode.includes(",")){
     var arrayCode = newCode.split(",");
      Logger.log(arrayCode);
     var arrayOldCode = oldCode.split(",");
      Logger.log("hola %S",arrayOldCode);
     for (var i = 0; i < arrayCode.length; i++){
       var current = arrayOldCode[i];
       if( current && current.includes("DDY")){
        arrayCode[i] += "_DDY";
       } else if(current && current.includes("MDY")) {
        arrayCode[i] += "_MDY";
       }
     }
       newCode = arrayCode.join(",");
     }
     tergetSheet.getRange(j+1,2).setValue(newCode);
  }
}
