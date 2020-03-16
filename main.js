function CoronaApiCall(){
    document.write("Hey boy")
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "6cc8de9773msh89d40c6235a0323p1ba4e7jsn0a42e58843f0"
	}
})
.then(response => {
    document.write(response);
   
})
.catch(err => {
	console.log(err);
});
}