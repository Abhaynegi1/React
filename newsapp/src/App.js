import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

export default class App extends Component {
  // articles = [
  //     {
  //          "source": {
  //      "id": "al-jazeera-english",
  //      "name": "Al Jazeera English"
  //      },
  //      "author": "Maziar Motamedi",
  //      "title": "Iran’s IRGC seizes ‘Israeli-linked’ ship near Strait of Hormuz - Al Jazeera English",
  //      "description": "IRGC forces conducted an operation via helicopter to take control of the commercial vessel, state media reports.",
  //      "url": "https://www.aljazeera.com/news/2024/4/13/irans-irgc-seizes-israeli-linked-ship-near-strait-of-hormuz",
  //      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/04/AP24104339126398-1713008084.jpg?resize=1200%2C675",
  //      "publishedAt": "2024-04-13T11:35:44Z",
  //      "content": "Tehran, Iran Iranian armed forces have seized a container ship near the Strait of Hormuz amid rising tensions across the region after a deadly Israeli attack on Irans consulate in Syria.\r\nThe ship wa… [+3711 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": "cbs-news",
  //      "name": "CBS News"
  //      },
  //      "author": null,
  //      "title": "6 dead, suspect killed after stabbing attack at shopping center in Sydney, Australia; multiple people injured - CBS News",
  //      "description": "New South Wales Assistant Police Commissioner Anthony Cooke said that he believed that the suspect acted alone.",
  //      "url": "https://www.cbsnews.com/news/sydney-australia-stabbing-attack-5-dead/",
  //      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/04/13/d2540c0e-cc36-42fb-97bf-ce095d46facc/thumbnail/1200x630/829f4c0447851f08ed7362424792bfc6/ap24104290354801.jpg?v=c0ff3069549804234360eec4c5e30dea",
  //      "publishedAt": "2024-04-13T11:31:39Z",
  //      "content": "SYDNEY (AP) — A man stabbed six people to death at a busy Sydney shopping center Saturday before he was fatally shot, police said. Eight people, including a 9-month-old, were injured in the attack.\r\n… [+1876 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "CNBC"
  //      },
  //      "author": "Jeff Cox",
  //      "title": "Surging inflation fears sent markets tumbling and Fed officials scrambling - CNBC",
  //      "description": "The early data is in for the path of inflation during the first three months of 2024, and the news so far is not good.",
  //      "url": "https://www.cnbc.com/2024/04/13/surging-inflation-fears-sent-markets-tumbling-and-fed-officials-scrambling.html",
  //      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107400201-1712873066466-gettyimages-2148324040-rent402979_qlj2b5su.jpeg?v=1712873254&w=1920&h=1080",
  //      "publishedAt": "2024-04-13T11:23:16Z",
  //      "content": "A sign advertising units for rent is displayed outside of a Manhattan building on April 11, 2024 in New York City.\r\nThe early data is in for the path of inflation during the first three months of 202… [+7490 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "CNBC"
  //      },
  //      "author": "Holly Ellyatt",
  //      "title": "Situation on eastern front has 'significantly worsened' in recent days, Ukraine's army chief warns - CNBC",
  //      "description": "Ukraine's top general warned that the battlefield situation in the east of the country, which is at the epicenter of the fiercest fighting, has deteriorated.",
  //      "url": "https://www.cnbc.com/2024/04/13/situation-in-east-ukraine-has-significantly-worsened-army-commander.html",
  //      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107400759-1713002777717-gettyimages-2121052956-AA_31032024_1605423.jpeg?v=1713002941&w=1920&h=1080",
  //      "publishedAt": "2024-04-13T10:25:45Z",
  //      "content": "Ukraine's top military general warned Saturday that the battlefield situation in the east of the country, which continues to be the epicenter of the fiercest fighting in Ukraine, has deteriorated sha… [+2955 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "Rolling Stone"
  //      },
  //      "author": "Tomás Mier, Suzy Exposito",
  //      "title": "Lana Del Rey Cements Herself as a Cult Icon at Coachella - Rolling Stone",
  //      "description": "Lana Del Rey closed Friday night at Coachella with a career-spanning celebration in the desert, featuring Jon Batiste, Billie Eilish and Jack Antonoff",
  //      "url": "http://www.rollingstone.com/music/music-news/lana-del-rey-performs-coachella-2024-1235002460/",
  //      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/01/GettyImages-1812179956.jpg?w=1600&h=900&crop=1",
  //      "publishedAt": "2024-04-13T09:18:49Z",
  //      "content": "Lana Del Rey brought her ethereal Venus energy to the Coachella main stage as she closed out Friday night at the festival. This marked her first Coachella performance since 2014.\r\nSeated on the back … [+3559 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "BBC News"
  //      },
  //      "author": null,
  //      "title": "'No easy task' - The hunt for an impartial Trump jury in Manhattan - BBC.com",
  //      "description": "Prosecutors and Mr Trump's team will weed through hundreds of people in Manhattan as part of the hush money trial.",
  //      "url": "https://www.bbc.com/news/world-us-canada-68671730",
  //      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C515/production/_133135405_jurypic.png",
  //      "publishedAt": "2024-04-13T08:13:54Z",
  //      "content": null
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "New York Post"
  //      },
  //      "author": "Fox Business",
  //      "title": "US drug shortages hit all-time high, pharmacists warn - New York Post ",
  //      "description": "Data shows that there are 323 active drug shortages.",
  //      "url": "https://nypost.com/2024/04/13/lifestyle/us-drug-shortages-hit-all-time-high-pharmacists-warn/",
  //      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/04/newspress-collage-n1qxx51al-1712987418376.jpg?quality=75&strip=all&1712973053&w=1024",
  //      "publishedAt": "2024-04-13T07:03:00Z",
  //      "content": "Drug shortages in the US are at an all-time high, and some of the medications in short supply are life-saving chemotherapy drugs and emergency medications stored in hospitals, pharmacists warn. \r\nThe… [+2348 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "Nbcsportsbayarea.com"
  //      },
  //      "author": "Angelina Martin",
  //      "title": "Warriors, Kings' NBA play-in picture entering regular-season finales - Yahoo Sports",
  //      "description": "If the 2023-24 NBA season ended Friday, here's how the Western Conference's NBA Play-In Tournament bracket would look.",
  //      "url": "https://www.nbcsportsbayarea.com/nba/golden-state-warriors/play-in-picture-western-conference-standings-bracket/1723951/?partner=yahoo",
  //      "urlToImage": "https://media.zenfs.com/en/csnbayarea.com/6de6903cfa1f1bb319bc1ab793a85cee",
  //      "publishedAt": "2024-04-13T05:33:01Z",
  //      "content": "Warriors, Kings' NBA play-in picture entering regular-season finales originally appeared on NBC Sports Bay Area\r\nAnother day of NBA basketball came and went Friday, and both the Warriors and Kings lo… [+1708 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "MMA Fighting"
  //      },
  //      "author": "Bryan Tucker",
  //      "title": "UFC 300 Results: Pereira vs. Hill - MMA Fighting",
  //      "description": "Get UFC 300 results for the Pereira vs. Hill fight card Saturday in Las Vegas.",
  //      "url": "https://www.mmafighting.com/2024/4/13/24127738/ufc-300-results-pereira-vs-hill",
  //      "urlToImage": "https://cdn.vox-cdn.com/thumbor/afWQS5xhLgglT8iM_z0pM1UwtKY=/0x729:6417x4089/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25391958/2148454601.jpg",
  //      "publishedAt": "2024-04-13T04:00:00Z",
  //      "content": "MMA Fighting has UFC 300 results for the Pereira vs. Hill event, live blogs for the entire fight card, and more from the T-Mobile Arena in Las Vegas, Nev., on Saturday night.\r\nIn the main event, UFC … [+935 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "Www.geo.tv"
  //      },
  //      "author": "Web Desk",
  //      "title": "People fear going blind after witnessing Total Solar Eclipse without eye protection - Geo News",
  //      "description": "It hasn’t been long since the day when some lucky Earthlings witnessed this year’s Total Solar Eclipse but doctors, in areas that fell in the path of totality, have reported a surge in cases of...",
  //      "url": "https://www.geo.tv/latest/538866-people-fear-going-blind-after-witnessing-total-solar-eclipse-without-eye-protection",
  //      "urlToImage": "https://www.geo.tv/assets/uploads/updates/2024-04-12/l_538866_023754_updates.jpg",
  //      "publishedAt": "2024-04-13T03:51:00Z",
  //      "content": "Doctors see surge in eye-related injuries days after Total Solar Eclipse. \r\nIt hasnt been long since the day when some lucky Earthlings witnessed this years Total Solar Eclipse but doctors, in areas … [+1848 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": "cnn",
  //      "name": "CNN"
  //      },
  //      "author": "Natasha Bertrand, MJ Lee, Kevin Liptak, Samantha Waldenberg",
  //      "title": "US expects Iran to carry out direct attack on Israel, sources say, as Biden warns ‘don’t’ - CNN",
  //      "description": "The US expects that Iran will carry out strikes against multiple targets inside Israel in the coming days and is prepared to help intercept any weapons launched at its ally, sources tell CNN, as the Biden administration is on high alert for what could be the …",
  //      "url": "https://www.cnn.com/2024/04/12/politics/white-house-iran-threat-israel/index.html",
  //      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240412155509-biden-comments-on-iran-thumb-vpx.jpg?c=16x9&q=w_800,c_fill",
  //      "publishedAt": "2024-04-13T03:37:00Z",
  //      "content": "The US expects that Iran will carry out strikes against multiple targets inside Israel in the coming days and is prepared to help intercept any weapons launched at its ally, sources tell CNN, as the … [+9544 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "DW (English)"
  //      },
  //      "author": "Deutsche Welle",
  //      "title": "Argentina's Milei meets Elon Musk at Tesla factory - DW (English)",
  //      "description": "The two like-minded men bonded over free markets and the need to defend liberty. Argentina, which is undergoing economic reforms, is home to lithium deposits required for rechargeable batteries like those in Teslas.",
  //      "url": "https://www.dw.com/en/argentinas-milei-meets-elon-musk-at-tesla-factory/a-68809179",
  //      "urlToImage": "https://static.dw.com/image/68809150_6.jpg",
  //      "publishedAt": "2024-04-13T03:33:14Z",
  //      "content": "Argentine President Javier Milei met tech billionaire Elon Musk on Friday at a Tesla plant in Austin, Texas, where they agreed on the \"need to free markets.\"\r\nMusk shared an image of the two on his m… [+2332 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "Daily Beast"
  //      },
  //      "author": "Noah Kirsch",
  //      "title": "Truth Social Investors Try to Keep Hope Alive as Stock Tanks - The Daily Beast",
  //      "description": "But some are holding out hope that Donald Trump’s hyping of the company means better days are ahead.",
  //      "url": "https://www.thedailybeast.com/truth-social-investors-try-to-keep-hope-alive-as-stock-tanks",
  //      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1712942547/240412-trump-truth-social-stocks-tank-hero_qup4mr",
  //      "publishedAt": "2024-04-13T03:28:00Z",
  //      "content": "Donald Trumps acolytes gathered at Mar-a-Lago on Wednesday evening to celebrate the public listing of his social media firm, even as the companys stock continued to crater. Under the Palm Beach sky, … [+3581 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "CBS Sports"
  //      },
  //      "author": null,
  //      "title": "Arizona Coyotes players informed NHL franchise will be moving to Salt Lake City, per reports - CBS Sports",
  //      "description": "Salt Lake City will be home to the relocated Coyotes in 2024-25 and play in a renovated Delta Center",
  //      "url": "https://www.cbssports.com/nhl/news/arizona-coyotes-players-informed-nhl-franchise-will-be-moving-to-salt-lake-city-per-reports/",
  //      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/06/b1d75842-87cc-41b4-bf37-8fb787c25dc6/thumbnail/1200x675/38549e67bba15da778c0266bee90aabf/usatsi-20204236.jpg",
  //      "publishedAt": "2024-04-13T03:13:59Z",
  //      "content": "Arizona Coyotes GM Bill Armstrong told players Friday that the NHL franchise will be relocating to Salt Lake City next season, according to multiple reports.\r\nThe Coyotes currently play home games in… [+595 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": null,
  //      "name": "New York Post"
  //      },
  //      "author": "Mark Cannizzaro",
  //      "title": "Tiger Woods being 'right there' after making record Masters cut is something to celebrate - New York Post ",
  //      "description": "Even if he won’t come out and say so, you can bet making his 24th consecutive Masters cut is an accomplishment that Tiger Woods appreciates.",
  //      "url": "https://nypost.com/2024/04/12/sports/tiger-woods-making-record-masters-cut-is-something-to-celebrate/",
  //      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/04/newspress-collage-023qwboj0-1712973236203.jpg?quality=75&strip=all&1712960783&w=1024",
  //      "publishedAt": "2024-04-13T02:54:00Z",
  //      "content": "AUGUSTA, Ga. If, just a few years ago, you asked Tiger Woods a question about what an accomplishment it would be to make the cut at the Masters, youd be doing so at your own risk.\r\nWoods patented the… [+4694 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": "abc-news",
  //      "name": "ABC News"
  //      },
  //      "author": "JENNIFER SINCO KELLEHER Associated Press",
  //      "title": "Heavy rain across Kauai prompts rescues from floodwater - ABC News",
  //      "description": "Several people on the Hawaiian island of Kauai needed to be rescued from floodwaters during heavy rain, but there were no immediate reports of injuries",
  //      "url": "https://abcnews.go.com/US/wireStory/heavy-rain-kauai-prompts-rescues-floodwater-immediate-reports-109184908",
  //      "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
  //      "publishedAt": "2024-04-13T02:16:05Z",
  //      "content": "HONOLULU -- Several people on the Hawaiian island of Kauai needed to be rescued from floodwaters during heavy rain, authorities said Friday, but there were no immediate reports of injuries. \r\nHeavy r… [+1956 chars]"
  //      },
  //     {
  //          "source": {
  //      "id": "the-verge",
  //      "name": "The Verge"
  //      },
  //      "author": "Amrita Khalid",
  //      "title": "Galaxy AI features are coming to last-gen Samsung phones — including the S21 series - The Verge",
  //      "description": "Samsung’s flagship phones from 2022 will receive a special version of Galaxy AI in early May. Circle to Search and Magic Rewrite are also coming to select 2021 models.",
  //      "url": "https://www.theverge.com/2024/4/12/24128914/samsung-galaxy-ai-features-s21-s22-series-phones-update",
  //      "urlToImage": "https://cdn.vox-cdn.com/thumbor/3G6RLbAsOcXuy_X6HTvCs0sNRvY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23227009/vpavic_220201_5008_0040.jpg",
  //      "publishedAt": "2024-04-13T01:18:00Z",
  //      "content": "Galaxy AI features are coming to last-gen Samsung phones including the S21 series\r\nGalaxy AI features are coming to last-gen Samsung phones including the S21 series\r\n / Instant Slow-Mo will remain un… [+1343 chars]"
  //      }
  // ] 
  constructor(){
    super();
    this.state ={
      articles : [],
      loading : false,
      page : 1
    }

  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=53ff8004edd84e1dbc0f876111e5bbb1&page=1&pageSize=18";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles : parseData.articles});
  }
  previousHandle = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=53ff8004edd84e1dbc0f876111e5bbb1&page=${this.state.page -1}&pageSize=18`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page : this.state.page -1,
      articles : parseData.articles,
    })
  }
  nextHandle = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=53ff8004edd84e1dbc0f876111e5bbb1&page=${this.state.page +1}&pageSize=18`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page : this.state.page +1,
      articles : parseData.articles,
    })
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container my-3">
          <h2>Top-Headlines</h2>
          <div className="row">
            {this.state.articles.map((element)=>{
              return(            
              <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title?element.title.slice(0,40):""}
                description={element.description?element.description.slice(0,80):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                />
            </div>)
            })}
          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <=1} type="button" class="btn btn-dark" onClick={this.previousHandle}>&larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.nextHandle}>Next &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}
