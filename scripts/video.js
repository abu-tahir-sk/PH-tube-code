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
const loadDetails = async (videoId) => {
  console.log(videoId)
  const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  const res = await fetch(uri);
  const data = await res.json();
  displayDetails(data.video);
};
const displayDetails = (video) => {
  console.log(video);
  const detailContainer = document.getElementById('modal-content');
  
  detailContainer.innerHTML = `
  <img src=${video.thumbnail} />
  <p>
  ${video.description}
  </p>
  `
  //way-1
  // document.getElementById('show-modal-data').click();
  //way-2
  document.getElementById('customModal').showModal();
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

const loadCategoryVideos = (id) =>{
   fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
   .then((res) => res.json())
   .then((data) => {
    removeActiveClass();
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add('active');
    DisplayVideos(data.category)
   })
   .catch((error) => console.log(error));
}


//Create DisplayVideos
const DisplayVideos = (videos) => {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = "";

    if(videos.length === 0){
        videosContainer.classList.remove('grid')
        videosContainer.innerHTML = `<div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
        <img src="assets/Icon.png"/>
        <h2 class="text-center text-xl font-bold">
        No Content Here in this Categery
        </h2>
        </div>
        `;
        return;
    }else{
        videosContainer.classList.add('grid')
    }

    videos.forEach((video) => {
        console.log(video)
        // creat card
        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML = `
        <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length === 0 ? "" : `<span class="absolute right-2 bottom-2 bg-slate-900 text-gray-200 text-xs px-2 rounded">${getTimeString(video.others.posted_date)}</span>`

      }
      
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
    ${video.authors[0].verified === true ? '<img class="w-5" src="https://img.icons8.com/?size=100&id=63760&format=png&color=000000"/>' : ""
    }
    </div>
    <p>
    ${video.others.views}
    <button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">
    details
    </button>
    </p>
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
      const buttonContainer = document.createElement('div');
      buttonContainer.innerHTML = `
      <button onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn" id="btn-${item.category_id}">
      ${item.category}
      </button>
      `;
      //cate button to category container
      categoriesContainer.append(buttonContainer);
     });
}

loadCategories();
loadVideos();
