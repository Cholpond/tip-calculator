function calc (){
    const totalBill = parseInt(document.querySelector("#billAmount").value);
    const serviceRate = parseInt(document.querySelector("#services").value);
    const costShare = parseInt(document.querySelector("#share").value);
    const calculate1 = (totalBill * (serviceRate/100))/costShare;
    console.log(serviceRate, costShare, calculate1)
    document.querySelector("#result").innerHTML = calculate1


}