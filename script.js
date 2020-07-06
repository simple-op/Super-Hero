{   
    var transfer;
    

    function showInfo(data){
        console.log(data);
        localStorage.setItem('info', JSON.stringify(data));
        

       
           
       }

    
    function addToFav(data){
        
        console.log(data);
        localStorage.setItem(data.name, JSON.stringify(data));
        
    }   
    let button=document.getElementById("searchButton");
    
   





    button.addEventListener('click',function(){

       

       let listitems=document.getElementById("list");
       let input=document.getElementById("searchInput");
       let error= document.getElementById("error");
       var results=document.getElementById('result');
       var noOfResults=document.getElementById('noOfResults');

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
                 noOfResults.innerText='Results Found : 0';
                 
                // alert("Search a valid Name");
                return;
            }
         var list=document.createElement('ul');
         noOfResults.innerText='Results Found : '+data.results.length;
           
         for(let result in data.results){

                 
                var listitem=document.createElement('li');
                listitem.value=result;
                var favbutton  =document.createElement('button');
                var image=document.createElement('img');
                var href=document.createElement('a');
                href.href="/info.html";
                href.target='blank';
                favbutton.addEventListener('click',function(){

                    addToFav(data.results[result]);

                })
                href.addEventListener('click',function(){
                    
                       
                       showInfo(data.results[result]);
                })

                var span=document.createElement('span');
                href.appendChild(span);
                
               
                
               
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
                listitem.appendChild(href);
                listitem.appendChild(favbutton);
                list.appendChild(listitem);
                console.log(data.results[result].name);
            }
            


  
        }

    

       xhrhttp.open('get','https://www.superheroapi.com/api.php/2018504438283292/search/'+text,true);
       xhrhttp.send(); 
  
      })  

              



  }