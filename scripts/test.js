
function getTimeString(time){
    const hour = parseInt(time / 3600);
    let reminingScod = time % 3600;
      const minute = parseInt(reminingScod / 60);
      reminingScod = reminingScod % 60;
    return `${hour} : ${minute} : ${reminingScod} `;
};

const removeActiveClass = () => {
  const buttons = document.getElementsByClassName('category-btn');
  console.log(buttons);
  for(let btn of buttons){
    btn.classList.remove('active')
  }
}
