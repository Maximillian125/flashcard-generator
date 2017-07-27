var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
	
	this.fullText = this.text;
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

module.exports = ClozeCard