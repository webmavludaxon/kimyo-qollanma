let elTabList = document.querySelector('.table__list')
let elTabListBot = document.querySelector('.table__list__bot')
let elTabListBot2 = document.querySelector('.table__list__bot2')
let elModBody = document.querySelector('.modal-body')
let elloading = document.querySelector('.loading')
let elWrapper = document.querySelector('.wrapper')

data.forEach((item, index)=>{
    let newLi = document.createElement('li')
    newLi.classList = 'table__item'
    newLi.setAttribute("data-aos","flip-left")
    newLi.innerHTML = `
            <div  data-bs-toggle="modal"  data-bs-target="#exampleModal" onclick="handlerId('${item.tr}')" class="table__modda">
                   <div  class="modda__inner" >
                        ${item.tr}
                        <span>${item.name}</span>
                    </div>
                    ${item.str?"<h4>"+ item.str +"</h4>" :"<h2>" +item.ic +"</h2>"}
                    <p>${Math.floor(item.am)} </p>
                </div>
    `
    if(item.id > 56 &&  item.id < 72 ){
        newLi.classList = 'table__item__bot'
        elTabListBot.appendChild(newLi)
        
    }else if(item.id >= 89 &&  item.id <= 103){
        newLi.classList = 'table__item__bot2'
        elTabListBot2.appendChild(newLi)
    } 
    else{
        elTabList.appendChild(newLi)
    }
})


function handlerId(id){
    let finItem =  data.find((item)=> item.tr == id)
    document.querySelector('#exampleModalLabel').innerHTML = `${finItem.name}` + `<h2>${finItem.ic}</h2>`
    elModBody.innerHTML = `
    <p class="w-75 modal__dic ">
            ${finItem.dic}
          </p>
          <div class="modal__info">
            <ul class="info__list">
                <li class="info__item d-flex">
                    <p>Atom raqami</p>
                    <span>${finItem.tr}</span>
                </li>
                <li class="info__item d-flex">
                    <p>Koʻrinishi</p>
                    <span>${finItem.korinishi}</span>
                </li>
                <li class="info__item d-flex">
                    <p>Atom massasi</p>
                    <span>${finItem.am}</span>
                </li>
                <li class="info__item d-flex">
                    <p>Atom radiusi</p>
                    <span>${finItem.ar}</span>
                </li>
                <li class="info__item d-flex">
                    <p>Ionlashish energiyasi</p>
                    <span>${finItem.ie}</span>
                </li>
                <li class="info__item d-flex">
                    <p>Elektron konfiguratsiyasi</p>
                    <span>${finItem.ek}</span>
                </li>
            </ul>
    `
}




document.addEventListener('scroll', (evn)=>{
    if(window.scrollY > 556){
        console.log('ok');
    }
})

