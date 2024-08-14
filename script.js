document.addEventListener('DOMContentLoaded', function () {
    var data = [
      {
        "text": "Exquisite Watches",
        "subText": "Gold Luxury, Choose Us",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "price": "$499.00",
        "image": "./watch1.png",
        "ambientColor": "#f4aa69",
        "ambientColor1": "#fedabb",
      },
      {
        "text": "Dainty Timepieces",
        "subText": "Silver Luxury, Choose Us",
        "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "price": "$469.00",
        "image": "./watch2.png",
        "ambientColor": "#b2b4b4",
        "ambientColor1": "#e1e1e1",
      },
      {
        "text": "Elegant Timepieces",
        "subText": "Choose Luxury, Choose Us",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "price": "$529.00",
        "image": "./watch3.png",
        "ambientColor": "#39ab60",
        "ambientColor1": "#65d48b",
      },
      {
        "text": "Refined Timepieces",
        "subText": "Choose Luxury, Choose Us",
        "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "price": "$599.00",
        "image": "./watch4.png",
        "ambientColor": "#f45b59",
        "ambientColor1": "#fe9e8d",
      },
      // Add more slides as needed...
    ];

    // Dynamically create the slides
    var splideList = document.querySelector('.splide__list');
    data.forEach((item, index) => {
      var li = document.createElement('li');
      li.classList.add('splide__slide');
  
      var img = document.createElement('img');
      img.src = item.image;
      img.alt = `Watch ${index + 1}`;
  
      li.appendChild(img);
      splideList.appendChild(li);
    });
  
    // Initialize Splide
    var splide = new Splide('#splide-carousel', {
      type: 'loop',
      perPage: 1,
      pagination: false,
      arrows: true
    }).mount();
  
    // Set initial values
    function updateContent(index) {
      var item = data[index];
      document.getElementById('carousel-title').textContent = item.text;
      document.getElementById('carousel-subtext').textContent = item.subText;
      document.getElementById('carousel-description').textContent = item.description;
      document.getElementById('carousel-price').textContent = item.price;
      document.getElementById('carousel').style.background = `linear-gradient(to right, ${item.ambientColor}, ${item.ambientColor1})`;
      document.getElementById('header').style.background = `linear-gradient(to right, ${item.ambientColor}, ${item.ambientColor1})`;
    }
  
    // Initial content setup
    updateContent(0);
  
    // Update content on slide move
    splide.on('move', function (newIndex) {
      updateContent(newIndex);
    });
  });
