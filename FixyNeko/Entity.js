class Entity {
	constructor(string texturePath){
		this.textureName = texturePath.replace(/[^\/]*$/, "");
		this.path = texturePath.replace(textureName, "");

		this.xVel = 0;
		this.yVel = 0;
		this.xAcc = 0;
		this.yAcc = 0;
		this.xPos = 0;
		this.yPos = 0;

		this.applyGravity = false;
	}
}
