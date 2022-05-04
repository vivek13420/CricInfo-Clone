// url -- https://api.cricapi.com/v1/matches?apikey=68320411-4db8-4912-aaee-0001bece902c&offset=0


function slidebar(){
    return `
    <div id="first-part">
            <div>Matches(3)</div>
            <div>IPL(2)</div>
            <div>INTER PRO(1)</div>
        </div>
        <div id="second-part"></div>
        `;
}


export default slidebar;


const api_key="68320411-4db8-4912-aaee-0001bece902c"
let searchData =async (api_key) => {
    
    try{
        let res=await fetch(`https://api.cricapi.com/v1/matches?apikey=${api_key}&offset=0`)

        let data=await res.json();

        append(data.data)

    }catch(err){
        console.log(err);
    }
}

searchData(api_key);

function append(data){

    let appendDiv=document.getElementById("second-part");

    const arr=["Today, 7:30 PM. 48th Match. T20. DY Patil", "RESULT .47th Match. T20. Wankhede", "LIVE. 1st Match. LIST A .Dublin"];

    for(let i=0; i<3; i++){
        // console.log(data[i]);

        let div=document.createElement("div");
        div.className="update";

        let time=document.createElement("p");
        time.innerText=arr[i];
        let team1=document.createElement("h4");
        team1.innerText=data[i].teams[0];
        let team2=document.createElement("h4");
        team2.innerText=data[i].teams[1];
        // let message=document.createElement("p");
        // message.innerText=""

        let line = document. createElement("hr");
        line. setAttribute("width", "100%");

        let div2=document.createElement("div");
            let span1=document.createElement("span");
            span1.innerText="Schedule";
            let span2=document.createElement("span");
            span2.innerText="Table";
            let span3=document.createElement("span");
            span3.innerText="Fantasy";

        div2.append(span1, span2, span3);
        div.append(time, team1, team2, line, div2);

        appendDiv.append(div);
    }



    
}