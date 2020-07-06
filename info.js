// getting data from local storage
let data = JSON.parse(localStorage.getItem('info'));
localStorage.removeItem('info');
// removing from local storage to save some space
let infoimage=document.getElementById('infoimage');
let image=document.getElementById('image');
// loading image from api url
image.src=data.image.url;
let title=document.getElementById('title');
let heading=document.getElementById('heading');
heading.innerText=data.name;
title.innerText=data.name;
// taking appearance data from here
let appearance=document.getElementById('appearance');
    let list1=document.createElement('ul');
    appearance.appendChild(list1)
    for(let item in data.appearance){
        let listli=document.createElement('li');
        listli.innerText=item+" : " +data.appearance[item];
        list1.appendChild(listli);
    }  
// work data will be  appended  here
 let work=document.getElementById('work');
    
    let list5=document.createElement('ul');
    work.appendChild(list5)
    for(let item in data.work){
       let listli=document.createElement('li');
       listli.innerText=item+" : " +data.work[item];
       list5.appendChild(listli);
    }  
// powerstats will be appeneded here
let powerstats=document.getElementById('powerstats');

    let list4=document.createElement('ul');
    powerstats.appendChild(list4)
    for(let item in data.powerstats){
       let listli=document.createElement('li');
       listli.innerText=item+" : " +data.powerstats[item];
       list4.appendChild(listli);
    }  

// biography will be here
let biography=document.getElementById('biography');
    let list3=document.createElement('ul');
    biography.appendChild(list3)
    for(let item in data.biography){
       let listli=document.createElement('li');
       listli.innerText=item+" : " +data.biography[item];
       list3.appendChild(listli);
    }  



// connections data will be here
let connections=document.getElementById('connections');
    let list2=document.createElement('ul');
    connections.appendChild(list2)
    for(let item in data.connections){
      let listli=document.createElement('li');
      listli.innerText=item+" : " +data.connections[item];
      list2.appendChild(listli);
    }  

