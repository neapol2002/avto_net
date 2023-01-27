const carsInfo1 = [
    {id:1, name: 'Mercedes-Benz Actros 2645', model: '2019', speed: '97000kms',url: `accessories-detail.html`, info: 'kldkldsdsd', images:[
        'products-images/truck-1.jpg'
    ]},
    {id:2, name: 'Volve', model: '2019', speed: '24000kms', images:[
        'products-images/truck6.png'
    ]},
    {id: 3, name: 'Isuzu', model: '2019', speed: '97000kms', images:[
        'products-images/truck5.png'
    ]},
    {id:4, name: 'UD', model: '2019', speed: '97000kms', images:[
        'products-images/truck-f1.png'
    ]},
   
  ]
  
  function getCars(data){
    const carData = document.getElementById('cars')
    data.map((item)=>{
      carData.innerHTML += `
      <div class="item">
      <div class="item-img">
        <div class="item-img-info product-image">
          <img src="${item.images[0]}" alt="Retis lapen casen">
        </div>
      </div>
      <div class="item-info">
        <div class="info-inner">
          <div class="item-content">
            <div class="other-info">
              <div class="item-title"><a href="accessories-detail.html" title="Retis lapen casen">${item.name} </a> </div>
              <div class="col-km"><i class="fa fa-tachometer"></i>${item.speed}</div>
          
              <div class="col-engine"><i class="fa fa-gea"></i></div>
              <div class="col-date"><i class="fa fa-calendar" aria-hidden="true"></i>${item.model}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
      `
    })
  }
  getCars(carsInfo1)


  
 const carsInfo2 = [
    {
        id:"5", name: 'Toyota hilux', model: '2019', speed: '687kms', images:[
        'products-images/hilux-f1.png'
    ]
},
    {
        id:"6", name: 'V Bus', model: '2019', speed: '24000kms', images:[
        'products-images/bus.png'
    ]
},
    {id:"7", name: 'Isuzu', model: '2019', speed: '97000kms', images:[
        'products-images/truck5.png'
    ]},
    {id:"8", name: 'UD', model: '2019', speed: '97000kms', images:[
        'products-images/truck-f1.png'
    ]},
]
        getCars2(carsInfo2)
    function getCars2(data){
        const cars = document.getElementById('cars2');
         data.forEach((item) => {
             let carDate = `
             <div class="item">
             <div class="item-inner">
               <div class="item-img">
               </div>
             </div>
             <div class="item-img-info product-image">
          <img src="${item.images[0]}" alt="Retis lapen casen">
        </div>  
               <div class="item-info">
                 <div class="info-inner">
                   <div class="item-content">
                     <div class="rating">
                       
                     </div>
                     <!-- <div class="item-price">
                       <div class="price-box"><span class="regular-price"><span class="price">$99000.00</span> </span> </div>
                     </div> -->
                     <br><br>
                     <div class="other-info">
                       
                       <div class="item-title"><a href="#" title="Retis lapen casen" id="product">${item.name} </a> </div>
                       <div class="col-km"><i class="fa fa-tachometer"></i>${item.speed}</div>
                       <div class="col-engine"><i class="fa fa-gea"></i></div>
                       <div class="col-date"><i class="fa fa-calendar" aria-hidden="true"></i>${item.model}</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
             
             `;

             cars.innerHTML += carDate 
         })
    }

    const carsInf3 = [
        {
            id:'9', name: 'VW Golf 7 R', speed: '65000kms', model: '2019', images:
        ['products-images/g2.png']
    },
        {
            id:'10', name: 'VW Golf GTI', speed: '847kms', model: '2018', images:
        ['products-images/gti-side.png']
    },
        {
            id:'9', name: 'Ford Mustage GT', speed: '689kms', model: '2017', images:
        ['products-images/horse.png']
    },
        {
            id:'9', name: 'Hyundia i20', speed: '43000kms', model: '2019', images:
        ['products-images/honda-f1.png']
    },
]
        getCars3(carsInf3)
     function getCars3(data){
         const carId = document.getElementById('cars3') ;
         data.forEach((item)=> {
             let car = `
             <div class="item">
             <div class="item-inner">
               <div class="item-img">
               </div>
             </div>
             <div class="item-img-info product-image">
          <img src="${item.images[0]}" alt="Retis lapen casen">
        </div>  
               <div class="item-info">
                 <div class="info-inner">
                   <div class="item-content">
                     <div class="rating">
                       
                     </div>
                     <!-- <div class="item-price">
                       <div class="price-box"><span class="regular-price"><span class="price">$99000.00</span> </span> </div>
                     </div> -->
                     <br><br>
                     <div class="other-info">
                       
                       <div class="item-title"><a href="#" title="Retis lapen casen" id="product">${item.name} </a> </div>
                       <div class="col-km"><i class="fa fa-tachometer"></i>${item.speed}</div>
                       <div class="col-engine"><i class="fa fa-gea"></i></div>
                       <div class="col-date"><i class="fa fa-calendar" aria-hidden="true"></i>${item.model}</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
             `;

             carId.innerHTML += car
         })
     }



     
    const carsInf4 = [
      {
          id:'9', name: 'VW Golf 7 R', speed: '65000kms', model: '2019', images:
      ['products-images/g2.png']
  },
      {
          id:'10', name: 'VW Golf GTI', speed: '847kms', model: '2018', images:
      ['products-images/gti-side.png']
  },
      {
          id:'9', name: 'Ford Mustage GT', speed: '689kms', model: '2017', images:
      ['products-images/horse.png']
  },
      {
          id:'9', name: 'Hyundia i20', speed: '43000kms', model: '2019', images:
      ['products-images/honda-f1.png']
  },
]
        getCars4(carsInf4)
     function getCars4(data){
         const carId = document.getElementById('cars4') ;
         data.forEach((item)=> {
             let car = `
             <div class="item">
             <div class="item-inner">
               <div class="item-img">
               </div>
             </div>
             <div class="item-img-info product-image">
             <img src="${item.images[0]}" alt="Retis lapen casen">
           </div>  
               <div class="item-info">
                 <div class="info-inner">
                   <div class="item-content">
                     <div class="rating">
                       
                     </div>
                     <!-- <div class="item-price">
                       <div class="price-box"><span class="regular-price"><span class="price">$99000.00</span> </span> </div>
                     </div> -->
                     <br><br>
                     <div class="other-info">
                       
                       <div class="item-title"><a href="#" title="Retis lapen casen" id="product">${item.name} </a> </div>
                       <div class="col-km"><i class="fa fa-tachometer"></i>${item.speed}</div>
                       <div class="col-engine"><i class="fa fa-gea"></i></div>
                       <div class="col-date"><i class="fa fa-calendar" aria-hidden="true"></i>${item.model}</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
             `;

             carId.innerHTML += car
         })
     }







































     const detailsInfo = [
        {id:"1", name: 'Mercedes-Benz Actros 2645', model: '2019', speed: '97000kms',url: `accessories-detail.html`, info: 'kldkldsdsd', images:[
            'products-images/truck-1.jpg'
        ]},
        {id:"2", name: 'Volve', model: '2019', speed: '24000kms', images:[
            'products-images/truck6.png'
        ]},
        {id: '3', name: 'Isuzu', model: '2019', speed: '97000kms', images:[
            'products-images/truck5.png'
        ]},
        {id:"4", name: 'UD', model: '2019', speed: '97000kms', images:[
            'products-images/truck-f1.png'
        ]},
       
      ]

     function getDetails(data){
       const detail = document.getElementById('details') !== null
        const getId = data.find((item)=> {
         
          
          console.log(item)
          detail.innerHTML =`
       <div class="product-image">
       <div class="product-full"> <img id="product-zoom" src="${item.images[0]}" data-zoom-image="${item.images[0]}" alt="product-image"/> </div>
       <div class="more-views">
        <div class="slider-items-products">
           <div id="gallery_01" class="product-flexslider hidden-buttons product-img-thumb">
             <div class="slider-items slider-width-col4 block-content">
               <div class="more-views-items"> <a href="#" data-image="https://www.trucksnl.com/pictures/ad-6577952-99e5fc63b9ae21ce/other_trucks_mercedes_benz_actros_2645_ls_6x4_2015_6577952-2.jpg?format=jpg&quality=70&w=1110&h=832" data-zoom-image="https://www.trucksnl.com/pictures/ad-6577952-99e5fc63b9ae21ce/other_trucks_mercedes_benz_actros_2645_ls_6x4_2015_6577952-2.jpg?format=jpg&quality=70&w=1110&h=832"> <img id="product-zoom0"  src="https://www.trucksnl.com/pictures/ad-6577952-99e5fc63b9ae21ce/other_trucks_mercedes_benz_actros_2645_ls_6x4_2015_6577952-2.jpg?format=jpg&quality=70&w=1110&h=832" alt="product-image"/> </a></div>
               <div class="more-views-items"> <a href="#" data-image="https://www.automarket.cz/content/mercedes-benz-actros-1844-ls-4x2-6512/3/2491075_15.JPG" data-zoom-image="https://www.automarket.cz/content/mercedes-benz-actros-1844-ls-4x2-6512/3/2491075_15.JPG"> <img id="product-zoom1"  src="https://www.automarket.cz/content/mercedes-benz-actros-1844-ls-4x2-6512/3/2491075_15.JPG" alt="product-image"/> </a></div>
               <div class="more-views-items"> <a href="#" data-image="https://img5.auto24.ee/auto24/320/737/35554737.jpg" data-zoom-image="https://img5.auto24.ee/auto24/320/737/35554737.jpg"> <img id="product-zoom2"  src="https://img5.auto24.ee/auto24/320/737/35554737.jpg" alt="product-image"/> </a></div>
               <div class="more-views-items"> <a href="#" data-image="http://autoenaccion.com.ar/E7523FqucY6naW4rG9JTgLBC8/uploads/2018/05/MB_Arocs_3.jpg" data-zoom-image="http://autoenaccion.com.ar/E7523FqucY6naW4rG9JTgLBC8/uploads/2018/05/MB_Arocs_3.jpg"> <img id="product-zoom3"  src="http://autoenaccion.com.ar/E7523FqucY6naW4rG9JTgLBC8/uploads/2018/05/MB_Arocs_3.jpg" alt="product-image"/> </a> </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <!-- end: more-images --> 
   </div>
<!--End For version 1,2,6-->
 <!-- For version 3 -->
 <div class="product-shop col-lg- col-sm-7 col-xs-12">
    
     <div class="brand">${item.name}</div>
     <div class="product-name">
       <h1>Mercedes-Benz Actros 2645 </h1>
     </div>
     <div class="short-description">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. </p>
     </div>  
   </div>
       
       `
      })
     }

     getDetails(carsInfo1)
