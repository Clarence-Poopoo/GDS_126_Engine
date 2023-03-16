/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/full_spritesheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:5,
			cycle:true,
			frames:
			[
				{width:512, height:512, startX:0 , startY:1050 },
				{width:512, height:512, startX:520, startY:1050},
				{width:512, height:512, startX:1035, startY:1050},
				{width:512, height:512, startX:1550, startY:1050},
				{width:512, height:512, startX:2064, startY:1050},
				{width:512, height:512, startX:2575, startY:1050},
				{width:512, height:512, startX:3090, startY:1050},
				{width:512, height:512, startX:3599, startY:1050}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:false,
			frames:
			[
				{width:512, height:512, startX:0, startY:2080},
				{width:512, height:512, startX:520, startY:2080}
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:512, height:512, startX:520, startY:1560}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:1,
			cycle:false,
			frames:
			[
				{width:512, height:512, startX:0, startY:0},
				{width:512, height:512, startX:520, startY:0},
				{width:512, height:512, startX:1035, startY:0},
				{width:512, height:512, startX:1550, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:1,
			cycle:false,
			//width:300,
			frames:
			[
				{width:512, height:512, startX:0, startY:530},
				{width:512, height:512, startX:520, startY:530},
				{width:512, height:512, startX:1035, startY:530},
				{width:512, height:512, startX:1550, startY:530}
				
			]
		}
	}
		
}