
const footerPart1=["IPL 2022","Ranji Trophy","County Div2","County Div1","Women's Championship","World Test Championship","World Cup Super League",];

const footerPart2=["Champion Performers","Confident Player","Weekly Star","Performer","Fast Funde","Guarantee Tips","ASKcricinfo Top 5","T20 Time Out","T20 Time Out Hindi","ICC Rankings","Fantasy Pick","Haan Ya Naa",];

const footerPart3=["Android App","iOS App"];

const footerPart4=["Instagram","Twitter","Facebook","YouTube"];

const footerPart5=["The Cricket Monthly","ESPN"];

function append(ID, arr){
    arr.map((ele)=>{

        let p=document.createElement("p");
        p.innerText=ele;

        document.getElementById(ID).append(p);
    })
}

append("footer-part1", footerPart1);
append("footer-part2", footerPart2);
append("footer-part3", footerPart3);
append("footer-part4", footerPart4);
append("footer-part5", footerPart5);