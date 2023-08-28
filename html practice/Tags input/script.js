const ul = document.querySelector('ul'),
    input = ul.querySelector('.input'),
    removeAll = document.querySelector('.remove-all')

input.onkeyup = (e) => {

    if (e.key == 'Enter') {

        let regex = /[a-zA-z0-9-+]/g;
        let values = input.value.trim().split(' ')

        values.forEach(value => {

            if (value.trim().match(regex) && value.trim().length != 0 && value.trim().length != '') {

                let tag = document.createElement('li')
                tag.classList.add('tag')
                tag.innerHTML = `${value}<i class="fa-solid fa-xmark cancel"></i>`

                ul.insertBefore(tag, input)
                readChilds()

            }

        })

        input.value = ''

    }

}

ul.onclick = (e) => {

    if (e.target.classList.contains('cancel')) {

        let tag = e.target.parentElement
        ul.removeChild(tag)
        readChilds()


    }
}

removeAll.onclick = () => {

    let tags = ul.children;
    Array.from(tags).forEach(tag => {

        if (tag.classList.contains('tag')) {

            ul.removeChild(tag)
            readChilds()

        }

    })

}

function readChilds() {

    const remaining = document.querySelector('.remaining')
    remaining.innerText = ul.children.length - 1;

}

readChilds()