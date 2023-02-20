// JavaScript source code

var movie = {
    name: "",
    duration: 0,
    ratings:0,
}
var movieCnt = -1;
var movies = [];
function addData() {
    movie = new Object();
    movie.name = document.getElementById("movieName").value;
    movie.duration = document.getElementById("movieDur").value;
    movie.ratings = document.getElementById("movieRat").value;
    if (movie.name != "" && movie.duration != 0) {
        document.getElementById("movieName").value = "";
        document.getElementById("movieDur").value = "";
        document.getElementById("movieRat").value = "";
        movies.push(movie);
        movieCnt++;
        //console.log(movies);
        show();
    }
    else
    {
        var spanName = document.getElementById("mandateName");
        //spanName.innerHTML = "required";
        spanName.style = "color:red";
        var spanDur = document.getElementById("mandateDur");
        //spanDur.innerHTML = "required";
        spanDur.style = "color:red";

    }

    }

function show() {
    console.log(movieCnt );
    var tableBody = document.getElementById("tableBody");
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>" + (movieCnt+1)+ "</td>"+ "<td>" + movies[movieCnt ].name + "</td>" + "<td>" + movies[movieCnt ].duration + "</td>" + "<td>" + movies[movieCnt ].ratings + "</td>";
    tableBody.append(newRow);
    //console.log(tableBody);
    document.getElementById("moviesCnt").innerHTML = movieCnt + 1;
    average();
    
}
function average() {
    
    var sum = 0, avg = 0;;
    for (var i = 0; i <= movieCnt; i++) {
        sum = sum +( movies[i].ratings *1);
    }
    console.log(sum);
    avg = sum / (movieCnt+1);
    document.getElementById("averageMovies").innerHTML = avg;
    
}
function popLastElement() {
    var trs = document.getElementById("tableBody");
    trs.deleteRow(movieCnt);
    console.log(trs);
    movieCnt--;
    average();
}
//function pop() {
//    var index = document.getElementById("movieIndex").value;
//    console.log(index);
//    var trs = document.getElementById("tableBody");
//    trs.deleteRow(index);
//    console.log(trs);
//    movieCnt--;
//    
   
//}