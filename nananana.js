var batman = document.getElementById('batman');
var nana = 0
while(nana < 1000){
		
    let verse;
    let delay = nana*250;
    nana++;
    
    if(nana%10 == 0){
    	verse = 'BATMAAAN!<br />';
    }
    else{
    	verse = 0/0+'a ';
    }
    
    setTimeout(function(){
    	batman.innerHTML += verse
    }, delay)
}