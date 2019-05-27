var kvadratiki = new Array(9);

function nolik() {

    var id = Math.floor(Math.random()*9);

    kvadratiki[id] ? nolik(): move(id,'nolik');
    
}

function vin() {

    if (kvadratiki[0]=='nolik' && kvadratiki[1]=='nolik' && kvadratiki[2]=='nolik' || kvadratiki[0]=='krestik' && kvadratiki[1]=='krestik' && kvadratiki[2]=='krestik') return true;
    if (kvadratiki[3]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[5]=='nolik' || kvadratiki[3]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[5]=='krestik') return true;
    if (kvadratiki[6]=='nolik' && kvadratiki[7]=='nolik' && kvadratiki[8]=='nolik' || kvadratiki[6]=='krestik' && kvadratiki[7]=='krestik' && kvadratiki[8]=='krestik') return true;
    if (kvadratiki[0]=='nolik' && kvadratiki[3]=='nolik' && kvadratiki[6]=='nolik' || kvadratiki[0]=='krestik' && kvadratiki[3]=='krestik' && kvadratiki[6]=='krestik') return true;
    if (kvadratiki[1]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[7]=='nolik' || kvadratiki[1]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[7]=='krestik') return true;
    if (kvadratiki[2]=='nolik' && kvadratiki[5]=='nolik' && kvadratiki[8]=='nolik' || kvadratiki[2]=='krestik' && kvadratiki[5]=='krestik' && kvadratiki[8]=='krestik') return true;
    if (kvadratiki[0]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[8]=='nolik' || kvadratiki[0]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[8]=='krestik') return true;
    if (kvadratiki[2]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[6]=='nolik' || kvadratiki[2]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[6]=='krestik') return true;

    if (kvadratiki[0] && kvadratiki[1] && kvadratiki[2] && kvadratiki[3] && kvadratiki[4] && kvadratiki[5] && kvadratiki[6] && kvadratiki[7] && kvadratiki[8]) return true;


}

function move(id, role) {

    if (kvadratiki[id]) return false;
    kvadratiki[id] = role;
    document.getElementById(id).className = 'cell' + ' ' + role;
    !vin() ? (role == 'krestik') ? nolik(): null: reset();

}

function reset() {

    if (kvadratiki[0]=='nolik' && kvadratiki[1]=='nolik' && kvadratiki[2]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }
    if (kvadratiki[3]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[5]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }
    if (kvadratiki[6]=='nolik' && kvadratiki[7]=='nolik' && kvadratiki[8]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }
    if (kvadratiki[0]=='nolik' && kvadratiki[3]=='nolik' && kvadratiki[6]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }
    if (kvadratiki[1]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[8]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }
    if (kvadratiki[2]=='nolik' && kvadratiki[5]=='nolik' && kvadratiki[8]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }
    if (kvadratiki[0]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[8]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }
    if (kvadratiki[2]=='nolik' && kvadratiki[4]=='nolik' && kvadratiki[6]=='nolik'){
        alert("Победили нолики.\nИгра окончена!");
    }


    if (kvadratiki[0]=='krestik' && kvadratiki[1]=='krestik' && kvadratiki[2]=='krestik') {
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[3]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[5]=='krestik'){
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[6]=='krestik' && kvadratiki[7]=='krestik' && kvadratiki[8]=='krestik'){
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[0]=='krestik' && kvadratiki[3]=='krestik' && kvadratiki[6]=='krestik'){
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[1]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[7]=='krestik'){
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[2]=='krestik' && kvadratiki[5]=='krestik' && kvadratiki[8]=='krestik'){
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[0]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[8]=='krestik'){
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[2]=='krestik' && kvadratiki[4]=='krestik' && kvadratiki[6]=='krestik'){
        alert("Победили крестики.\nИгра окончена!");
    }
    if (kvadratiki[0] && kvadratiki[1] && kvadratiki[2] && kvadratiki[3] && kvadratiki[4] && kvadratiki[5] && kvadratiki[6] && kvadratiki[7] && kvadratiki[8]) {
        alert("Ничья.\nИгра окончена!")
    }


    location.reload();
}

