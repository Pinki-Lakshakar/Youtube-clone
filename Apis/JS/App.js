/**============================== Movie -search ====================== */
let Key = "b7fc335b"
let search = document.getElementById("search");
let btn= document.querySelector("button");

search.addEventListener("keyup", (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
        e.preventDefault();
        var searchKey = e.target.value;//blocked scope
        // console.log(e.target.value);//blocked scope
        SearchMovies(searchKey);
    }
});
//if you needed async callbacks start with async keyword.
 async function SearchMovies(searchKey) {
    //console.log(searchKey);
    let BASE_URL=`http://www.omdbapi.com/?${searchKey}&apiKey=${key}`;    //multiple movie
//es7 features called async and await
try{

let response=window.fetch(BASE_URL);
let movie=await response.json();
console.log(movies);
}
catch(error){
console.log(error);
}

//console.log(res);//readableStream
}
/*let form =document.getElementById("form");}
let input =document.getElementById("search");

form .addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(input.value);
});
/*let search =document.getElementById("search");

search.addEventListener("keyup", (e) =>{
    e.preventDefault();

    //console.log(e.target.value);

});
console.log(e);*/
