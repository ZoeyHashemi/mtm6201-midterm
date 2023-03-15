const createFooter =() => {
    let footer= document.querySelector('footer');
    footer.innerHTML= `
	<div class="footer-content">
	<img src="img/light-logo.png"  class="logo" alt="Company Logo">
	<div class="footer-ul-container">
	   <ul class="category">
		  <li class="category-title">Quick Links</li>
		  <li><a href="index.html" class="footer-link">Home</a></li>
		  <li><a href="#" class="footer-link">Products</a></li>
		  <li><a href="about.html" class="footer-link">About Us</a></li>
		  <li><a href="contact.html" class="footer-link">Contact</a></li>
		  <li><a href="#" class="footer-link">Blog</a></li>
		  <li><a href="#" class="footer-link">Help & FAQ's</a></li>
		  <li><a href="#" class="footer-link">Support</a></li>
		  <li><a href="#" class="footer-link">Online return service</a></li>
		  <li><a href="#" class="footer-link">Career</a></li>
		  <li><a href="#" class="footer-link">Privacy Policy</a></li>
	   </ul >
	   <ul class="category">
		  <li class="category-title">Services</li>
		  <li><a href="#" class="footer-link">Your Order</a></li>
		  <li><a href="#" class="footer-link">Shipping</a></li>
		  <li><a href="#" class="footer-link">Track a Package</a></li>
		  <li><a href="#" class="footer-link">Return & Exchange</a></li>
		  <li><a href="#" class="footer-link">Gift Cards</a></li>
		  <li><a href="#" class="footer-link">Check Gift Card Balance</a></li>
		  <li><a href="#" class="footer-link">Current Promotions</a></li>
		  <li><a href="#" class="footer-link">Return & Exchange</a></li>
		  <li><a href="#" class="footer-link">Return & Exchange</a></li>
	   </ul >
	</div>
 </div>
 <p class="footer-title">About Us</p>
 <p class="info">It is a long established fact that a reader will be distracted
	by the readable content of a page when looking at its layout. 
	The point of using Lorem Ipsum is that it has a more-or-less 
	normal distribution of letters, as opposed to using ‘Content 
	here, content here’, making it look like readable English.
	Many desktop publishing packages and web page 
	editors now use Lorem Ipsum as their default model text, 
	web sites still in their infancy. 
 </p>
 <p class="info">Support Email- help@ardesign.com, customersupport@ardesign.com</p>
 <p class="info">telephone- +1 343 100 0000, +1 343 200 0003</p>
 <div class="footer-social-container">
 <div>
	<a href="#" class="social-link">terms & services</a>
	<a href="#" class="social-link">privacy Page</a>
 </div>
 <div>
	<a href="#" class="social-link"><img src="img/instagram.png" alt="Instagram icon"></a>
	<a href="#" class="social-link"><img src="img/facebook.png" alt="Facebook icon"></a>
	<a href="#" class="social-link"><img src="img/twitter.png" alt="Twitter icon"></a>
	<a href="#" class="social-link"><img src="img/youtube.png" alt="Youtube icon"></a>
 </div>
 <p class="footer-credit"> &copy; 2023  AR Design Company, images from <a href="https://www.unsplash.com" class="unsplash"> Unsplash</a> </p>
 <div class="back-button">
	<a href="#top" id="back-btn" role="button">Back to Top</a>
 </div>

    `;
}
createFooter();


