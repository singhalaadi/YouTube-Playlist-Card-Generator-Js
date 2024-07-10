function createCard(title, chName, views, uploaded, duration, thumbnail){
    if (views >= 1000000){
        views = views / 1000000 + "M";
    }
    else if (views >= 1000){
        views = views / 1000 + "K";
    }
    let html=`<div class="card">
            <div class="thumbnail">
                <div class="image">
                    <img src="${thumbnail}" alt="">
                </div>
                <div class="duration">${duration}</div>
            </div>
            <div class="content">
                <div class="title">${title}</div>
                <div class="details">${chName} . ${views} views . ${uploaded} months ago</div>
            </div>
        </div>`
    // document.querySelector(".duration").innerHTML = duration;
    // document.querySelector(".title").innerHTML = title;
    // document.querySelector(".details").innerHTML = chName + " . " + views + " views . " + uploaded + " months ago";
    // document.querySelector(".image").src = thumbnail;
    document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html;
}
createCard("Your First HTML Website | Sigma Web Development Course - Tutorial #2 ", "CodeWithHarry", 864000, 9, "28:31", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCA3_MiIeOkWOlW_VvWSqOu4QXog");

console.log(createCard("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 552000, 9, "11:12", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU6JoPQWKp2DXPxO769WDRQkV_fQ"));

console.log(createCard("Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4", "CodeWithHarry", 490000, 9, "19:34", "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRMTjSa3HIEUveiXdFI6rIQTwXAg"));

console.log(createCard("Image,Lists and Tables in HTML | Sigma Web Development Course - Tutorial #5", "CodeWithHarry", 490000, 9, "18:20", "https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsitrd6EXQBOmKrWE6y_AC74tDXQ"));

console.log(createCard("SEO and Core Web Vitals in HTML | Sigma Web Development Course - Tutorial #6", "CodeWithHarry", 383000, 9, "13:16", "https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1R2PKIPQMWoH2j-NKBuRSlJjFRw"));

console.log(createCard("Forms and input tags in HTML | Sigma Web Development Course - Tutorial #7", "CodeWithHarry", 359000, 9, "14:53", "https://i.ytimg.com/vi/tLBlhp0SA_0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAy7y3QAbirjBNN7PzUhjdXaM9MZg"));
 