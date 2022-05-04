let url='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=09767cca22874ad7a3f9548cb9dc404c';

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
        data.forEach(({urlToImage, description,title,publishedAt}) => {
            let innerContainer =document.createElement("div")
             innerContainer.style.display="flex"
            let div=document.createElement('div');
            let imagediv=document.createElement('div');
            // imagediv.append(image);

           
            let h3=document.createElement('h3');
            h3.innerText=title;
            let p=document.createElement('p')
            p.innerText=description
            let image=document.createElement('img')
            image.src=urlToImage
            image.setAttribute('class','img')
            let  date=document.createElement('p')
            date.innerText=publishedAt

            imagediv.append(image);
            // let contentdiv=document.createElement('div');
            div.append(h3,p,date);
            innerContainer.append(imagediv,div)
            document.getElementById('container').append(innerContainer);
            // let x=div.style.display= flex

        //    document.getElementById('container').append(x)

            // div.append(image,h3,p,date)
            // document.getElementById('container').append(div)

            // document.getElementById("container").style.display = "flex";
            
        });

        
    }