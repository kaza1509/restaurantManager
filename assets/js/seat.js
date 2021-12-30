//------------------ Tạo ra bàn ----------------------
let table = document.getElementsByClassName('table')[0]
let createTable = (color) => {
    return `<div class="table-item__chair">
    <span></span>
    <span></span>
    </div>

    <div class="table-item__mid ${color}">

    </div>

    <div class="table-item__chair">
    <span></span>
    <span></span>
    </div>`
}

for (let i = 0; i < 6; i++) {
    let div = document.createElement('div')
    div.className = 'table-item'

    // if(i == 0) {
    //     div.innerHTML = createTable('table--green')
    // }
    // else if(i == 1) {
    //     div.innerHTML = createTable('table--red')
    // }
    // else if(i == 2) {
    //     div.innerHTML = createTable('table--yellow')
    // }
    // else {
    //     div.innerHTML = createTable('table--grey')
    // }

    // random color table
    let ranColor = ['table--green', 'table--red', 'table--yellow', 'table--grey']
    let ranNum = Math.floor(Math.random() * 4)
    div.innerHTML = createTable(ranColor[ranNum])
    // append table
    table.appendChild(div)
}

//-------- xử lí nút done và tắt mở table box -------
//table-item
let tableItem = document.getElementsByClassName('table-item')
//done button
let done = document.getElementsByClassName('done')[0]
//table-box
let tableBox = document.getElementById('table-box')
//click table
let tableItemMid = document.getElementsByClassName('table-item__mid')
//save index
let index = 0
let tableIndex = document.getElementsByClassName('table-index')[0]
//table-status
let tableStatus = document.getElementsByClassName('table-status')[0]
//time-out
let tableTimeOut = document.getElementsByClassName('table-timeout')[0]
//bill
let bill = document.getElementsByClassName('bill')[0]
//delete-button
let deleteButton = document.getElementsByClassName('delete')[0]

//---------------- change_status_butotn --------------------
// change status box
//close
let closeChangeStatus = document.getElementsByClassName('close-change-status')[0]
//pop up change status
let popChangeStatus = document.getElementsByClassName('table__change-status')[0]
//button change status
let buttonChangeStatus = document.getElementsByClassName('change-status')[0]

//----------------- create table -------------
let createY = document.getElementsByClassName('createY')[0]
let createN = document.getElementsByClassName('createN')[0]
let tableAdd = document.getElementById('table-add')
let popUpCreate = document.getElementsByClassName('popup-create')[0]
let nameTable = document.querySelector('.popup-create div:first-child')
//---------------------------------------------

// ----------------------------------------------------------

// table box main
//lúc đầu chưa mở
let isOpen = false
function onOfTableBox() {

    for (let i = 0; i < tableItemMid.length; i++) {
        //mở box
        tableItemMid[i].addEventListener('click', () => {
            index = i
            // console.log(index);
            //kiểm tra xem mở rồi thì không mở nữa
            if(isOpen == true) return

            //lấy index của i và set index bàn
            tableIndex.innerHTML = `Table ${i + 1}`

            //set sự thay đổi của mỗi bàn theo màu 
            // console.log(index);
            let classColor = tableItemMid[i].className.split(' ')[1].trim()
            // console.log(classColor);
            if(classColor == 'table--green') {
                //trạng thái bàn
                tableStatus.style.backgroundColor = '#1CC136'
                //Nội dung trạng thái
                tableStatus.innerHTML = 'Free'
                //không hiện time out
                tableTimeOut.style.display = 'none'
                //không thể sử dụng được chức năng Bill
                bill.style.backgroundColor = '#fff'
            }
            else if(classColor == 'table--red') {
                tableStatus.style.backgroundColor = '#DB1616'
                tableStatus.innerHTML = 'Occupied'
                tableTimeOut.style.display = 'none'
                //có thể sử dụng được chức năng Bill
                bill.style.backgroundColor = '#34AED4'
            }
            else if(classColor == 'table--yellow') {
                tableStatus.style.backgroundColor = '#FFED47'
                tableStatus.innerHTML = 'Reserved'
                tableTimeOut.style.display = 'block'
                //không thể sử dụng được chức năng Bill
                bill.style.backgroundColor = '#fff'
            }
            else if(classColor == 'table--grey'){
                tableStatus.style.backgroundColor = '#484848'
                tableStatus.innerHTML = 'Out Of Order'
                tableTimeOut.style.display = 'none'
                //không thể sử dụng được chức năng Bill
                bill.style.backgroundColor = '#fff'
            }

            tableBox.style.display = 'flex'

            isOpen = true

            //change number table
            document.querySelector('.table__change-status h1').innerHTML = `Change status for table ${index+1}`

            
        })
        // đóng box
        done.addEventListener('click', () => {
            if(isOpen == false) return
            tableBox.style.display = 'none'
            
            tableBox.style.transition = 'all 1s linear'
            isOpen = false
        })

    }
}


