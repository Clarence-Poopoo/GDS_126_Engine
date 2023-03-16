/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/button.png"
startButton.width=200;
startButton.hitBoxWidth=800
startButton.x=550;
startButton.y=370
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/cover.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('zelda')
			loop == true
			
		}

		//Hover Effect Graffic
		startButton.img.src="images/button2.png"
	}
	else
	{
		//Default Button Graphic
		startButton.img.src="images/button.png"
	}
	
	menuBackground.drawStaticImage();
	//startButton.render()
	startButton.drawStaticImage()
}
	
	
