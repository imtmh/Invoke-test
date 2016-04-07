         $(document).ready(function(){
		 	 $(function() {
			    $( "#snaptarget" ).sortable({
					revert: true,
					cursor: "move",
					containment:"parent",
					stop: function (){
						var result = true;
						var position = [1,2,3,4,5,6,7,8,9];
						$.each($('div'), function(index, element){
							var temp=$(element).attr('id');
							var temp2='draggable'+position[index]+'';
							if(temp != temp2){
								result = false;
								return false;
							};
						});
						if(result){
							$("#result").text('Done!');
							$("#result").css("color", "blue");
						} else {
							$("#result").text('');
							$("#result").css("color", "red");
						}
					}
				});
			});
         
        Array.prototype.shuffle = function () {
                       var n = this.length;
                       while (n--) {
                               var i = Math.floor(n * Math.random());
                               var tmp = this[i];
                               this[i] = this[n];
                               this[n] = tmp;
                       }
                       return this;
           };
           
			 $('#randmizeButton').click(function(){
				 var sortedArray = [1,2,3,4,5,6,7,8,9];
				 sortedArray.shuffle();
				 var html = '';//'<section id="snaptarget" >';
				 $.each(sortedArray, function(index, position){
					html+= '<div id="draggable'+position+'" class="draggable ui-widget-content"><p>'+position+'</p></div>';
				 });
					$('#snaptarget').html(html);
			 });
			 $('button').trigger('click');
         });
