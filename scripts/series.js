import navbar from "../Component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


// getSeriesData = async ()=>{
//     let res= await fetch('https://api.cricapi.com/v1/series?apikey=df371735-3234-4ca0-86bb-4dce16530431&offset=0')
//     let data = await res.json()
//     console.log(data.data);
// }

// getSeriesData()

let kids = document.getElementById('tabs').children
// console.log(kids);
for( let x of kids){
    x.addEventListener('click',toggleClass)
}
function toggleClass(){
    let kids1 = document.getElementById('lowerPart').children
    // console.log(el);
    let el=this
    for(let i=0;i<kids.length;i++){
        kids[i].className="class2"
    }
    el.className="class1"

    if(el==kids[0]){
        kids1[0].className='showDiv'
        kids1[1].className='hideDiv'
        kids1[2].className='hideDiv'
        
    }

    else if(el==kids[1]){
        kids1[0].className='hideDiv'
        kids1[1].className='showDiv'
        kids1[2].className='hideDiv'
        
    }

    else{
        kids1[0].className='hideDiv'
        kids1[1].className='hideDiv'
        kids1[2].className='showDiv'
        
    }
}

