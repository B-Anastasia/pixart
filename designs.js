
//TODO: Menu toggle
$("#menu-toggle").click(function(event) {
		$("#sidebar-wrapper").toggleClass('d-none');
	});

var titleOfProject;
var inputTitle;
var newTitleOfProject;
var buttonTitle;
var inputHeight;
var inputWidth;
var valueHeight;
var valueWidth;
var buttonGrid;
var descriptionCenter;
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
buttonGrid=$('#createGrid');
descriptionCenter=$('#page-content-wrapper .col p');
buttonColor=$('#colorPicker');
valueColor='#000000';    /*buttonColor.val();*/
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



//TODO: change title of project
buttonTitle.click(function() {
	var pattern=/^[\s]+$/;
	if (pattern.test(inputTitle.val())) {
		titleOfProject = titleOfProject.text("Lab: Pixel Art Maker");
	}
	else if (inputTitle.val()) {
		newTitleOfProject = inputTitle.val();
		newTitleOfProject = titleOfProject.text(newTitleOfProject);
	} else {titleOfProject = titleOfProject.text("Lab: Pixel Art Maker");}
});

//TODO: To check input value of width and height grid for different screens
var mq1=window.matchMedia("(max-width: 319.98px)");
var mq2=window.matchMedia("(max-width: 479.98px)");
var mq3=window.matchMedia("(max-width: 575.98px)");
var mq4=window.matchMedia("(max-width: 767.98px)");
var mq5=window.matchMedia("(max-width: 1199.98px)");


if (mq1.matches) {
	function isright(obj){
	if (obj.value>6) {
		obj.value=6;
	} else if (obj.value<1) {
		obj.value='';
	}
}
} else if (mq2.matches) {
	function isright(obj){
	if (obj.value>8) {
		obj.value=8;
	} else if (obj.value<1) {
		obj.value='';
	}
}
} else if (mq3.matches) {
	function isright(obj){
	if (obj.value>13) {
		obj.value=13;
	} else if (obj.value<1) {
		obj.value='';
	}
}
} else if (mq4.matches) {
	function isright(obj){
	if (obj.value>18) {
		obj.value=18;
	} else if (obj.value<1) {
		obj.value='';
	}
}
} else if (mq5.matches) {
	function isright(obj){
	if (obj.value>26) {
		obj.value=26;
	} else if (obj.value<1) {
		obj.value='';
	}
}
}

function isright(obj){
	if (obj.value>50) {
		obj.value=50;
	} else if (obj.value<1) {
		obj.value='';
	}
}

//TODO: To get new value height of grid that user inserts
inputHeight.change(function () {
    valueHeight=inputHeight.val();
});

//TODO: To get new value width of grid that user inserts
inputWidth.change(function () {
    valueWidth=inputWidth.val();
});

// TODO: To hide central description one time
buttonGrid.one('click', function(event) {
	descriptionCenter.toggle();
});


//TODO: Create table
buttonGrid.click( function () {
	makeGrid(valueHeight,valueWidth);
    return false;
});

// *
//  * @description Make a grid
//  * @param {number} value height and width
//  * @return{object} Content of grid
 
function makeGrid(rows,cols ) {
    $('tbody').empty();
    for(var i=0;i<rows;i++){
        var row1=document.createElement('TR');
        bodyTable.appendChild(row1);
        for(var j=0;j<cols;j++){
            var cells=document.createElement('TD');
            row1.appendChild(cells);
        }
    }
 }

//TODO: color that user choose
buttonColor.change( function () {
    valueColor=$(this).val();
});

//TODO: to set target click 'TD' and change background color
// table.onclick = function (event) {
//     event = event || window.event;
//     var target = event.target || event.srcElement;
//     if (target.tagName == 'TD') {target.style.backgroundColor = valueColor;}
// };
// 
// VAR 2
// table.onclick = function (event) {
//     event = event || window.event;
//     var target = event.target || event.srcElement;
//   	if ((target.getAttribute('style')==null) && (target.tagName == 'TD')) {
//       target.style.backgroundColor = valueColor;
//   	} else if (target.tagName == 'TD'){
//     target.removeAttribute('style');
//   	}
// };
// VAR 3
table.onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement;
  	if (target.tagName == 'TD') {
      
      target.style.backgroundColor? target.style.removeProperty('background-color') : target.style.backgroundColor=valueColor;
    } 
};

//TODO: to set one color to all cells
buttonOneColor.click(function () {
    $('TD').css('background-color',valueColor);
});


//TODO: to clear all cells
buttonClearCells.click(function () {
    $('td').css('background-color','');
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
    open("http://www.facebook.com/sharer.php?u=https://b-anastasia.github.io/pixart/","displayWindow","width=520,height=300,left=350,top=170,status=no,toolbar=no,menubar=no");
});

//TODO: to change the border color
buttonBorderColor.click(function () {
    $('tr td').css('border-color',valueColor);
});