function orderdet()
{
    let name = document.form.name.value;
    let number=document.form.number.value;
    let date;
    let total= 0;
    let message="";
    let bigMessage="";
    let numberOfVege1 = document.form.vege1.value;
    let numberOfFruit1= document.form.fruit1.value;
    let numberOfChicks1= document.form.chick1.value;
    let numberOfVege2 = document.form.vege2.value;
    let numberOfFruit2= document.form.fruit2.value;
    let numberOfChicks2= document.form.chick2.value;
    let numberOfVege3 = document.form.vege3.value;
    let numberOfFruit3= document.form.fruit3.value;
    let numberOfChicks3= document.form.chick3.value;

    let elem = document.getElementById("button");
    if (elem.innerHTML==="no") date = document.form.dateselector.value;
    else date = "ASAP Dine-in";

    if(numberOfVege1>0){
        let priceOfVege1 = (parseFloat(numberOfVege1) * 12.00)
        message+=(numberOfVege1+" Margherita &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+priceOfVege1.toFixed(2)+"<br>");
        total+= priceOfVege1;
    }
    if(numberOfFruit1>0){
        let priceOfFruit1= (parseFloat(numberOfFruit1) * 12.50)
        message+=(numberOfFruit1+" Quattro Formaggi &nbsp;&nbsp;$"+priceOfFruit1.toFixed(2)+"<br>");
        total+= priceOfFruit1;
    }
    if(numberOfChicks1>0){
        let priceOfChicks1= (parseFloat(numberOfChicks1) * 13.00)
        message+=(numberOfChicks1+" Capricciosa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+priceOfChicks1.toFixed(2)+"<br>");
        total+= priceOfChicks1;
    }

    if(numberOfVege2>0){
        let priceOfVege2 = (parseFloat(numberOfVege2) * 8.50)
        message+=(numberOfVege2+" Schnitzel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+priceOfVege2.toFixed(2)+"<br>");
        total+= priceOfVege2;
    }
    if(numberOfFruit2>0){
        let priceOfFruit2 = (parseFloat(numberOfFruit2) * 9.50);
        message+=(numberOfFruit2+" Mixed Grill &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+priceOfFruit2.toFixed(2)+"<br>");
        total+= priceOfFruit2;
    }
    if(numberOfChicks2>0){
        let priceOfChicks2 = (parseFloat(numberOfChicks2) * 10.00);
        message+=(numberOfChicks2+" Big Beef on a Bun &nbsp;&nbsp;$"+priceOfChicks2.toFixed(2)+"<br>");
        total+= priceOfChicks2;
    }

    if(numberOfVege3>0){
        let priceofVege3 = (parseFloat(numberOfVege3) * 2.00)
        message+=(numberOfVege3+" Coffee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+priceofVege3.toFixed(2)+" <br>");
        total+= priceofVege3;
    }
    if(numberOfFruit3>0){
        let priceofFruit3 = (parseFloat(numberOfFruit3) * 2.50);
        message+=(numberOfFruit3+" Latte &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+priceofFruit3.toFixed(2)+"<br>");
        total+= priceofFruit3;
    }
    if(numberOfChicks3>0){
        let priceofChicks3 = (parseFloat(numberOfChicks3) * 1.75);
        message+=(numberOfChicks3+" Sody Pop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$"+priceofChicks3.toFixed(2)+"<br>");
        total+= priceofChicks3;
    }



bigMessage = (name+"<br>"+number+"<br>Pickup Time: "+date+"<br><br>Order:<br>"+message+"<br>Total order: $"+total.toFixed(2));


    document.getElementById("orderDetail").innerHTML= bigMessage;
}

window.onload = function() {
    let month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let currentMonth = month[mm];
    let yyyy = today.getFullYear();
    today = currentMonth + ' ' + dd + ', ' + yyyy;
    document.getElementById('date').innerHTML = today;
}

function myFunction() {
    let x = document.getElementById("dateselector");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    {
        let elem = document.getElementById("button");
        if (elem.innerHTML==="yes") elem.innerHTML="no";
        else elem.innerHTML = "yes";
    }
}

