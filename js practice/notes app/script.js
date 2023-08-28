const form = document.querySelector('form'),
     saveBtn = document.querySelector('button.save'),
      cards = document.querySelector('.cards'),
      firstInput = document.querySelector('#title'),
      secondInput = document.querySelector('#note'),
      SearchInput =  document.querySelector('.search input'),
      SearchButton =  document.querySelector('.search button'),
      SearchIcon =  document.querySelector('.search-icon'),
      SearchContainer = document.querySelector('.search'),
      navbar = document.querySelector('.navbar'),
      noSearch = document.querySelector('.no-search'),
      SearchSpan = document.querySelector('.no-search span');

saveBtn.onclick = ()=> {
    let title = document.querySelector('#title').value.trim(),
        note = document.querySelector('#note').value.trim(),
        error = document.querySelector('.error');
        if(title.length < 3 || note.length < 3){
           error.style.display = 'block';   
        }else{
            error.style.display = 'none';
            let card = `
            <div class="card" data-title=${title.replace(' ' , '-')}>
            <div class="title">
                <h1>${title}</h1>
            </div>
            <div class="text">
                <p>${note}</p>
            </div>
            <div class="update">
                <button class="update-btn" onclick='update(this)'>Update</button>
                <button class="delete-btn" onclick='Delete(this)'>Delete</button>
            </div>
        </div>
            `; 
            cards.insertAdjacentHTML('beforeend' , card);
            firstInput.value = '';
            secondInput.value = '';
            NODATA();
            SaveNotes();
        }
}
function update(target){
    window.scrollTo(0 , 0);
    let grandparent = target.parentElement.parentElement;
    let title = grandparent.querySelector('.title h1');
    let text = grandparent.querySelector('.text p');
    firstInput.value = title.innerHTML;
    secondInput.value = text.innerHTML;
    grandparent.parentElement.removeChild(grandparent);
    NODATA();
}

function Delete(target){
    let grandparent = target.parentElement.parentElement;
    grandparent.parentElement.removeChild(grandparent);
    NODATA();
    SaveNotes();
}
function NODATA(){
    let cards = document.querySelector('.cards');
    let noData = document.querySelector('.NO-DATA');
    let cardsChilds = cards.children;
    if(cardsChilds.length == 0){
        noData.style.display = 'block';
    }else{
        noData.style.display = 'none';
    }
}
NODATA();

const SaveNotes = ()=>{
    const titles = document.querySelectorAll('.title h1'),
          texts = document.querySelectorAll('.text p');
    let TitleData = [];
    let TextData = [];
    titles.forEach(title =>{
        TitleData.push(title.innerText);
    })
    texts.forEach(text =>{
        TextData.push(text.innerText);
    })
    localStorage.setItem('title' , JSON.stringify(TitleData));
    localStorage.setItem('text' , JSON.stringify(TextData));
}
(function(){
    let TITLE = JSON.parse(localStorage.getItem('title')),
        TEXT = JSON.parse(localStorage.getItem('text'));

        for(i=0;i < TITLE.length;i++){
            let card = `
            <div class="card" data-title=${TITLE[i].replace(' ' , '-')}>
            <div class="title">
                <h1>${TITLE[i]}</h1>
            </div>
            <div class="text">
                <p>${TEXT[i]}</p>
            </div>
            <div class="update">
                <button class="update-btn" onclick='update(this)'>Update</button>
                <button class="delete-btn" onclick='Delete(this)'>Delete</button>
            </div>
        </div>
            `; 
            cards.insertAdjacentHTML('beforeend' , card);
            NODATA();
        }

})()

window.onclick = (e)=>{
    let target = e.target;
    if(target == SearchIcon || target == SearchIcon.querySelector('i')){
        navbar.classList.add('active');
    }else if(target != SearchIcon && target != SearchContainer.querySelector('input') && target != SearchContainer.querySelector('button')){
        navbar.classList.remove('active');
    }
}
window.onscroll = ()=>{
    navbar.classList.remove('active');
}
SearchButton.onclick = ()=>{
    let all_cards =  document.querySelectorAll('.card');
    let SearchValue =  SearchInput.value.toLowerCase().trim().replace(' ' , '-');
    let t1 = false;
    all_cards.forEach(card=>{
        card.style.display = 'none';
        let attr = card.getAttribute('data-title').toLowerCase().trim();
        if(SearchValue == attr && SearchValue.length > 0){

            card.style.display = 'block';
            t1 = true;
        }
    })
    if(t1 == false){
        NOSEARCH(SearchValue);
    }else{
        noSearch.style.display = 'none';
    }
}
SearchInput.oninput = ()=>{
    let all_cards =  document.querySelectorAll('.card');
    if(SearchInput.value.length == 0){
        all_cards.forEach(card=>{
            card.style.display = 'block';
            noSearch.style.display = 'none';
        })
    }
}
function NOSEARCH(search){
    SearchSpan.innerText = search;
    noSearch.style.display = 'block';
}