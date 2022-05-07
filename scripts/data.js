let url='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=09767cca22874ad7a3f9548cb9dc404c'

import {navbar} from "../component/navbar.js";

let print=document.getElementById("navbar")
print.innerHTML=navbar();
fetch(url).then(function(res){
    res.json().then(function(res){
        // console.log(res.articles)
        let data= res.articles;
        console.log(data)
        append(data)
    })
}).catch(function(err){
    console.log(err)
})


    let append=(data)=>{
        data.forEach((el) => {
            let innerContainer =document.createElement("div")
            //  innerContainer.style.display="flex"
             

            let contDiv=document.createElement('div');
            // let imagediv=document.createElement('div');
            

           
            let h3=document.createElement('h3');
            h3.innerText=el.title;
            let p=document.createElement('p')
            p.innerText=el.description
            let image=document.createElement('img')
            image.src=el.urlToImage
            image.setAttribute('class','img')
            let  date=document.createElement('p')
            date.innerText=el.publishedAt
            let content=document.createElement('p')
            content.innerHTML=el.content
            

            // imagediv.append(image);
            // let contentdiv=document.createElement('div');
            contDiv.append(h3,p,date,image,p,content);
            innerContainer.append(contDiv)
            document.getElementById('data_box').append(innerContainer);
            
            
        });

        
    }