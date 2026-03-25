import { useState } from 'react'
import logoImg from './homepage/background/pngtree-cafe-logo-removebg-preview.png'
import product1Img from './homepage/products/product1.jpeg'
import product2Img from './homepage/products/product2.jpg'
import product5Img from './homepage/products/product5.jpg'
import product6Img from './homepage/products/product6.jpg'
import productlist1 from './homepage/productlist/cafe1.jpg'
import productlist2 from './homepage/productlist/cafe2.jpg'
import productlist3 from './homepage/productlist/cafe3.jpg'
import productlist4 from './homepage/productlist/cafe4.jpg'
import productlist5 from './homepage/productlist/cafe5.jpg'
import productlist6 from './homepage/productlist/cafe6.jpg'
import productlist7 from './homepage/productlist/cafe7.jpg'
import productlist8 from './homepage/productlist/cafe8.jpg'
import background1 from './homepage/background/image-from-rawpixel-id-6342321-png.png'
import background2 from './homepage/background/AboutUs.jpg'
import testimonial1 from './homepage/background/bg.jpg'
import testimonial2 from './homepage/background/noice.png'

import './App.css'
import './homepage/style.css'

function open(){
    const body = document.querySelector('.header')
    const sidebar = document.querySelector('.slidebar')
    if (sidebar) {
        sidebar.classList.add('active')
        body.style.backdropFilter = 'blur(10px)'
    }
}

function close(){
    const body = document.querySelector('.header')
    const sidebar = document.querySelector('.slidebar')
    if (sidebar) {
        sidebar.classList.remove('active')
         body.style.backdropFilter = ''
    }
}


function reserve(){

}






