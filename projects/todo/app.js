var idArr = []
var list = document.getElementById('list')
var form = document.getElementById('add-form')
var editForm = document.getElementById('edit-form')
var checkCounter = 0;

function Item(title, price, description, thumbnail){
    this.title = title
    this.price = price
    this.description = description
    this.imgUrl = thumbnail
    this.completed = false
}

// get request
axios.get("https://api.vschool.io/vlad/todo/").then(function(response) {
//    console.log(response.data[0].imgUrl)
    displayData(response)
}).catch(function(error){
    console.log(error)
})

/**
 *  GET REQUEST
 *  displayData() takes all objects in API and displays it in the list container
 */
function displayData(item){
    var info = item.data
    var temp = []
    for(var i = 0; i < info.length; i++){
        // list item id - pushing id's to global id array
        var id = info[i]._id
        idArr.push(id)

        displayListItem(info[i].title, info[i].description, info[i].price, id, info[i].imgUrl)

    }
}

/**
 * displayListItem displays a single item
 */
function displayListItem(t, p, d, id_, imgs){
    // console.log('displayListItem imgs: ' + imgs)
    // create parent div for object properties
    var newDiv = document.createElement('div')
    // add to row classes and assign id
    newDiv.classList.add('list-items')
    newDiv.id = id_

    // create new li elements for object properties
    // select
    var select = document.createElement('button')
    select.textContent = 'X'
    select.style.color = '#d63031'
    select.style.border = '1px solid #d63031'
    select.style.backgroundColor = '#d6303136'
    select.style.borderRadius = '5%'
    select.id = 'btn-delete'
    select.setAttribute('onclick', "deleteItem(this)")

    var edit = document.createElement('button')
    edit.textContent = 'edit'
    edit.style.color = '#e17055'
    edit.style.backgroundColor = '#e1705536'
    edit.style.border = '1px solid #e17055'
    edit.style.borderRadius = '5%'
    edit.id = 'btn-edit'
    edit.setAttribute('onclick', "editItem(this)")

    // imgUrl
    var thumbnail = document.createElement('img')
    thumbnail.setAttribute("src", imgs)

    // price
    var price = document.createElement('li')

    // title
    var title = document.createElement('li')

    // description
    var description = document.createElement('li')

    // done
    var check = document.createElement('input')
    check.setAttribute("type", "checkbox")
    check.setAttribute("name", "isCompleted")
    check.setAttribute("class", "isCompleted-" + checkCounter)
    check.classList.add("checks")
    check.setAttribute("onchange", "isDone(this)")
    checkCounter++

    // display text on list items
    title.textContent = t
    
    description.textContent = p
    price.textContent = '$' + d
    price.value = d
    
    // attaching list elements to parent div
    newDiv.appendChild(check)
    newDiv.appendChild(thumbnail)
    newDiv.appendChild(price)
    newDiv.appendChild(title)
    newDiv.appendChild(description)
    newDiv.appendChild(edit)
    newDiv.appendChild(select)
    
    
    // attaching parent div to list container
    list.appendChild(newDiv)
}

// POST Request
form.addEventListener('submit', function(e) {
    e.preventDefault()

    var thumbnail = form.thumbnail.value
    var title = form.title.value
    var price = form.price.value
    var description = form.description.value

    // create new Item object
    var newReq = new Item(title, price, description, thumbnail)

    // POST Request
    axios.post(`https://api.vschool.io/vlad/todo/`, newReq).then(function(res){
        displayListItem(res.data.title, res.data.description, res.data.price, res.data._id, res.data.imgUrl)
    })

    document.querySelector('.form-container').style.display = 'none'
})

function isDone(check){
    if(check.checked){
        var parent = check.parentNode.id
        document.getElementById(parent).style.textDecoration = 'line-through'
    } else {
        var parent = check.parentNode.id
        document.getElementById(parent).style.textDecoration = 'none'
    
    }
}


var deleteId;

// function isSelected(check) {
//     if(check.checked){
//         deleteId = check.parentNode.id
//     }
// }

function deleteItem(curr) {
    deleteId = curr.parentNode.id
    axios.delete(`https://api.vschool.io/vlad/todo/${deleteId}`)
    var elem = document.getElementById(deleteId)
    elem.parentNode.removeChild(elem)
}

// document.getElementById('btn-edit').addEventListener('click', function(){

// })
var editId
function editItem(curr){
    document.querySelector('.edit-container').style.opacity = '1'
    document.querySelector('.edit-container').style.top = '50%'
    id = curr.parentNode.id
    editId = id;
    

    var listItems = document.getElementById(id).children
    var srcF = document.getElementById('src-field')
    var itemF = document.getElementById('item-field')
    var priceF = document.getElementById('price-field')
    var descF = document.getElementById('desc-field')

    srcF.value = listItems[1].src 
    itemF.value = listItems[3].textContent
    priceF.value = listItems[2].value
    descF.value = listItems[4].textContent
    //title, price, description, thumbnail
}


editForm.addEventListener('submit', function(e){
    e.preventDefault()

    var thumbnail = editForm.thumbnail.value
    var title = editForm.title.value
    var price = editForm.price.value
    var description = editForm.description.value

    var updatedReq = new Item(title, price, description, thumbnail)
    axios.put(`https://api.vschool.io/vlad/todo/${editId}`, updatedReq).then(function(res) {
        updateList(res, editId)
    })
document.querySelector('.edit-container').style.display = 'none'
})



function updateList(res, id){
    console.log(res.data)
    var listItems = document.getElementById(id).children
    console.log(listItems)

    var srcF = listItems[1]
    var priceF = listItems[2]
    var itemF = listItems[3]
    var descF = listItems[4]

    srcF.src = res.data.imgUrl
    itemF.textContent = res.data.title
    priceF.textContent= '$' + res.data.price
    priceF.value= res.data.price
    descF.textContent = res.data.description
}


document.getElementById('btn-close').addEventListener('click', function(){
    document.querySelector('.form-container').style.opacity = '0'
    document.querySelector('.form-container').style.top = '-1000%'
})
document.getElementById('btn-close1').addEventListener('click', function(){
    document.querySelector('.edit-container').style.opacity = '0'
    document.querySelector('.edit-container').style.top = '-1000%'
})

document.getElementById('btn-add').addEventListener('click', function(){
    document.querySelector('.form-container').style.opacity = '1'
    document.querySelector('.form-container').style.top = '50%'
})
