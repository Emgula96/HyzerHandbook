# The Hyzer Handbook


The Hyzer Handbook is your personalized dic golf bag builder and disc library! Search through over 800 different golf discs, add them to your bag, and build your perfect bag for casual or competetive play!

Hyzer Handbook was created using  Java Script, HTML, CSS, and some bootstrap elements.   



<img src = ".\images\websitescreenshot.jpg">

## Tools used in the project:

### Languages:
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

### Other
<ul>
    <li>Node.js</li>
    <li>Postman</li>
    <li>Bootstrap</li>
    <li>Chrome DevTools</li>
</ul>

### APIs 
<ul>
    <li>DiscIT api - https://discitapi.herokuapp.com/</li>
</ul>

## Goals

### Base Goals
<ul>
    <li>Gain familiarity with working with an API</li>
    <li>Grow in familiarity with CSS</li>
    <li>Use more complex java script functions/logic that we did not learn in class</li>
    <li>Users can search discs by mutiple keywords, with an auto filtering library below.</li>
    <li>Users can add discs to bag</li>
    <li>Users can remove discs from bag</li>
</ul>

### Stretch Goals

<ul>
    <li>Discs can be displayed as "In Bag" in the library on load. </li>
    <li>Discs in "My Bag" can be organized by type.</li>
    <li>Multiple search bars in the "Disc Library" to be more precise in searching.</li>
</ul>

### Future Goals 

<ul>
    <li>Users can create multiple bags, depending on weather or course</li>
    <li>Add live course weather API for the featured courses section</li>
    <li>Re-optimized sidebar</li>
    <li>More effecient CSS</li>
</ul>

## Challenges and Solutions

#### Solo Project Planning:
This project proved to be the most difficult at the beginning. I took several hours trying to decide what I wanted to do and how I wanted it to look. I then had to go and search for an API that would allow my project to be sucessful. I spent the first few hours setting up an minimal viable product on paper and aimed to just work on one small thing at a time. This preliminary plan allowed me to meet all of my goals and help me stay on task and not fall behind.

Any hangups were handled by referencing my notes, then google searching, and finally by asking for help from my teacher/TA. Particular thanks to Joe Fraiser and Violet for their assistance.  

#### Vanilla vs Framework:
Our parameters were very loose on whether or not we could use a CSS framework such as: tailwind, bulma, or bootstrap. Since I wanted to build my CSS chops I decided to code most of my project in vanilla HTML, CSS, and JS. It took a little bit more time, but I liked having complete control over my elements and being able to see what style elements were being added where. 

#### Working with an API:
DiscIT API was great to work with and it contained all of the data I needed. Where I struggled was saving what the user would select to local storage. This was the biggest blocker for my project and when I figured out how local storage worked the rest of the project was a breeze. I am thankful I decided to use local storage as it was not something we went over during classtime. I now have the experience working with it and can have more confidence now that it is in my developer toolbox for future projects.

## Code Snippets

Async functionc, event handler, and creating elements via JS:
```
const loadDiscs = async () => {
    try {
        const res = await fetch('https://discitapi.herokuapp.com/disc');
        golfDiscs = await res.json();
        displayDiscs(golfDiscs);
    } catch (err) {
        console.error(err);
    }
};

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
```

use of local storage to add or remove items:
```
const addToBag = (disc) =>{
    const myBag = JSON.parse(window.localStorage.getItem('userChoice')) || [] 
    myBag.push(disc)
    localStorage.setItem(
        "userChoice", JSON.stringify(myBag)
    )
};

const removeBtn = (thingToRemove) => {
    const myBagArr = JSON.parse(window.localStorage.getItem('userChoice'));
    const filteredBag = myBagArr.filter(disc => disc.name !== thingToRemove)
    console.log(filteredBag)
    localStorage.setItem(
        "userChoice", JSON.stringify(filteredBag))
    location.reload()
};
```

Bootstrap and custom components:
```
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

.nav-links ul li:hover::after{
    width: 100%;
}
.text-box{
    width: 90%;
    color: whitesmoke;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
```
