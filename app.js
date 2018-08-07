let currentRow = 0;
for (let i = 0; i < data.length; i++) {
    let row = document.createElement('div');
    row.id = `row${currentRow+1}`;
    row.classList.add(`row${currentRow+1}`, 'row');
    for (let r of data[i]) {
        if (( (r['name'].trim() =='Actinium' && r['group'] == 'actinoid' || r['group'] != 'actinoid' && r['name'].trim() != 'Actinium') ) && ( (r['name'].trim() =='Lanthanum' && r['group'] == 'lanthanoid' || r['group'] != 'lanthanoid' && r['name'].trim() != 'Lanthanum') ) ) {
            let element = document.createElement('element');
            element.classList.add(r['name'].trim().toLowerCase(), r['group']);

            let atomNumber = document.createElement('span');
            atomNumber.classList.add('atomic_Number');
            atomNumber.textContent = r['number'];

            let symbol = document.createElement('span');
            symbol.classList.add('symbol');
            symbol.textContent = r['sybmol'];

            let name_ = document.createElement('span');
            name_.classList.add('name');
            name_.textContent = r['name'];

            let atomMass = document.createElement('span');
            atomMass.classList.add('atomic_Mass');
            atomMass.textContent = r['atomicMass'];

            element.appendChild(atomNumber);
            element.appendChild(symbol);
            element.appendChild(name_);
            element.appendChild(atomMass);
            row.appendChild(element);
        } 
    }
    document.getElementById('table').appendChild(row);
    currentRow++;
}

function repeatCall(n,func){
    for(let i = 0 ; i<n ; i++){
        func();
    }
}

function addBreak(){
    let break_ = document.createElement('break');
    document.getElementById('table').appendChild(break_);
}
repeatCall(2,addBreak);

for(let i = 0; i < data.length; i++) {
    let row = document.createElement('div');
    for (let r of data[i]) {
        if ((r['group'] == 'actinoid' ||r['group'] == 'lanthanoid')) {
            row.id = `${r['group']}s`;
            row.classList.add(`${r['group']}s`, 'row');
            let element = document.createElement('element');
            element.classList.add(r['name'].trim().toLowerCase(), r['group']);

            let atomNumber = document.createElement('span');
            atomNumber.classList.add('atomic_Number');
            atomNumber.textContent = r['number'];

            let symbol = document.createElement('span');
            symbol.classList.add('symbol');
            symbol.textContent = r['sybmol'];

            let name_ = document.createElement('span');
            name_.classList.add('name');
            name_.textContent = r['name'];

            let atomMass = document.createElement('span');
            atomMass.classList.add('atomic_Mass');
            atomMass.textContent = r['atomicMass'];

            element.appendChild(atomNumber);
            element.appendChild(symbol);
            element.appendChild(name_);
            element.appendChild(atomMass);
            row.appendChild(element);
        } 
    }
    if(row.innerHTML){
    document.getElementById('table').appendChild(row);
    currentRow++;
    }
}

document.body.style.fontSize = `${~~(window.innerWidth / window.innerHeight)}vh`;


let sections = [];

for(let row of data){
    for(let e of row){
        if(!sections.includes(e['group'])){
            sections.push(e['group']);
        }
    }
}

for(let s of sections){
    let section = document.createElement('section');
    let colorDiv = document.createElement('div');
    colorDiv.className = s;
    let span = document.createElement('span');
    let text = s.slice(0,1).toUpperCase() + s.slice(1).replace(/_|-/g,' ');
    span.innerHTML = text;
    section.appendChild(colorDiv);
    section.appendChild(span);
    document.getElementById('class').appendChild(section);
}
