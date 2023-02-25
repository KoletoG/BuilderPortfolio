
function zoom(e) {

    var el = document.getElementById(e.target.id);
    var id=e.target.id;
    if(parseInt(id)%2==0)
    {

        var id2=parseInt(id)-1;
    }
    else{
        
    var id2=parseInt(id)+1;
    }
    var el2 = document.getElementById(id2);
    var parentWidth = $('#divv').width(); // parent element
    var demoWidth = ($(el).width()/parentWidth * 100).toFixed();
    console.log(id2);
    
    if(demoWidth>30 && demoWidth<40){
        
        $(el).removeClass('border-dark');
        $(el).addClass('border-danger');
        $(el).animate({ width: '+=15%' });
         $(el2).removeClass('border-dark');
        $(el2).addClass('border-danger');
        $(el2).animate({ width: '+=15%' }); 

    }
    else{

        $(el).removeClass('border-danger');
        $(el).addClass('border-dark');
        $(el).animate({ width: '35%' });
        $(el2).removeClass('border-danger');
        $(el2).addClass('border-dark');
        $(el2).animate({ width: '35%' });
    }
   
}
function redb(e){
    
    var el = document.getElementById(e.target.id);
    $(el).removeClass('border-dark');
    $(el).addClass('border-danger');
}
function blackb(e){
    
    var el = document.getElementById(e.target.id);
    $(el).removeClass('border-danger');
    $(el).addClass('border-dark');
}