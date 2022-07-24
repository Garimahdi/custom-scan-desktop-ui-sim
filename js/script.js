// Get the current year
let getAnno = document.getElementById('anno');
let getDate = new Date().getFullYear();
console.log(getDate);
getAnno.innerHTML=String(getDate);

// Set a logic to adjust date

let tanggal = $('#tanggal');
let bulan = $('#bulan');
let tahun = $('#tahun');
console.log(bulan.val());
console.log($('#bulan option:selected').html());

bulan.change(function(event){
    let bulanFix = $('#bulan option:selected').html();
    console.log(bulanFix);

    if(bulan.val() == 'apr' || bulan.val() == 'jun' || bulan.val() == 'sep' || bulan.val() == 'nov'){
        $("#tanggal option[value='31']").remove()
    }else if(bulan.val() == 'feb'){
        $('#tanggal option[value="31"]').remove();
        $('#tanggal option[value="30"]').remove();
        $('#tanggal option[value="29"]').remove()
    }else{
        tanggal.append('<option value='+29+'>'+29+"</option>");
        tanggal.append('<option value='+30+'>'+30+"</option>");
        tanggal.append('<option value='+31+'>'+31+"</option>")
    };
});

tahun.change(function(event){
    console.log(Number($('#tahun option:selected').html()));
    
    if((tahun.val()%4 == 0) && (bulan.val() == 'feb')){
        //console.log('yeet');
        tanggal.append('<option value='+29+'>'+29+"</option>")
    }else{
        $('#tanggal option[value="29"]').remove();
    }
});