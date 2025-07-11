// 1 - Fetch and show categories on html

// create loadCegories
const loadCategories = () =>{
      //fetch the date 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

//Create DisplayCategories
const DisplayCategories = (Data) => {
      //add data in html
}

loadCategories();