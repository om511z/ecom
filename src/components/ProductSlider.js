import React from 'react'
import AliceCarousel, { AutoplayDirection, AutoPlayStrategy } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ProductSlider = () => {
    const responsive = {
        0: { 
            items: 1.2
        },
		350: { 
            items: 1.4
        },
        568: { 
            items: 1.4
        },
        700: { 
          items: 2.7
      },
        1024: {
            items: 3.5, 
            itemsFit: 'contain'
            
        },
		1124: {
            items: 5.5, 
            itemsFit: 'contain'
            
        },
    };
    

    
   
  return (
    <>
    <div class="slider">
    <h1>Our Product Gallery</h1>
    <div className='line'></div>
     <div className='slidercard'>
        
        <AliceCarousel 
         responsive={responsive}
        
        >
           <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
    <div class="product-card">
		<div class="product-tumb">
			<img src="http://cdn.shopify.com/s/files/1/0420/7073/7058/collections/2.jpg?v=1666953388" alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
			</div>
		</div>
	</div>
        
         
        </AliceCarousel>
     </div>
     </div>

    
    </>
   
 
  )
}

export default ProductSlider