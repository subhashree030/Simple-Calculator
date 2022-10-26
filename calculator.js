let show = document.getElementById('show');
// let table = document.getElementsByTagName('table')

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button  =>{
    button.addEventListener('click' ,(e) => {
        switch(e.target.innerText){
            case 'C' :
                show.innerText = '';
                break;
            case '←' :
                if(show.innerText){
                show.innerText = show.innerText.slice(0, -1);}
                break;
            case '%' :
                show.innerText = show.innerText/100;
                break;
            case '√' :
                show.innerText= Math.sqrt(show.innerText);
                break;
            case '=' :
                try{
                    show.innerText = eval(show.innerText);}
                    catch{
                        show.innerText = 'Error!';
                    }
                    break;
            default :
                  show.innerText += e.target.innerText;
            
                }
            });
} );

