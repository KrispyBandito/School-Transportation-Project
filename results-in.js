function passVal() {
    var name = document.getElementById('name').value;
    localStorage.setItem('name', name);
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
    var distance = document.getElementById('distance').value;
    localStorage.setItem('distance', distance);
    var mpg = document.getElementById('mpg').value;
    localStorage.setItem('mpg', mpg);
    var insurance = document.getElementById('insurance').value;
    localStorage.setItem('insurance', insurance);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwrCzFb8CKW9xrNcr2WUMC_T6AVAfV3WaMpwVI2KO_Lce3QOfY/exec'
    
    const form = document.forms['google-sheet']  
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => window.location.href = "results.html")
        .catch(error => console.error('Error!', error.message))
    })

    return false;
}

function setVal(value, Qname ) {
    var temp = value;
    localStorage.setItem(Qname, temp);
}