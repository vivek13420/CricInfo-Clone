let url='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=09767cca22874ad7a3f9548cb9dc404c'

// import navbar from 'navbar.js'
// import slidebar from "../Component/slide.js";

// document.getElementById("slide").innerHTML=slidebar();

import {navbar} from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

// -------------------------------------------navbar----------------------------------------

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
             innerContainer.style.display="flex"
             innerContainer.addEventListener('click',function(){
                  into_data(el)
             })

            let contDiv=document.createElement('div');
            let imagediv=document.createElement('div');
            

           
            let h3=document.createElement('h3');
            h3.innerText=el.title;
            let p=document.createElement('p')
            p.innerText=el.description
            let image=document.createElement('img')
            image.src=el.urlToImage
            image.setAttribute('class','img')
            let  date=document.createElement('p')
            date.innerText=el.publishedAt
            

            imagediv.append(image);
            // let contentdiv=document.createElement('div');
            contDiv.append(h3,p,date);
            innerContainer.append(imagediv,contDiv)
            document.getElementById('container').append(innerContainer);
            
            
        });

        
    }
    function into_data(el){
        
        // console.log(el)
        // let arr=JSON.parse(localStorage.getItem("news")) || [];

        // arr.push(el);

        // localStorage.setItem('news',JSON.stringify(el))
        window.location.href='data.html'
        


    }
//-----------------------------------------------------------------------------------------------------------
    // https://newsdata.io/api/1/news?apikey=pub_7072467d23c6e85f7830d1a617c9e626c853&q=cricket%20news&country=in&language=en&category=sports 
    // let url_2=" https://newsdata.io/api/1/news?apikey=pub_7072467d23c6e85f7830d1a617c9e626c853&q=cricket&country=au,in,nz,pk,za&language=en&category=sports  "
    // url_2="results.json";
    
    fetch(url).then(function(res){
        res.json().then(function(res){
            
            let data2=res.articles
            console.log(data2)
            append2(data2)

        })
        
        
    }).catch(function(err){
        console.log(err)
    })


    let append2=(data2)=>{
        data2.forEach(({urlToImage, title,publishedAt}) => {
            let inContainer =document.createElement("div")
             inContainer.style.display="flex"
            let contDiv2=document.createElement('div');
            let imagediv2=document.createElement('div');

            let h3=document.createElement('p');
            h3.innerText=title;
            // let p=document.createElement('p')
            // p.innerText=description
            let image=document.createElement('img')
            image.src=urlToImage
            image.setAttribute('class','img2')
            let  date=document.createElement('p')
            date.innerText=publishedAt

            imagediv2.append(image);
            // let contentdiv=document.createElement('div');
            contDiv2.append(h3,date);
            inContainer.append(imagediv2,contDiv2)
            document.getElementById('side-container').append(inContainer);
            
            
        });




    
} 