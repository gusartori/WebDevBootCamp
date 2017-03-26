var movieDB = [
{
	name: "Clockwork Orange",
	rating: 4,
	hasWatched: true,
	toString: function (){
	print(this);
	}
},
{
	name: "2001",
	rating: 5,
	hasWatched: true,
	toString: function (){
	print(this);
	}
},
{
	name: "Passengers",
	rating: 3.5,
	hasWatched: false,
	toString: function (){
	print(this);
	}
},
{
	name: "Saving Private Ryan",
	rating: 4,
	hasWatched: true,
	toString: function (){
	print(this);
	}
}
];

function print (movie){
	if (movie.hasWatched){
		console.log("You have watched \""+movie.name+"\"- "+movie.rating+" stars" );
	} else {
		console.log("You have not seen \""+movie.name+"\"- "+movie.rating+" stars" );
	}
}

// movieDB.forEach(x=>{
// 	if (x.hasWatched){
// 		console.log("You have watched \""+x.name+"\"- "+x.rating+" stars" );
// 	} else {
// 		console.log("You have not seen \""+x.name+"\"- "+x.rating+" stars" );
// 	}
// });
