

function showInfo(data){
    console.log(data);
    localStorage.setItem('info', JSON.stringify(data));
    

   
       
   }




for(let item in localStorage){
     let data=JSON.parse(localStorage.getItem(item))
    
    let list=document.getElementById('listFav');
    var listitem=document.createElement('li');
    
    var removeButton =document.createElement('button');
    var image=document.createElement('img');
    var href=document.createElement('a');
    href.href="/info.html";
    href.target='blank';
    
    href.addEventListener('click',function(){
        
           
           showInfo(data);
    })

    let span=document.createElement('span');
    href.appendChild(span);
    
    
    
   
    image.className='images';
    image.src=data.image.url;
    console.log(data.image.url);


    
    // .appendChild(list);
    
    removeButton.innerText='Remove';
    removeButton.addEventListener('click',function(){
        
           
        localStorage.removeItem(item);
        listitem.remove();
 })

    // favbutton.className='favbtn';
    listitem.className='listitem';
    
    
    
    span.innerText=data.name;
    listitem.appendChild(image);
    listitem.appendChild(href);
    listitem.appendChild(removeButton);
    list.appendChild(listitem);
    console.log(JSON.parse(localStorage.getItem(item)));
}





