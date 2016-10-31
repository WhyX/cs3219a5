function randomColorGenerator() {
	var hue = Math.floor(Math.random() * 30) * 12;

  return $.Color({
    hue: hue,
    saturation: 0.9,
    lightness: 0.6,
    alpha: 1
  }).toHexString();
}

function createCommitHistoryTable(data) {
  console.log(data);

  var keys = Object.keys(data), dataLen = keys.length;
  document.body.innerHTML += '<table id="commitHistoryTable">'.concat('</table>');
  var table = document.getElementById("commitHistoryTable");
  var rowIndex = 0;

  for (var i = dataLen - 1; i >= 0; i --) {
    var date = keys[i];
    var commits = data[date];
    var headerRow = table.insertRow(rowIndex);
    var headerCell = headerRow.insertCell(0);
    var randomColor = randomColorGenerator();

    headerCell.innerHTML = "<div class='dateCell' style='background:".concat(randomColor).concat("'><span>").concat(date).concat("</span></div>");
    rowIndex++;

    for(var j = 0; j < commits.length; j++) {
      var time = commits[j].time;
      var message = commits[j].message;
      var row = table.insertRow(rowIndex);
      var dataCell = row.insertCell(0);

      dataCell.innerHTML = "<div class='timelineCell' style='background:".concat(randomColor).concat("'></div><div class='timeCell'><span>").concat(time).concat("</span></div><div class='messageCell'><span>").concat(message).concat("</span></div>");
      rowIndex++;
    }
  }
}