{   let button=document.getElementById("searchButton");
    button.addEventListener('click',function(){
       let listitems=document.getElementById("list");
       let input=document.getElementById("searchInput");
       let error= document.getElementById("error");
       var results=document.getElementById('result');
       error.style.visibility='hidden';
       input.style.borderColor='lightgray';
    
        let list=document.getElementById("list");
        if(listitems){
        
           listitems.remove();
            }
       let text=input.value;
       console.log(text);
    
       let xhrhttp=new XMLHttpRequest();
       xhrhttp.onload=function(){
        
         let json=  xhrhttp.response;
         
         let data=JSON.parse(json);
         console.log(data);
         if(data.response=='error')
            {   input.style.borderColor='red';
                 error.style.visibility='inherit';
                 
                // alert("Search a valid Name");
                return;
            }
         var list=document.createElement('ul');
            
         for(var result in data.results){

                 
                var listitem=document.createElement('li');
                var favbutton  =document.createElement('button');
                var image=document.createElement('img');
                var span=document.createElement('span');
                image.className='images';
                image.src=data.results[result].image.url;
                console.log(data.results[result].image.url);


                list.id='list';
                results.appendChild(list);
                
                favbutton.innerText='Add To Fav';
                favbutton.className='favbtn';
                listitem.className='listitem';
                
                
                span.innerText=data.results[result].name;
                listitem.appendChild(image);
                listitem.appendChild(span);
                listitem.appendChild(favbutton);
                list.appendChild(listitem);
                console.log(data.results[result].name);
            }
         
  
        }

    

       xhrhttp.open('get','https://www.superheroapi.com/api.php/2018504438283292/search/'+text,true);
       xhrhttp.send(); 
  
      })  

              



  }