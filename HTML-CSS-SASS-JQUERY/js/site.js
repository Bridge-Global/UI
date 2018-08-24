$(window).load(function(){
	setTimeout(function(){
		$("body").addClass("ready");
	},0);


	$(".form-block-control").click(function(){
		$("body").toggleClass("menuClicked");
		
	});
	
	$(".search-box .search-input").keypress(function(){
		$("body").addClass("search-start");

		setTimeout(function(){

			var thisVal = $(".search-box .search-input").val();
			
			if(thisVal=="" || thisVal=="undefined"){
				$(".keyword-suggestions").css({"display":"none"});
			}
			else{
				$(".keyword-suggestions").css({"display":"block"});
			}

		},10);
		
		
	});

	$(".logo").click(function(){
		$("body").toggleClass("search-start");
	});

  // $('.search-box .search-input').autocomplete({
  //   data: {
  //     "Apple": null,
  //     "ab": null,
  //     "abc": null,
  //     "abcd": null,
  //     "abcdefg": null,
  //     "Microsoft": null,
  //     "carpenter": null,
  //     "Google": 'http://placehold.it/250x250'
  //   }
  // });
       
});