var titleOfProject;
var inputTitle;
var newTitleOfProject;
var buttonTitle;
var inputHeight;
var inputWidth;
var valueHeight;
var valueWidth;
var buttonGrid;
var buttonColor;
var valueColor;
var properties;
var buttonBorderColor;
var buttonOneColor;
var buttonClearCells;
var buttonColorTitle;
var buttonSaveProject;
var buttonRestart;
var buttonShare;
var table;
var bodyTable;


titleOfProject=$('h1');
inputTitle=$('#userTitle');
buttonTitle=$('#saveTitle');
inputHeight=$('#input_height');
inputWidth=$('#input_width');
valueHeight=inputHeight.val();
valueWidth=inputWidth.val();
buttonGrid=$('form input[type="submit"]');
buttonColor=$('#colorPicker');
valueColor=buttonColor.val();
properties=$('#moreProperties');
buttonBorderColor=$('#colorBorder');
buttonOneColor=$('#colorCells');
buttonClearCells=$('#clearCells');
buttonColorTitle=$('#colorTitle');
buttonSaveProject=$('#saveProject');
buttonRestart=$('#resetProject');
buttonShare=$('#shareToFriends');
table=document.getElementById('pixel_canvas');
bodyTable=document.createElement('tbody');
table.appendChild(bodyTable);


//TODO: To get new value height of grid that user inserts
inputHeight.change(function () {
    valueHeight=inputHeight.val();
});

//TODO: To get new value width of grid that user inserts
inputWidth.change(function () {
    valueWidth=inputWidth.val();
});


//TODO: Create table
buttonGrid.click( function () {
    makeGrid(valueHeight,valueWidth);
    return false;
});

/**
 * @description Make a grid
 * @param {number} value height and width
 * @return{object} Content of grid
 */
function makeGrid(rows,col ) {
    $('tbody').empty();
    for(var i=0;i<rows;i++){
        var row=document.createElement('TR');
        bodyTable.appendChild(row);
        for(var j=0;j<col;j++){
            var cells=document.createElement('TD');
            row.appendChild(cells);
        }
    }
 }

//TODO: color that user choose
    buttonColor.change( function () {
        valueColor=$(this).val();
});


//TODO: to set target click 'TD' and change background color
table.onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
    if (target.tagName == 'TD') {target.style.backgroundColor = valueColor;}
};

//TODO: to set one color to all cells
buttonOneColor.click(function () {
    $('td').css('background-color',valueColor);
});

//TODO: to clear all cells
buttonClearCells.click(function () {
    $('td').css('background-color','');
});


//TODO: change title of project
buttonTitle.click(function () {
    if (inputTitle.val()===""){
        titleOfProject=titleOfProject.text("Lab: Pixel Art Maker");
    } else {
        newTitleOfProject = inputTitle.val();
        titleOfProject = titleOfProject.text(newTitleOfProject);
    }
});

//TODO: change color of title
buttonColorTitle.click(function () {
    titleOfProject.css('color',valueColor);
});

//TODO: restart project
buttonRestart.click(function () {
    location.reload();
});

//TODO: share with the friends
buttonShare.click( function openWin2() {
    open("http://www.facebook.com/sharer.php?u=http://pixmaker.ga/","displayWindow","width=520,height=300,left=350,top=170,status=no,toolbar=no,menubar=no");
});

//TODO: to change the border color
buttonBorderColor.click(function () {
    $('tr td').css('border-color',valueColor);
});

