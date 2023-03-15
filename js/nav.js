const createNav =()=> {
   let nav = document.querySelector('.navbar');
   nav.innerHTML = `
   <div class="ribbon">
   <div class="text-container">
   <p>Extera 30% off on all products - Limited time offer!</p>
   </div>
</div>
<div class="nav">
   <button class="nav-toggle">
   <span class="hamburger"></span>
   <span class="hamburger"></span>
   <span class="hamburger"></span>
   </button>
   </button>
   <a href="index.html "><img src="img/main-logo.png"  class="brand-logo" alt="AR Design logo">
   <div class="nav-items">
      <div class="search">
      <a href="#"><img src="img/loupe.png" alt="user icon"></a>
      </div>
      <a href="#"><img src="img/user.png" alt="user icon"></a>
      <a href="#"><img src="img/shopping-bag.png" alt=" shopping bag icon"></a>
   </div>
</div>
<div class="hamburger">
   <div class="line"></div>
   <div class="line"></div>
   <div class="line"></div>
</div>
<ul class="link-container">
   <li class="link-item"><a href="index.html" class="link" aria-label= "Home">Home</a> </li>
   <li class="link-item"><a href="#" class="link" aria-label="Best sellers">Best sellers</a></li>
   <li class="link-item"><a href="#" class="link" aria-label="Clothing">Clothing</a></li>
   <li class="link-item"><a href="#" class="link" aria-label="Dresses">Dresses</a></li>
   <li class="link-item"><a href="#" class="link" aria-label="Accessories">Accessories</a></li>
   <li class="link-item"><a href="#" class="link" aria-label="Collection">Collection</a></li>
   <li class="link-item"><a href="about.html" class="link" aria-label="About">About</a></li>
   <li class="link-item"><a href="contact.html" class="link" aria-label="Contact">Contact</a></li>

</ul>`;
   
   }

createNav(); 
const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');
const linkContainer = document.querySelector('.link-container');


navToggle.addEventListener('click', () => {
  navItems.classList.toggle('show');
  linkContainer.classList.toggle('show');
});