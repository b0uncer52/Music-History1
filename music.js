var songs = [];

songs[songs.length] = "Wrong Way > by Sublime on the album Sublime";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Smells Like Teen Spirit > by Nirvana on the album Nevermind";

var songListing = document.getElementById("songs");

songs.forEach(function(song){
	song = song.replace(/[^a-zA-Z >&]/g, '');
	song = song.replace(/\>/g, '-');
	songListing.innerHTML += "<div class='song'>" + song + "</div>";
});