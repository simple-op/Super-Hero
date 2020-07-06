
// getting data from local storage
function showInfo(data){ 
    console.log(data);
    localStorage.setItem('info', JSON.stringify(data));
    

   
       
   }
reload();
// created a function to reload every time we delete somthg
function reload()
{
    let list=document.createElement('ul');

for(let item in localStorage){
     let data=JSON.parse(localStorage.getItem(item))
    //  parsed data to json
    
    let listFav=document.getElementById('listFav');
    listFav.appendChild(list);
    
    var listitem=document.createElement('li');
    
    var removeButton =document.createElement('button');
    removeButton.className='removeButton';
    var image=document.createElement('img');
    var href=document.createElement('a');
    href.href="info.html";
    // href.target='blank';
    // send user to info from favourites
    href.addEventListener('click',function(){
        
           
           showInfo(data);

    })
// append 
    let span=document.createElement('span');
    href.appendChild(span);
    
    
    
//    images wiil be here 
    image.className='images';
    image.src=data.image.url;
    console.log(data.image.url);


    
    // .appendChild(list);
    // remove button appended to remove from fav
    removeButton.innerText='Remove';
    removeButton.addEventListener('click',function(){
        
        //    reload function calls as we delete
        localStorage.removeItem(item);
        listitem.remove();
        list.remove();
        reload();
        

 })

    // favbutton.className='favbtn';
    listitem.className='listitem';
    
    // appended these to fav list 
    
    span.innerText=data.name;
    listitem.appendChild(image);
    listitem.appendChild(href);
    listitem.appendChild(removeButton);
    list.appendChild(listitem);
    console.log(JSON.parse(localStorage.getItem(item)));
}





}
