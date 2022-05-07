



var show = true;

  
function showCheckboxes() {
    var checkboxes = 
        document.getElementById("checkBoxes");
        
    if (show) {
        
        checkboxes.style.display = "block";
        checkboxes.style.lineHeight = "25px"
        checkboxes.style.marginTop = "12px"
        checkboxes.style.width = "300px"
        checkboxes.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
        checkboxes.style.position = "absolute"
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}

function showCheckboxes1() {
    var checkboxes = 
        document.getElementById("checkBoxes1");
    if (show) {
        checkboxes.style.display = "block";
        checkboxes.style.lineHeight = "25px"
        checkboxes.style.marginTop = "12px"
        checkboxes.style.width = "300px"
        checkboxes.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}


function showCheckboxes2() {
    var checkboxes = 
        document.getElementById("checkBoxes2");
    if (show) {
        checkboxes.style.display = "block";
        checkboxes.style.lineHeight = "25px"
        checkboxes.style.marginTop = "12px"
        checkboxes.style.width = "300px"
        checkboxes.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}


async function live_matches(){

    try{

        let res = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=088b9677-4844-4991-819b-bb1a4eee50c7&offset=0");
        // let res = await fetch("https://api.cricapi.com/v1/match_info?apikey=088b9677-4844-4991-819b-bb1a4eee50c7&offset=0&id=03a22551-9842-4dde-b3c5-ae14b1161891");
        // let res = await fetch("https://newsdata.io/api/1/news?apikey=pub_7141b60260f2de397bb4d2f00ef07761fbc3&q=cricket ");
        let data = await res.json();
        let result = data.data
        console.log(result)
        append(result)
    }catch(err){
        console.log(err)
    }
}
live_matches()

function append(data){

    data.forEach(function(el){

        // let scores = el.score
        // console.log(scores[0].r)

       let box = document.createElement("div");
       box.style.padding = "15px"
    //    box.style.border = "1px solid black"
       box.style.boxShadow = "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
       let name1 = document.createElement("p");
       name1.style.fontSize = "12px"
       name1.innerText = `${el.venue}, ${el.date}, ${el.name}`

       let div1 = document.createElement("div");
       div1.style.display = "flex"
       div1.style.justifyContent = "space-between"
       let team1 = document.createElement("h3");
       team1.innerText = el.teams[0]

       let score1 = document.createElement("h3");
       score1.innerText = `${el.score[0].r} / ${el.score[0].w}`
       div1.append(team1,score1)

       let div2 = document.createElement("div");
       div2.style.display = "flex"
       div2.style.justifyContent = "space-between"
       let team2 = document.createElement("h3");
       team2.innerText = el.teams[1]

       let score2 = document.createElement("h3");
       div2.append(team2)
       if(el.score[1] == undefined)
       {
        score2.innerText = null
       }else{
        score2.innerText = `${el.score[1].r} / ${el.score[1].w}`
        div2.append(score2)
       }
       
       

       let statu = document.createElement("p");
    //    statu.style.marginTop = "-40px"
       statu.innerText = el.status
       statu.style.fontSize = "17px"

       let div = document.createElement("div");
       div.style.display = "flex"
       div.style.borderTop = "1px solid rgb(231, 227, 227)"

       let preview = document.createElement("p")
       preview.innerText = "Preview";
       preview.style.marginRight = "10px"

       let seriesHome = document.createElement("p");
       seriesHome.innerText = "Series Home"

       div.append(preview,seriesHome)

       box.append(name1,div1,div2,statu,div)

       document.getElementById("live_matches").append(box)

    })
}


async function news(){

    try{

        
        let res = await fetch("https://newsdata.io/api/1/news?apikey=pub_7141b60260f2de397bb4d2f00ef07761fbc3&q=cricket ");
        let data = await res.json();
        let result = data.results
        // console.log(result)
        newsData(result)
    }catch(err){
        console.log(err)
    }
}

function newsData(data){

    data.forEach(function(el){

        // console.log(el)
        let box = document.createElement("div");
        box.style.borderBottom = "1px solid rgb(231, 227, 227)"
        box.style.padding = "15px"
        let image = document.createElement("img");
        image.style.borderRadius = "10px"
        image.src = el.image_url
        image.style.width = "300px"
        let title = document.createElement("h4");
        title.innerText = el.title
        title.style.marginBottom = "0px"

        box.append(image,title)
        document.getElementById("news").append(box)

    })
}
news()