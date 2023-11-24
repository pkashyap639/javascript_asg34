validateInput=()=>{
    usInput = document.getElementById('us_input').value
    canInput = document.getElementById('can_input').value
    var rate = 1.25; 

    if (usInput !== null) {
        var CanadianDollar = usInput * rate;
        document.getElementById('can_input').value = CanadianDollar.toFixed(2);
    } else if (canInput !== null) {
        var USDollar = canInput / rate;
        document.getElementById('us_input').value = USDollar.toFixed(2);
}

}