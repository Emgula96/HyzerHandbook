
const myBagDiscs = document.querySelector('.myBagDiscs')


window.onload = () =>{
    const myBagArr = JSON.parse(window.localStorage.getItem('userChoice'));
    if (myBagArr.length > 0){
        for (let i = 0; i < myBagArr.length; i++) {
            const disc = myBagArr[i]
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
            const delBtn = document.createElement('button')
            name.innerHTML = disc.name
            brand.innerHTML = `Mfr: ${disc.brand}`
            category.innerHTML = `Type: ${disc.category}`
            fl1.innerHTML = `Flight Numbers: ${disc.speed} |`
            fl2.innerHTML = ` ${disc.glide} |`
            fl3.innerHTML = ` ${disc.turn} |`
            fl4.innerHTML = ` ${disc.fade} `
            delBtn.innerHTML = 'Remove from bag'
            const thingToRemove = disc.name
            pic.src = disc.pic
            flContainer.append(fl1,fl2,fl3,fl4)
            list.append(name,brand,category,flContainer,pic,delBtn)
            list.classList = 'disc'
            myBagDiscs.append(list)
            delBtn.onclick = () => {removeBtn(thingToRemove)}
        };
    }
    else{
        const emptpysign = document.createElement('h1')
        emptpysign.classList = 'emptySign'
        emptpysign.innerHTML = 'Your Bag is Empty'
        myBagDiscs.append(emptpysign)
    }
};

const removeBtn = (thingToRemove) => {
    const myBagArr = JSON.parse(window.localStorage.getItem('userChoice'));
    const filteredBag = myBagArr.filter(disc => disc.name !== thingToRemove)
    console.log(filteredBag)
    localStorage.setItem(
        "userChoice", JSON.stringify(filteredBag))
    location.reload()
};

