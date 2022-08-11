
const discList = document.getElementById('discList');
const searchBar = document.getElementById('searchBar');
let golfDiscs = [];

searchBar.addEventListener('keyup',(event) => {
    const searchDisc = event.target.value.toLowerCase();
    const filteredDiscs = golfDiscs.filter((disc) =>{
        return(
            disc.name.toLowerCase().includes(searchDisc) || disc.brand.toLowerCase().includes(searchDisc) ||
            disc.category.toLowerCase().includes(searchDisc) || disc.speed.includes(searchDisc)
            );
        });
        displayDiscs(filteredDiscs)
        
    });




const loadDiscs = async () => {
    try {
        const res = await fetch('https://discitapi.herokuapp.com/disc');
        golfDiscs = await res.json();
        displayDiscs(golfDiscs);
    } catch (err) {
        console.error(err);
    }
};

const addToBag = (disc) =>{
    const myBag = JSON.parse(window.localStorage.getItem('userChoice')) || [] 
    myBag.push(disc)
    localStorage.setItem(
        "userChoice", JSON.stringify(myBag)
    )
};





const displayDiscs = (discs) =>{
    discList.innerHTML = ""
    for (let i = 0; i < discs.length; i++) {
        const disc = discs[i]
        const list = document.createElement('li')
        const name = document.createElement('h2')
        const brand = document.createElement('h3')
        const category = document.createElement('h4')
        const flContainer = document.createElement('div')
        const fl1 = document.createElement('span')
        const fl2 = document.createElement('span')
        const fl3 = document.createElement('span')
        const fl4 = document.createElement('span')
        const pic = document.createElement('img')
        const addBtn = document.createElement('button')
        addBtn.onclick = () => {
          addToBag(disc)
          addBtn.innerHTML = 'In Bag'
          addBtn.style.background = 'green';
          addBtn.style.transition = '1s'
        }
        name.innerHTML = disc.name
        brand.innerHTML = `Mfr: ${disc.brand}`
        category.innerHTML = `Type: ${disc.category}`
        fl1.innerHTML = `Flight Numbers: ${disc.speed} |`
        fl2.innerHTML = ` ${disc.glide} |`
        fl3.innerHTML = ` ${disc.turn} |`
        fl4.innerHTML = ` ${disc.fade} `
        pic.src = disc.pic
        addBtn.innerHTML = 'Add to Bag'
        flContainer.append(fl1,fl2,fl3,fl4)
        list.append(name,brand,category,flContainer,pic,addBtn)
        list.classList = 'disc'
        discList.append(list)
    };
      
};
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


loadDiscs();
