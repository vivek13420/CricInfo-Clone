import slidebar from "../Component/slide.js";

document.getElementById("slide").innerHTML=slidebar();

import navbar from "../Component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

import api from "../Component/live_score_update_api.js";

// console.log(api);

 const keySeries=["IPL 2022","FairBreak","Ranji Trophy","Bangladesh v Sri Lanka","Zimbabwe v Namibia","County Div1","County Div2","Women's Championship","World Test Championship","World Cup Super League"];

 const quickLinks=["Champion Performers","Confident Player","Weekly Star","Performer","Fast Funde","Guarantee Tips","ASKcricinfo Top 5","T20 Time Out","T20 Time Out Hindi","ICC Rankings","Fantasy Pick","Haan Ya Naa"];

 const espApps=["Android App","iOS App"];

 const followEsp=["Instagram","Twitter","Facebook","YouTube"];
 
 const espSites=["The Cricket Monthy","ESPN"];

 const news=["Livingstone: 'No time for blocks in T20s'","Stephen Fry named MCC President","Australia remain No. 1 Test side","Uncapped Kamil, Kamindu in SL squad","County: Stokes, Root back in action","Buzz: Rinku 'Nostradamus' Singh"]

 function mainPart(ID, arr){
    arr.map((ele)=>{

        let div=document.createElement("div");

        let icon=document.createElement("span");
        icon.innerHTML='<i class="fa-solid fa-angle-right"></i>';
        let p=document.createElement("p");
        p.innerText=ele;

        div.append(icon, p);
        div.className="list";
        document.getElementById(ID).append(div);
    })

}
mainPart("key-series", keySeries);
mainPart("quick-links", quickLinks);
mainPart("esp-apps", espApps);
mainPart("follow-esp", followEsp);
mainPart("esp-sites", espSites);
mainPart("news", news);


let searchData =async (url, appendID, fun) => {
    
    try{
        let res=await fetch(url)

        let data=await res.json();

        if(fun===1){

            appendNews(appendID,data.articles );
            // console.log(data.articles[0]);
        }else{
            if(fun===2){
                console.log(data);
            }
        }


    }catch(err){
        console.log(err);
    }
}

searchData("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=41da0db4bf1d4251bf434969c4daaa7a","random-news",1);

function appendNews(ID, arr){
    let count=0;
    arr.map((ele)=>{

        // console.log(ele.urlToImage);
        if(ele.urlToImage!== null){
            count++;
            if(count<=11){
            
                // console.log("\n");
                // console.log(ele.urlToImage);
                
                let div=document.createElement("div");
                
                let img=document.createElement("img");
                img.src=ele.urlToImage;
                let title=document.createElement("p");
                title.innerText=ele.title;
                
                div.append(img, title);
                
                document.getElementById(ID).append(div);
            }
        }
        });

};

function appendAllData(ID, arr){
    
    arr.forEach((ele) => {
        let mainDiv=document.createElement("div");
        mainDiv.id="latest-news"
        
        //------------headlines
        let headlineDiv=document.createElement("div");
        headlineDiv.className="headline";
        
        let team=document.createElement("h4");
        team.innerText=ele.headLine.team;
        let tournamentName=document.createElement("p");
        tournamentName.innerText=ele.headLine.tournamentName;
        
        headlineDiv.append(team, tournamentName);
        
        //------------scorediv
        let scoreDiv=document.createElement("div");
        scoreDiv.className="scoreDiv";
        let result=document.createElement("p");
        result.innerText=ele.scoreDiv.title;
        let div1=document.createElement("div");
            let logo1=document.createElement("img");
            logo1.src=ele.scoreDiv.team1.logo;
            let team1=document.createElement("h4");
            team1.innerText=ele.scoreDiv.team1.name;
            let score1=document.createElement("h3");
            score1.innerText=ele.scoreDiv.team1.score;
        div1.append(logo1,team1, score1);
        div1.className="score1";
        let div2=document.createElement("div");
            let logo2=document.createElement("img");
            logo2.src=ele.scoreDiv.team2.logo;
            let team2=document.createElement("h4");
            team2.innerText=ele.scoreDiv.team2.name;
            let score2=document.createElement("p");
            score2.innerText=ele.scoreDiv.team2.over;
            let span=document.createElement("h3");
            span.innerText=ele.scoreDiv.team2.score;
        div2.append(logo2,team2, score2, span);
        div2.className="score2";    
        let win=document.createElement("p");
        win.innerText=ele.scoreDiv.win;
        
        scoreDiv.append(result, div1, div2, win);  
        
        //------------shortDiv
        let shotInfoDiv=document.createElement("div");
        shotInfoDiv.className="shortInfo";
        
            let img=document.createElement("img");
            img.src=ele.shotInfo.img;
            let title=document.createElement("h3");
            title.innerText=ele.shotInfo.title;
            let description=document.createElement("p");
            description.innerText=ele.shotInfo.description;
        
        shotInfoDiv.append(img, title, description);    
        //------------discussionDiv
        let discussionDiv=document.createElement("div");
        discussionDiv.className="discussion";
        let img1=document.createElement("img");
        img1.src=ele.discussion.img;
        
        let divinfo=document.createElement("div");
        let headLine=document.createElement("h3");
        headLine.innerText=ele.discussion.headline;
        let description1=document.createElement("p");
        description1.innerText=ele.discussion.description;
        
        divinfo.append(headLine, description1)
        discussionDiv.append(img1, divinfo);


        //------------pointdiv
        let pointsDiv=document.createElement("div");
        pointsDiv.className="pointsDiv";
        
        ele.points.map((e) => {
            
            let div4=document.createElement("div");
            
            let icon=document.createElement("span");
            icon.innerHTML='<i class="fa-solid fa-angle-right"></i>';
            let point=document.createElement("p");
            point.innerText=e;
            div4.append(icon, point);
            pointsDiv.append(div4);
        })
        
        //------------additional information
        let additinalInfo=document.createElement("div");
        additinalInfo.className="additionalInfo";
        
        let count=0;
        ele.additional.forEach((e) => {
            
            // console.log(e.title)


            if(count<3){
                
                count++;
                let div5=document.createElement("div");
                
                let img=document.createElement("img");
                img.src=e.img;
                let title=document.createElement("p");
                title.innerText=e.title;
                div5.append(img, title);
                additinalInfo.append(div5);
                // console.log(count);
            }
        });
        
        // console.log(ID);
        
        mainDiv.append(headlineDiv, scoreDiv, shotInfoDiv, discussionDiv, pointsDiv, additinalInfo);
    
        document.getElementById(ID).append(mainDiv);
    });
}

appendAllData("main-2", api);

// searchData("https://api.cricapi.com/v1/series?apikey=68320411-4db8-4912-aaee-0001bece902c&offset=0&search=IPL","main-2", 2);