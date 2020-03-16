 function AllCountry(){ 
        const changeLive = document.getElementById("liveC")
        setInterval(function() {
            fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                    "x-rapidapi-key": "6cc8de9773msh89d40c6235a0323p1ba4e7jsn0a42e58843f0"
                }
            }).then(function (response){
                return response.json();
            }).then(function (data){

                    var col = [];
                    for (var i = 0; i < data.countries_stat.length; i++) {
                        for (var key in data.countries_stat[i]) {
                            if (col.indexOf(key) === -1) {
                                col.push(key);
                            }
                        }
                    }
                    var table = document.createElement("table");
                    table.setAttribute('class','table table-striped table-dark')
                    var tr = table.insertRow(-1);     
                    for (var i = 0; i < col.length; i++) {
                        var th = document.createElement("th");      // TABLE HEADER.
                        th.innerHTML = col[i];
                        tr.appendChild(th);
                    }
                    // ADD JSON DATA TO THE TABLE AS ROWS.
                    for (var i = 0; i < data.countries_stat.length; i++) {
                        tr = table.insertRow(-1);        
                        for (var j = 0; j < col.length; j++) {
                            var tabCell = tr.insertCell(-1);
                            tabCell.innerHTML = data.countries_stat[i][col[j]];
                        }
                     }
                    var divContainer = document.getElementById("showData");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
     
            }
            ).catch(function (error){
                console.log(error);
            });
        },10000)
    }
