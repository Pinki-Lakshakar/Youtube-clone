let language =["java","javascript","nodejs"];

for(let i=0 ; i<=language.length ; i++){
console.log(language[i]);}

    //language.forEach((lang)=>console.log(lang));
    //language.map((lang)=>console.log(lang));
    //language.filter((lang)=>console.log(lang));

    /*for (let of language)
    {
        console.log(lang);
    }*/
    let HtmlCollection = document.body.children;
    let nodeList = document.querySelectorAll("div");
    console.log(nodeList);
    for(let list of nodelist){
console.log(list);
    }
    
    
/**================ for of ...statement ============ */
let users={
    name:"pinki",
    age:23,
    company:"infosys",
    salary:23000,
};

//for(let user in users){
    //console.log('${user} ${users[users]}');
//}

//for(let user of object.keys(users)) {
    //console.log(user);

//}
let array =['shashi','pinki']

for (let user in users){
    console.log('${user} ${users[user]}');
}
for(let arr in array){
    console.log(arr,array[arr])
}
/**=========================== */
let str="i love javascript ";
for(let x of str ){
    console.log(x)
}

