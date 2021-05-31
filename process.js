//random work
		function generateRandomColor()
		{
    		var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    		return randomColor;
    		//random color will be freshly served
		}
		function generate(e)
		{
		var cllr = generateRandomColor();
		document.body.style.backgroundColor = cllr;
		document.getElementById("color-code").value=cllr;
		let result = ntc.name(cllr);

		let rgb_value = result[0];      //  RGB value of closest match
		let specific_name = result[1];  //  Color name of closest match
		let is_exact_match = result[2]; // True if exact color match
		console.log("val="+rgb_value);
		console.log("specific="+specific_name);
		console.log("val="+is_exact_match);
		document.getElementById("color-name").value=specific_name;
		}
		//Manual
		
		document.getElementById("color-code").addEventListener('keypress', function(e) {
      		if(e.keyCode==13){
      		var color = document.getElementById("color-code").value;
      		console.log("changed color value code = " + color);
      		document.body.style.backgroundColor = color;
    		console.log(document.body.style.backgroundColor);
    		let result = ntc.name(color); 
		let specific_name = result[1];
		
		let rgb_value = result[0];      // #6495ed         : RGB value of closest match
		let is_exact_match = result[2]; // false           : True if exact color match
		console.log("specific="+specific_name);
		console.log("val="+is_exact_match);
		if(specific_name=="Black"||specific_name=="White")
		{
			console.log("Entered in black white");
			if(color!="#FFFFFF" && color!="#ffffff" && color!="#000000")
			document.getElementById("color-name").value = "Dont have valid name";
			else
			document.getElementById("color-name").value=specific_name;
    		}
    		else
    		document.getElementById("color-name").value=specific_name;
    		
    		}
    		
    		});
    		document.getElementById("color-name").addEventListener('keypress', function(e){
      		if(e.keyCode==13){
      		var color = document.getElementById("color-name").value;
      		color = color.split(" ").join("");
      		console.log("changed color value name = " + color);
      		document.body.style.backgroundColor = color;
      		console.log(document.body.style.backgroundColor);
      		document.getElementById("color-code").value= color;
    		}
    		});

