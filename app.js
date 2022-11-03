//alert("it works!");
document.getElementById('formAgenda').addEventListener('submit', guardarContacto);

function guardarContacto(e){
    
    let nombreContacto=document.getElementById("nombreContacto").value;
    let numeroContacto=document.getElementById("numeroContacto").value;
    //alert(nombreContacto);
    

    const contacto={
        nombreContacto,
        numeroContacto
    };

    //
    if(localStorage.getItem('contactos') === null){
        let contactos=[];
        contactos.push(contacto);
        localStorage.setItem('contactos', JSON.stringify(contactos));
    }else{
        let contactos=JSON.parse(localStorage.getItem('contactos'));
        contactos.push(contacto);
        localStorage.setItem('contactos', JSON.stringify(contactos));

    }
    
    getContactos();
    //console.log(localStorage.getItem('contactos'));
    e.preventDefault();


}

function getContactos(){
    let contactos = JSON.parse(localStorage.getItem('contactos'));
    let contactosView = document.getElementById('agendaTelefonica');

    contactosView.innerHTML='';

    if(contactos != null){
        for(let i=0; i < contactos.length; i++){
            let numero=contactos[i].numeroContacto;
            let nombre=contactos[i].nombreContacto;
            console.log(i);
            console.log(contactos[i].nombreContacto);
            contactosView.innerHTML += `<div class="card mb-3"> 
                <div class="card-body">
                    <p>${nombre} - ${numero}</p>
                    <a class="btn btn-danger" onclick="deleteContacto('${numero}')">
                        Delete
                    </a>
                </div>
            </div>`;
        }
    }

}

function deleteContacto(numero){
    let contactos=JSON.parse(localStorage.getItem('contactos'));
    for(let i=0; i< contactos.length; i++){
        if(contactos[i].numeroContacto===numero){
            contactos.splice(i,1);
        }
    }

    localStorage.setItem('contactos',JSON.stringify(contactos));
    getContactos();
}

getContactos();