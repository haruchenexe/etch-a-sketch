function userchoice() {
    const user = prompt("Enter a number: 1 - 100");

    if ((typeof(Number(user)) == 'number') && (user > 0) && (user < 101)) {
        return user
    } else {
        alert('Invalid Number. Please try again')
        return userchoice()
    }
}

function dynamictable() {
    const TableDiv = document.getElementById("DynamicTable");
    const Dimensize = document.getElementById('Dimension');
    const user = userchoice()

    Dimensize.textContent = user + " x " + user
    const table = document.createElement("TABLE");
    table.setAttribute('id', 'table')
    const tablebody = document.createElement("TBODY");
    tablebody.setAttribute('id','table-container');              
    table.appendChild(tablebody);

    for(let i=0; i<user; i++) {
        const tr = document.createElement("TR");
        tr.setAttribute('id', 'table-row');
        tablebody.appendChild(tr);

        for(let j=0; j<user; j++) {
            const td = document.createElement("TD");
            td.classList.add('eachbox') 
            tr.appendChild(td)
        }
    }
    TableDiv.appendChild(table);
}

dynamictable()

function hoovereffect() {
    const eachbox = document.querySelectorAll('.eachbox');
    const rainbow = document.getElementById('Rainbow');
    const black = document.getElementById('Black');
    const white = document.getElementById('White');

    rainbow.addEventListener('click', e=> {
        for (let i=0; i<eachbox.length; i++) {
            eachbox[i].addEventListener('mouseenter', e=> {
                e.target.style.background = colorgenerator()
            })
        }
    })
    black.addEventListener('click', e=> {
        for (let i=0; i<eachbox.length; i++) {
            eachbox[i].addEventListener('mouseenter', e=> {
                e.target.style.background = 'rgb(0, 0, 0)'
            })
        }
    })
    white.addEventListener('click', e=> {
        for (let i=0; i<eachbox.length; i++) {
            eachbox[i].addEventListener('mouseenter', e=> {
                e.target.style.background = 'rgb(255, 255, 255)'
            })
        }
    })
}

hoovereffect();

function clearall() {
    const clearall = document.getElementById('Clearbtn');       
    const colors = document.querySelectorAll('.eachbox');        

    for (let i=0; i<colors.length; i++) {                       
        clearall.addEventListener('click', e=> {
            colors[i].style.background = ""             
        })
    }
}

clearall();

function resetall() {
    window.location.reload();
}

function colorgenerator() {
    
    const randomcolor = [];
    for (let i =0; i < 3; i++) {
        const color = Math.floor(Math.random() * 225);
        randomcolor.push(color)
    }
    return 'rgb(' + randomcolor.join(',') + ')'
}

colorgenerator();