// delete 
let dele = document.getElementsByClassName('delete')[0]
let deleteTable = () => {
    dele.addEventListener('click', () => {
        tableBox.style.display = 'none'
        isOpen = false
    
        tableItem[index].parentElement.removeChild(tableItem[index])
    
        onOfTableBox()
        countTable()
    })
}
deleteTable()

//------------------ footer --------------

//count table
let countTable = () => {
    let countGreen = 0, countYellow = 0, countRed = 0, countGrey = 0

    for (let i = 0; i < tableItemMid.length; i++) {
        //get color
        let classColor = tableItemMid[i].getAttribute('class').split(' ')[1].trim()
        if(classColor == 'table--green') {
            countGreen++;
        }
        else if(classColor == 'table--yellow') {
            countYellow++
        }
        else if(classColor == 'table--red') {
            countRed++
        }
        else if(classColor == 'table--grey') {
            countGrey++;
        }
    }
    let count = document.getElementsByClassName('count')
    count[0].textContent = `Avaible: ${countGreen}`
    count[1].textContent = `Reserved: ${countYellow}`
    count[2].textContent = `Occupied: ${countRed}`
    count[3].textContent = `Out of Order: ${countGrey}`
}
//--------------------- change status button --------------------

//đóng pop up change status
closeChangeStatus.addEventListener('click', () => {
    popChangeStatus.style.display = 'none'
    //count lại table
    countTable()
})

//mở pop up change status
buttonChangeStatus.addEventListener('click', () => {
    popChangeStatus.style.display = 'block'
    tableBox.style.display = 'none'
    isOpen = false
})

// change color table js
let changeColors = document.querySelectorAll('.table__change-status .change_color--item span:first-child')

    for (let j = 0; j < changeColors.length; j++) { 
        changeColors[j].addEventListener('click', () => {
            // console.log(index);
            let classColor = tableItemMid[index].getAttribute('class').split(' ')[1]

            if(changeColors[j].getAttribute('class') == 'table--green') {
                tableItemMid[index].classList.remove(classColor)
                tableItemMid[index].classList.add('table--green')
            }
            else if(changeColors[j].getAttribute('class') == 'table--red') {
                tableItemMid[index].classList.remove(classColor)
                tableItemMid[index].classList.add('table--red')
            }
            else if(changeColors[j].getAttribute('class') == 'table--yellow') {
                tableItemMid[index].classList.remove(classColor)
                tableItemMid[index].classList.add('table--yellow')
            }
            else if(changeColors[j].getAttribute('class') == 'table--grey') {
                tableItemMid[index].classList.remove(classColor)
                tableItemMid[index].classList.add('table--grey')
            }
        })
    }

//----------------- create table -------------

tableAdd.addEventListener('click', () => {
    popUpCreate.style.display = 'block'
    nameTable.innerHTML = `Create table ${tableItem.length + 1}`
})

createN.addEventListener('click', () => {
    popUpCreate.style.display = 'none'
})

createY.addEventListener('click', () => {
    popUpCreate.style.display = 'none'
    
    let div = document.createElement('div')
    div.className = 'table-item'

    div.innerHTML = createTable('table--green')
    // append table
    table.appendChild(div)
    //goị lại table box để cho có sự kiện ở cái mới
    onOfTableBox()
    //gọi lại count để đếm
    countTable()
})


// ---------------- Delete table ---------


//------------------ manager all --------------------
function manager() {
    //on off table box(save index, close box, open box)
    onOfTableBox()
    //Xóa bàn
    // deleteTable()
    //Đếm số lượng bàn hiện tại
    countTable()
}

manager()

