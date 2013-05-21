function Cat(name, owner) {
	this.name = name;
	this.owner = owner;
}

Cat.prototype.cute_cat = function () {
	console.log(this.owner + " loves " + this.name);
};

var d = new Cat("Sandy", "Liz");
d.cute_cat();
// c.cute_cat();

Cat.prototype.cute_cat = function () {
	console.log("everyone loves " + this.name);
};

var c = new Cat("Mitts", "Angelo");

console.log(c.name);
c.cute_cat();


Cat.prototype.meow = function () {
	console.log("meow");
};

c.meow();
d.meow();

d.meow = function () {
	console.log("woof");
}

d.meow();

// module.exports = Cat;