function App() {


  return (
    <>
    <body>
    <div className="header">
        <nav className="navbar">
            {/* <div className="logo">
                <img src={logoImg} alt="Coffee Shop Logo" />
            </div> */}
            {/* <div className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#explore">Products</a></li>
                <li><a href="#About">About us</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </div> */}
            <div className="icons">
                {/* <div className="search-email">
                    <i className='bx bx-search'></i>
                    <i className='bx bxs-envelope'></i>
                    <a href="/new one/login.html" className="logout-btn">Logout</a>
                </div> */}
                <div className="bar">
                    <i class='bx bx-menu' id='menu' onClick={open} ></i>
                </div>
            </div>
        </nav>
        <nav className="slidebar active">
            <div className="slidelogo">
                <img src={logoImg} alt="Coffee Shop Logo" />
            </div>
            <div className="closebtn">
                <i class='bx bx-x' onClick={close}></i>
            </div>
           <div className="slidelist">
             <div className="slidenav">
                <li><a href="#">Home</a></li>
                <li><a href="#explore">Products</a></li>
                <li><a href="#About">About us</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            <div className="slideicons">
                <div className="search-email">
                    <i className='bx bx-search'></i>
                    <i className='bx bxs-envelope'></i>
                </div>
                    <div className="btn-logout">
                        <a href="/new one/login.html" className="logout-btn">Sign In</a>
                    </div>
            </div>
            </div>
           </div>
        </nav>
        <div className="title">
            <div className="entry">
                <h1 className="first">Enjoy Your Coffee</h1>
                <h1 className="second">with <span>Coffee House</span></h1>
                <div className="small-sentence">
                    <p>Discover tranquility at Poblacion Kapatagan for unwinding,
                    where your evenings are perfected with relaxation and rich flavors. </p>
                </div>
                <div className="button">
                    <div className="btn">
                    <p><a href="#explore">Explore Product</a><i className='bx bx-right-down-arrow-circle'></i></p>
                </div>
                </div>
            </div>
        </div>

        <div className="wrapper">
            <div className="box">
                <div className="boxes">
                    <img src={product1Img} alt="Product 1" />
                </div>
                <div className="boxes">
                    <img src={product2Img} alt="Product 2" />
                </div>
                <div className="boxes">
                    <img src={product5Img} alt="Product 3" />
                </div>
                <div className="boxes">
                    <img src={product6Img} alt="Product 4" />
                </div>
            </div>
        </div>
    </div>

    
    <section className="section1">
        <div id="explore">
               <div className="title-text">
                 <h1>Explore Our <span>Products</span></h1>
                <p className="line-text">Indulge in our rich and aromatic coffee blends, crafted to perfection for every coffee lover.
                    From bold espressos to smooth lattes, our menu offers a delightful variety of flavors to satisfy your cravings.
                    Experience the warmth and comfort of our cozy ambiance while savoring each sip of our expertly brewed coffee.
                    Join us at Coffee House and discover your new favorite brew today!</p>
            </div>

               <div className="best">
                <h1>Our Best <span>Coffee</span> Products</h1>
               </div>
            <div className="Products">
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist1} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Espresso</h2>
                        <div className="price">
                        <p className="text-paragraph">Iced Coffee with Late </p>
                        <p className="rates">★★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$30.00</p>
                        <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist2} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Latte</h2>
                        <div className="price">
                        <p className="text-paragraph">Late with free iced milk </p>
                        <p className="rates">★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$40.00</p>
                       <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist3} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Cappucino</h2>
                        <div className="price">
                        <p className="text-paragraph">Delicious Iced Cappuccino </p>
                        <p className="rates">★★★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$60.00</p>
                        <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist4} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Mocha</h2>
                        <div className="price">
                        <p className="text-paragraph">Iced milk Mocha </p>
                        <p className="rates">★★★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$43.10</p>
                        <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist5} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Donut Coffee</h2>
                        <div className="price">
                        <p className="text-paragraph">Sweet Coffee Donut </p>
                        <p className="rates">★★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$43.10</p>
                       <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist6} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Choco Toppings</h2>
                        <div className="price">
                        <p className="text-paragraph">Iced Choco with Toppings </p>
                        <p className="rates">★★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$50.10</p>
                        <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist7} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Iced Mug</h2>
                        <div className="price">
                        <p className="text-paragraph">Iced Iced milk Mug </p>
                        <p className="rates">★★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$40.10</p>
                        <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="product">
                    <div className="product-box">
                        <div className="box-product">
                        <img src={productlist8} alt="Product 1"/>
                    </div>
                    <div className="text-hover">
                        <h2>Choco milk</h2>
                        <div className="price">
                        <p className="text-paragraph">Delicious & Low Price  </p>
                        <p className="rates">★★★★</p>
                        <div className="pricecontent">
                        <p className="text-price">$40.30</p>
                        <button>Details</button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                
                
            </div>
        
            </div>
    </section> 
     <section className="section2">
        <div id="About">
            <div className="about">
                <div className="about-text">
                    <h1>About Us<span>〰〰</span></h1>
                    <div className="about-paragraph">
                        <p>
                            Coffee House is one of the Best Cafe shop in the Philippines
                           where you enjoy and feel relaxing with our chill coffee products.
                        </p>
                        <p>
                            Delicious coffees, iced coffees, sweet and free snacks.
                            Even a demanding gourment will find something for himself here! The
                            Whole is complemented by  unique coffee styles.
                        </p>

                        <div className="buttons">
                            <div className="btn-button">
                                <button>Reserve A Table</button>
                            <p>or call us via: +1(832) 000-000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-img">
                    <div className="bg-img">
                        <img src={background1} alt="Cafe"/>
                    </div>
                    <img src={background2} alt="About Us"/>
                </div>

            </div>
        </div>
    </section>

    <section className="section3">
        <div id="testimonial">
            <div className="test-img">
                <img src={testimonial1} alt="cafe Shop"/>
            </div>
            <div className="test-text">
                <div className="test-box">
                    <div className="test-image">
                    <img className="noice-img" src={testimonial2} alt="noice"/>
                </div>
                <div className="text-noice">
                    <p className="rate">★★★★</p>
                    <h3>The Best
                    Coffee in Town</h3>
                    <div className="prase">
                        <p className="par1">The staff was so welcoming and the
                        price for coffee are amizing!</p>
                       
                        <p className="par2">Argel Joseph</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
     </section>
     
     <section class="contact">
         <div id="contact">
            <div class="head">
                    <h1>Contact Us</h1>
                </div>
            <div class="contact-infos">
                <div class="contact-text">
                <div class="first-text">
                <h4><span>———</span> Keep Close</h4>
                <h1>Get In Touch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi aliquid fugiat cum. Inventore, quis cumque
                    tenetur perferendis illo eveniet illum qui temporibus
                    dolor eaque maiores, ad dolorum omnis eos facere.</p>

                <div class="contacts">
                    <p><i class='bx bx-map-alt'></i> Poblacion Kapatagan LDN, Purok
                                                    8, Kapatagan Town Center. </p>
                    <p><i class='bx bx-envelope'></i> CoffeeHouse@gmail.com
                                                   BookTable@gmail.com</p>
                    <p><i class='bx bx-phone' ></i> (+62) 81 224 557 900
                                                    +1(832) 000-000</p>
                    <p><i class='bx bx-time-five' ></i> Open 04:00pm WITA
                                                    Closed 03:00am WITA</p>
                </div>
                </div>
                <div class="follow-us">
                    <h5>Follow us</h5>
                    <div class="icons">
                        <i class='bx bxl-facebook-circle' ></i>
                        <i class='bx bxl-instagram-alt' ></i>
                        <i class='bx bxl-twitter' ></i>
                    </div>
                </div>
            </div>
            <div class="Contact-details">
                <h1>Your Details</h1>
                <p class="letknow">Let us know to get back to you.</p>
                <div class="inputs">
                    <div class="input-box">
                        <p>Name •</p>
                        <input type="text" id="name" placeholder="Noice" required/>
                    </div>
                    <div class="input-box">
                        <p>Email Address •</p>
                        <input type="email" id="email" placeholder="email@gmail.com" required/>
                    </div>
                </div>
                <div class="second-inputs">
                    <div class="second-input-box">
                        <p>Subject •</p>
                        <input type="text" id="name" placeholder="Subject" required/>
                    </div>
                    <div class="second-input-box">
                        <p>Comments / Questions •</p>
                        <textarea name="Questions" id="question" cols="84" rows="10" placeholder="Questions"></textarea>
                    </div>
                </div>
                <div class="reset">
                  <button id="btn-reset" type="reset" onclick="document.querySelector('btn-reset')">Contact Us</button>
                </div>
            </div>
            </div>
        </div>
     </section>
     <section class="LastSec">
        <div class="last-text">
            <div class="last-text-page">
            <h3><span>—</span> Book Now <span>—</span></h3>
            <h1>Reserve A Table Now</h1>
            <button type="submit" onClick={reserve}>Make a Reservation</button>
            </div>
        </div>
        <div class="last-textpage">
           <div class="text-page">
             <div class="list-page">
                <h4>Coffee House</h4>
            <ul class="list">
                <li><a href="#">FACEBOOK</a></li>
                <li><a href="#">TWITTER</a></li>
                <li><a href="#">INSTAGRAM</a></li>
                <li><a href="#">TRIP ADVISORY</a></li>
            </ul>
             </div>
           
           </div>
            <p>@2026 CoffeeHouse by Posadas. All Right Reserved</p>
        </div>


        
    </section>
    </body>
    
    </>
  )
}

export default App
