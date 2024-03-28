// Dropdown functionality
document.querySelectorAll('.nav_item dropdown').forEach(item =>{
    item.addEventListener('click', event => {
        item.querySelector('.dropdown-menu').classList.toggle('show');
    });
 }); 

// Close dropdown when clicking outside
window.addEventListener('click', event => {
    document.querySelectorAll('.nav_item dropdown').forEach(item => {
        if (!item.contains(event.target)) {
            item.querySelector('.dropdown-menu').classList.remove('show');
        }
    });
});

// Search functionality
document.getElementById('search').addEventListener('input', event => {
    const searchValue = event.target.value.toLowerCase();
    const items = document.querySelectorAll('#item-list li');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
var sidemenu= document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px"
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx07ulCJ960o-MsRsl8AO77wBn5NvB-9wfej8L0WX7Y5jAsChAfnODrBAPsb0Bul8MCQg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

