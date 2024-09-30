const searchForm = document.getElementById("search-form");

const searchBox = document.getElementById("search-box");

const searchresult = document.getElementById("search-result");

const showMore = document.getElementById("show-more-btn");

let keyword="";
let page=1;
const accesskey="l5jGC_lnoNul5Ai4HsnnM7J-wwyg-Ze4XqvB_XcYRR0";

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    if(page === 1){
        searchresult.innerHTML="";
    }

    const results = data.results;
    // console.log(results);

    results.map((result) =>{
       const image = document.createElement("img");
       image.src = result.urls.small; 

       const imageLink = document.createElement("a");
       imageLink.href = result.links.html;
       imageLink.target = "_blank";

       imageLink.appendChild(image);
       searchresult.appendChild(imageLink);
    })

    showMore.style.display = "block";

    
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener("click", ()=>{
    page++;
    searchImages();
})