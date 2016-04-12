$(document).ready(function () {
	//to check if the element and index are in order
	function isOutOfOrder(element, index) {
		var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		var elementId = $(element).attr('id');
		var SortedElementId = 'draggable' + sortedArray[index];
		return (elementId !== SortedElementId);
	}
    function handleSortableStop(event, ui) {
		var result = $.grep($(".draggable"), isOutOfOrder);
		//console.log($(".draggable"));
		if (result === null || result.length === 0) {
			$("#result").text('Done!');
		} else {
			$("#result").text(result.length + ' more bricks');
		}
	}

	//to shuffle the array
	function shuffleArray(arr) {
        var arrayLength = arr.length;
        while (arrayLength--) {
            var i = Math.floor(arrayLength * Math.random());
            var swapTemp = arr[i];
            arr[i] = arr[arrayLength];
            arr[arrayLength] = swapTemp;
        }
        return arr;
	}
	function renderContent() {
		var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		var shuffledArray = shuffleArray(sortedArray);
		var sectionContent = '';
		$.each(shuffledArray, function (index, position) {
			sectionContent += '<div id="draggable' + position + '" class="draggable  green "><p>' + position + '</p></div>';
		});
		$('#sectionId').html(sectionContent);
		$("#result").text('');
	}
	$('#randmizeButton').click(renderContent);
	$(function () {
		$("#sectionId").sortable({
			revert: true,
			cursor: "move",
			//containment:"parent",
			stop: handleSortableStop
		});
	});
	
	//call renderContent to get the page loaded for the first time
	renderContent();
});
