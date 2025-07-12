// 1 - Fetch and show categories on html

// create loadCegories
const loadCategories = () =>{
      //fetch the date 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => DisplayCategories(data.categories))
    .catch((error) => console.log(error));
}
//create loadVideos
const loadVideos = () =>{
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => DisplayVideos(data.videos))
    .catch((error) => console.log(error));
}
// card demo
const cardDemo = {
    "category_id": "1001",
    "video_id": "aaad",
    "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
    "title": "Smells Like Teen Spirit",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
            "profile_name": "Oliver Harris",
            "verified": true
        }
    ],
    "others": {
        "views": "5.4K",
        "posted_date": "1672656000"
    },
    "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
}

//Create DisplayVideos
const DisplayVideos = (videos) => {
    const videosContainer = document.getElementById('videos')

    videos.forEach((video) => {
        console.log(video)
        // creat card
        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML = `
        <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
   <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}
    </p>
    <img class="w-5" src="https://img.icons8.com/?size=100&id=63760&format=png&color=000000"/>
    </div>
  </div>
        `;
        videosContainer.append(card)

    })
}
//Create DisplayCategories
const DisplayCategories = (categories) => {
      const categoriesContainer = document.getElementById('categories-Container')

     categories.forEach((item) => {
        console.log(item);
      // create a button 
      const button = document.createElement('button');
      button.classList = 'btn';
      button.innerText = item.category;
      
      //cate button to category container
      categoriesContainer.append(button);
     });
}

loadCategories();
loadVideos();
