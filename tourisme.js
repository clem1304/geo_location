/*Theme*/

const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('darkmode');
       
}

/*Coupon*/



function onloadPage() {
    document.getElementById('coupon').style.visibility="visible";
}

function closeCoupon() {
    document.getElementById('coupon').style.visibility="hidden";
}



/*Geolocation*/


