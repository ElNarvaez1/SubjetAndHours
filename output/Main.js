document.addEventListener("DOMContentLoaded",e=>{
  let buttonGenerar=document.getElementById('buttonGenerar')
  buttonGenerar.addEventListener("click",struct);
})



function struct() {
  let rows=document.getElementsByClassName('row')
  let rowsHours = new Array()

  /*______Primera parte del codigo_________*/
  /*______obtener el valor de las opciones seleccionadas._________*/
  for (let index = 0; index < rows.length; index++) {

    let columnTemp=new Array()
    let childsRow=rows[index].children

    for (var indexChildren = 1; indexChildren < childsRow.length; indexChildren++) {
      if(childsRow[indexChildren].selectedIndex>0){
        let hourNew=childsRow[indexChildren].value

        if(!columnTemp.includes(hourNew))
          columnTemp.push(childsRow[indexChildren].value)
      }
    }
    //Una vez que agregamos las horas las ordenamos
    columnTemp.sort()
    //Agregamos las meteria la final de las comlumnbas temporales
    let subject=childsRow[0].value

    if(subject === ""){
      subject="Materia "+(index+1);
    }
    columnTemp.push(subject)
    rowsHours.push(columnTemp)
  }
  //Una vez que terminamos la captura de las horas y las materias, ordenamos
  rowsHours.sort()
  clear(rowsHours)
  show(rowsHours)
}


function clear(tableHours) {
  for (let rowIn = 0; rowIn < tableHours.length-1; rowIn++) {
    let row=tableHours[rowIn]
    let rowNext=tableHours[rowIn+1]

    if(rowNext.length>2){
      if(rowNext[0]===row[0]){
        rowNext.shift()
      }
    }else if(row.length>2){
      if(rowNext[0]===row[0]){
        row.shift()
      }
    }
    tableHours.sort()
  }
}


function show(tableHours) {
    let body=document.getElementsByTagName("body")
    let container=document.createElement("section")
    container.className =  "container"
    for (let i = 0; i < tableHours.length; i++) {
      let p=document.createElement("p")
      p.innerHTML=tableHours[i]
      container.appendChild(p)
    }
    body[0].appendChild(container)

}
