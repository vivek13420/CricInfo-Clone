// const url ="https://newsdata.io/api/1/news?apikey=pub_714310086d6412345cf1853f7540984aed21&q=Bangladesh&category=sports "

// async function getData(){
//     let res = await fetch(url)
//     let data = await res.json()
//     append(data.results);

// }

// getData()
import navbar from "../Component/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

const newsData = [
  {
    title: "Karunaratne to lead SL on Bangladesh tour",
    link: "https://www.thenews.com.pk/print/955498-karunaratne-to-lead-sl-on-bangladesh-tour",
    keywords: null,
    creator: null,
    video_url: null,
    description:
      "COLOMBO: Dimuth Karunaratne will lead Sri Lanka’s 18-man squad in Bangladesh for the two-match Test series starting next week, selectors said Wednesday.Sri Lanka squad: Dimuth Karunaratne, , Kamil Mishara, Oshada Fernando, Angelo Mathews, Kusal Mendis, Dhananjaya de Silva, Kamindu Mendis,...",
    content: null,
    pubDate: "2022-05-06 01:00:00",
    image_url: null,
    source_id: "thenews",
    country: ["pakistan"],
    category: ["sports"],
    language: "english",
  },
  {
    title: "Kane Williamson to make Test return against England",
    link: "https://www.sentinelassam.com/sports-news/kane-williamson-to-make-test-return-against-england-590685",
    keywords: ["Sports"],
    creator: ["Sentinel Digital Desk"],
    video_url: null,
    description:
      "New Zealand captain Kane Williamson is set to return to Test cricket for the first time since November after being included in their initial 20-man squad for next",
    content:
      "LONDON: New Zealand captain Kane Williamson is set to return to Test cricket for the first time since November after being included in their initial 20-man squad for next month's tour of England. New Zealand Cricket (NZC) named an extended squad for the three-Test series on Tuesday to include cover for players likely to miss two warm-up games at the end of this month due to their involvement in the ongoing Indian Premier League (IPL). The squad will be trimmed down to 15 before the first Test at Lord's on June 2. Williamson's elbow injury kept him out of a Test match in India in December and home series against South Africa and Bangladesh. The 31-year-old is currently playing for Sunrisers Hyderabad in the IPL and could be among those absent for the warm-up matches, along with Tim Southee, Trent Boult, Devon Conway and Daryl Mitchell. \"The red ball tour of England first up is clearly high on our priority list and we're looking forward to hitting the ground running over there in a couple of weeks' time,\" coach Gary Stead said. \"All going to plan, we will have everyone fit and available for the first Test at Lord's, and aim to announce our final squad of 15 for that series once we've completed our warm-up games.\" Left-arm spinner Ajaz Patel returns to the squad, having not played since taking all 10 wickets in an innings against India. Uncapped players Cam Fletcher - who was called up for the South Africa series earlier this year - Michael Bracewell, Blair Tickner and Jacob Duffy are also included. IANS Also Read: Sunrisers Hyderabad skipper Kane Williamson roasted on social media Also Watch: Purabi Dairy Hikes Retail Prices of All Its Milk Products By Rs 2 Per Litre",
    pubDate: "2022-05-05 07:34:03",
    image_url:
      "https://assets.sentinelassam.com/h-upload/2022/05/05/342831-kane-williamson.jpg",
    source_id: "sentinel",
    country: ["india"],
    category: ["sports"],
    language: "english",
  },
  {
    title:
      "Ben Stokes will do a good job if he stays true to himself: Trevor Bayliss",
    link: "https://www.sentinelassam.com/sports-news/ben-stokes-will-do-a-good-job-if-he-stays-true-to-himself-trevor-bayliss-590682",
    keywords: ["Sports"],
    creator: ["Sentinel Digital Desk"],
    video_url: null,
    description:
      'Former England head coach Trevor Bayliss has backed all-rounder Ben Stokes to do well as the Test captain "if he stays true to himself". Having first endorsed Stokes as a potential Test skipper back in 2016',
    content:
      "SYDNEY: Former England head coach Trevor Bayliss has backed all-rounder Ben Stokes to do well as the Test captain \"if he stays true to himself\". Having first endorsed Stokes as a potential Test skipper back in 2016 on England's tour of Bangladesh, Bayliss' prediction came true when the all-rounder was appointed as the skipper in the longest format of the game last week, replacing Joe Root. \"We were on a tour of Bangladesh and the England journos asked at a press conference if there was anyone else in the squad besides Joe Root who could take over from 'Cookie' (Alastair Cook). I said Ben Stokes and they all laughed,\" Bayliss was quoted as saying by 'The Age'. Asked on how Stokes the Test captain will fare, Bayliss remarked, \"I think he'll do a good job if he stays true to himself and continues on play the game in his fashion. He's one of those captains who will not only lead by example, which he does already, he'll do it with a very positive outlook. He's always looking for the positive angle to make things happen. I think he'll be good for the team.\" A lot has happened in Stokes' cricketing career for England. From the Bristol nightclub brawl which resulted in him missing the 2017/18 Ashes in Australia to losing his father Ged in December 2020 and then in last year, Stokes took a break from the game to protect his mental well-being before returning for 2021/22 Ashes. Bayliss, under whom England won the 2019 Men's Cricket World Cup at home, feels that Stokes has got all the capabilities in him to set the past incidents aside and approach Test captaincy with a fresh mind. IANS Also Read: We'll Have Just One Head Coach For All Cricket Formats: CA Chairman Also Watch: Social media furious over video of US man appearing to mock PM Modi over Covid certificate",
    pubDate: "2022-05-05 07:29:42",
    image_url:
      "https://assets.sentinelassam.com/h-upload/2022/05/05/342827-trevor-bayliss.jpg",
    source_id: "sentinel",
    country: ["india"],
    category: ["sports"],
    language: "english",
  },
  {
    title: "India cement lead ICC Men's T20I Team Rankings",
    link: "https://www.sentinelassam.com/sports-news/india-cement-lead-icc-mens-t20i-team-rankings-590649",
    keywords: ["Sports"],
    creator: ["Sentinel Digital Desk"],
    video_url: null,
    description:
      "India have further cemented their position at the top of the ICC Men’s T20I Team Rankings following the annual update released on Wednesday. The Rohit Sharma",
    content:
      "DUBAI: India have further cemented their position at the top of the ICC Men's T20I Team Rankings following the annual update released on Wednesday. The Rohit Sharma-led side's lead over England on the top of the charts has extended to five rating points, from one previously. \"The new rankings reflect all T20I series completed since May 2019, with those completed prior to May 2021 weighted at 50 per cent and subsequent series weighted at 100 per cent,\" the International Cricket Council (ICC) said in a statement. India are now on 270 points, while the second-placed England have logged 265 points. Pakistam South Africa and Australia are the tied, fourth and fifth-placed teams with 261, 253 and 251 points, respectively. India have been in sublime form in the format, following their disappointment at the 2021 ICC Men's T20 World Cup in the UAE and Oman, where they failed to make the semifinals. India have defeated New Zealand, West Indies and Sri Lanka on home turf, under Sharma's captaincy. Sharma took over from Virat Kohli following the global event last year. New Zealand have dropped two places to No.6, losing five rating points (250). West Indies (240 points) remain on the seventh spot. Bangladesh (233 points) and Sri Lanka (230 points) have both gained one position in the chart to occupy the eighth and ninth positions respectively. Afghanistan have dropped two places, rounding out the top-10 after losing six rating points (226). IANS Also Read: Nicholas Pooran named Windies white-ball captain Also Watch: Purabi Dairy Hikes Retail Prices of All Its Milk Products By Rs 2 Per Litre",
    pubDate: "2022-05-05 06:18:05",
    image_url:
      "https://assets.sentinelassam.com/h-upload/2022/05/05/342787-icc.jpg",
    source_id: "sentinel",
    country: ["india"],
    category: ["sports"],
    language: "english",
  },
  {
    title:
      "Sri Lanka's star opener Dimuth Karunaratne to lead Sri Lanka vs Bangladesh",
    link: "https://www.sentinelassam.com/sports-news/sri-lankas-star-opener-dimuth-karunaratne-to-lead-sri-lanka-vs-bangladesh-590641",
    keywords: ["Sports"],
    creator: ["Sentinel Digital Desk"],
    video_url: null,
    description:
      "Sri Lanka’s star opener Dimuth Karunaratne will lead a relatively inexperienced side during their two-match Test series against Bangladesh commencing in Chittagong",
    content:
      "COLOMBO: Sri Lanka's star opener Dimuth Karunaratne will lead a relatively inexperienced side during their two-match Test series against Bangladesh commencing in Chittagong on May 15. The second Test is scheduled in Dhaka from May 23. Sri Lanka Cricket (SLC) selectors named an 18-member squad for the red-ball series on Wednesday, with several key players missing as the island nation chases crucial World Test Championship points. Top-order batter Roshen Silva has opted out of the tour, with former skipper Angelo Mathews and right-hander Dhananjaya De Silva asked to help Karunaratne out at the top of the order. IANS Also Read: India Beat Sri Lanka By 238 Runs To Win Series 2-0 Also Watch: Social media furious over video of US man appearing to mock PM Modi over Covid certificate",
    pubDate: "2022-05-05 05:55:44",
    image_url:
      "https://assets.sentinelassam.com/h-upload/2022/05/05/342779-dimuth-karunaratne.jpg",
    source_id: "sentinel",
    country: ["india"],
    category: ["sports"],
    language: "english",
  },
  {
    title:
      "Annual ICC Rankings: Oz are No. 1 in Tests, India stays on top in T20, NZ are No. 1 in ODI",
    link: "https://www.thehansindia.com/sports/cricket/annual-icc-rankings-oz-are-no-1-in-tests-india-stays-on-top-in-t20-nz-are-no-1-in-odi-741128",
    keywords: ["Sports,Cricket"],
    creator: ["The Hans India"],
    video_url: null,
    description:
      "India under new captain Rohit Sharma finished the 2021-22 season as the world's number one ranked T20 team after a string of impressive performances at home but were a good nine points behind Australia in the annual Test rankings released by ICC on Wednesday.",
    content:
      "Dubai: India under new captain Rohit Sharma finished the 2021-22 season as the world's number one ranked T20 team after a string of impressive performances at home but were a good nine points behind Australia in the annual Test rankings released by ICC on Wednesday. The 'Black Caps' from New Zealand finished the last season as the world No.1 ODI team with the cut-off date being May 4, 2022. The England versus India series that began in 2021, will be included in the rankings once the final postponed Test is completed. \"Australia have increased their lead over second-placed India from one to nine rating points while Pakistan have overtaken England to fifth position in the ICC Men's Test Team Rankings following the annual update carried out today,\" the ICC release stated. \"India have also gained a point to move to 119 while England have had the biggest decrease of nine points as their 4-1 series win over India in 2018 is now dropped from the rankings. England's 88 rating points is their lowest since 1995,\" the release added. Australia, who beat England 4-0 in the Ashes in January, have moved from 119 to 128 rating points in the annual update that drops the 2018-19 season and reflects all series completed since May 2019. Series completed prior to May 2021 are now weighted at 50 per cent and subsequent series at 100 per cent. India remain on top in T20Is, extending their lead over second-placed England from one to five points. South Africa and Australia have overtaken New Zealand, who are now in sixth place. Similarly, Bangladesh and Sri Lanka are now ahead of Afghanistan (10th). In the updated ODI rankings, New Zealand remain on top but their lead over England is reduced from three to one point. The gap between England and third-placed Australia has increased from seven to 17 points. (PTI)",
    pubDate: "2022-05-04 20:06:52",
    image_url:
      "https://assets.thehansindia.com/h-upload/2022/05/04/500x300_1290408-icc.jpg",
    source_id: "thehansindia",
    country: ["india"],
    category: ["sports"],
    language: "english",
  },
];

