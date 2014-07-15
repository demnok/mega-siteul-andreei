function getClicks(){
		var counter = 0;
		return function(){
			console.error(++counter);
		}
	}

function addTab(){

}

$(document).ready(function(){

	
	//Implementare Click Count API

	var spans = $('span');


	for(var i=0; i < spans.length; i++)
	{
		// spans[i].css("background-color", "red");
		// alert(spans[i]);
		var click = getClicks();
		$(spans[i]).on("click", click);
	}

	// Implementare stiva

	function stiva(){
		var arr = [];

		return {

			isEmpty: function(){

				if(arr.length == 0)
					return true;
				return false;

			},

			push: function(element){

				arr.push(element);

			},

			pop: function(){
				if(!this.isEmpty()) {
					var result = arr[arr.length - 1];
					return arr.pop();
				} else console.log("empty");+3


			},

			top: function(){
				if(this.isEmpty())
					console.log("Array is empty");
				else	
					return arr[arr.length-1];
			}

		}



	}

	var mystack = stiva();

		mystack.push(5);
		mystack.push(6);
		mystack.pop();
		mystack.push(8);
		console.log(mystack.top());
		mystack.pop();
		mystack.pop();
		mystack.top();
		if(mystack.isEmpty())
			console.log("empty");


		//tabs


		// function alert(){

		// 	alert("hello");

		// }

		// function deleteTab(){

		// 	var parent = $(this).parent();

		// 	var id = parent.attr('id');

		// 	alert(id);

		// }

		// function addTab(){

		// 	var title = prompt("Please enter a title for your tab", " ");

		// 	var content = prompt("Please enter your content", " "); 

		// 	var button = "<div class='btn btn-danger'> Delete this tab</div><div class='clear'></div>";

		// 	$("#plus_li").before("<li><a href=#" + title + " role='tab' data-toggle='tab'>" + title + "</a></li>");

		// 	$("#tabContentGhostID").before("<div class='tab-pane' id=" + title + ">" + button + content + "</div>");

		// }

		

		// // $("#plus").on("click", addTab);


		$(".nav-tabs").on("click", "a", function(e){
		      e.preventDefault();
		      $(this).tab('show');
		    })
		    .on("click", "span", function () {
		        var anchor = $(this).siblings('a');
		        $(anchor.attr('href')).remove();
		        $(this).parent().remove();
		        $(".nav-tabs li").children('a').first().click();
		    });

		    $('#plus').click(function(e) {
		        e.preventDefault();

		        var title = prompt("Please enter a title for your tab", " ");

				var content = prompt("Please enter your content", " "); 

		        var id = $(".nav-tabs").children().length; 
		        
		        $(this).closest('li').before("<li><a href='#"+title+"'>" + title + "</a><span>x</span></li>");         
		        
		        $('.tab-content').append('<div class="tab-pane" id="'+title+'"> '+ content +'</div>');
		});


});