let firstDiv = document.getElementById("firstNews");
let restDiv = document.getElementById("restoftheNews");

function append(data) {
  data.forEach((el, index) => {
    if (index == 0) {
      appendFirst(el);
    } else {
      let div = document.createElement("div");
      div.setAttribute("class", "newsdiv");

      let leftdiv = document.createElement("div");
      let rightdiv = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("class", "restImg");
      if (el.image_url == null) {
        img.src = "../images/1.webp";
        console.log(1);
      }
      img.src = el.image_url;

      let h1 = document.createElement("h4");
      h1.setAttribute("id", "firsth1");
      h1.innerText = el.title;

      let p = document.createElement("p");
      p.innerText = el.description;

      leftdiv.append(img);
      rightdiv.append(h1, p);
      div.append(leftdiv, rightdiv);
      restDiv.append(div);
    }
  });
}

function appendFirst(el) {
  console.log(el);
  let upperdiv = document.createElement("div");
  let lowerdiv = document.createElement("div");
  let img = document.createElement("img");
  if (el.image_url == null) {
    img.src = "../images/1.webp";
    console.log(img.src);
  } else {
    img.src = el.image_url;
  }
  img.setAttribute("id", "firstImage");

  let h1 = document.createElement("h1");
  h1.setAttribute("id", "firsth1");
  h1.innerText = el.title;

  let p = document.createElement("p");
  p.innerText = el.description;

  upperdiv.append(img)
  lowerdiv.append(h1,p)
  firstDiv.append(upperdiv,lowerdiv);
}

append(newsData);
