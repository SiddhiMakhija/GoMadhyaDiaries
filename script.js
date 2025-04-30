//JSON data for cities
const cities = [
    {
      name: "📍Indore",
      top: "68%",
      left: "31%",
      imageUrl: "https://imgs.search.brave.com/fQws9iZphuNd66w1y4ylnNZimzc2p2gSjptKqCOUuk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YWltLmV4cGVkaWEu/Y29tL2Rlc3RpbmF0/aW9uLzEvZDY1YzIz/NGQ3MjU1OTUwZDcz/ZDgxNDY4YmE2MWI0/N2MuanBnP2ltcG9s/aWN5PWZjcm9wJnc9/MTA0MCZoPTU4MCZx/PW1lZGl1bUhpZ2g",
    },
    {
      name: "📍Bhopal",
      top: "56%",
      left: "44%",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/61/ef/54/peoples-mall-bhopal.jpg?w=500&h=500&s=1",
    },
    {
      name: "📍Gwalior",
      top: "17%",
      left: "50%",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvxDgJl65ZRmEK3AwvgU2X7Y8bEBSuhZ37A&s",
    },
    {
        name: "📍Amarkantak",
        top: "68%",
        left: "78%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwyciGr6C170gcGTqVa-9Wn-Ue361xYw3SQ&s",
    },
    {
        name: "📍Maihar",
        top: "49%",
        left: "69%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02R3byuPM2SNj8qQgmAM6LcwXuGQKErjGVKy5RGiKxH2WMTxaENPgHNy_SS6lcFN_-70&usqp=CAU",
    },
    {
        name: "📍Kanha",
        top: "75%",
        left: "72.7%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwm_qJawuNQjBhIMqWH2EdWngspzLsfwEHSA&s",
    },
    {
        name: "📍Bandhavgarh",
        top: "42%",
        left: "80%",
        imageUrl: "https://www.bandhavgarh.net/wp-content/uploads/2023/03/bandhavgarh-national-park-gate.webp",
    },
    {
        name: "📍Sanchi",
        top: "45%",
        left: "44%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFll9j2WwhoJpqPTkUUUwmLj_HLApgzHgHw&s",
    },
    {
        name: "📍Shivpuri",
        top: "28%",
        left: "47%",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Scindia_cenotaphs%2C_shivpuri.jpg/1200px-Scindia_cenotaphs%2C_shivpuri.jpg",
    },
    {
        name: "📍Chanderi",
        top: "35%",
        left: "45%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtAEBDKpyN2JI3FoKVbwDpcG9wl_kf3vRrA&s",
    },
    {
        name: "📍Mandu",
        top: "76%",
        left: "22%",
        imageUrl: "https://images.moneycontrol.com/static-mcnews/2021/12/Jahaz-Mahal-Mandu.jpg?impolicy=website&width=1600&height=900",
    },
    {
        name: "📍Burhanpur",
        top: "89%",
        left: "36%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVMJEf8bjUOHYvdCjVnREEZYZOKSbPSEQFA&s",
    },
    {
        name: "📍Khajuraho",
        top: "39%",
        left: "64%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtYT4X8g1FOTnq5sAg1ind327rTTBDoJNGg&s",
    },
    {
        name: "📍Pachmarhi",
        top: "67%",
        left: "57%",
        imageUrl: "https://cdn.s3waas.gov.in/s3c8ffe9a587b126f152ed3d89a146b445/uploads/bfi_thumb/2019072977-olwc6ffieisg6rr0mfiqgrmtz5hhrap06t2h8d7c7e.jpg",
    },
    {
        name: "📍Pench",
        top: "70%",
        left: "66%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhNCNnmD2VT508tP9Fra9n-IMPuJSu3bRDQ&s",
    },
    {
        name: "📍Vidisha",
        top: "49%",
        left: "47%",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAwcpJYqwF6BF6F9P0Lxe32QtWfPqsiQMJA&s",
    },
    {
        name: "📍Udaygiri Caves",
        top: "51%",
        left: "48%",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Varahavtar_Panel.jpg",
    },
    {
        name: "📍Dewas",
        top: "70%",
        left: "37%",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Sayaji-Dwar%2C_Dewas_%28M.P.%29.jpg",
    },
    {
        name: "📍Rewa",
        top: "37%",
        left: "77.5%",
        imageUrl: "https://www.mptourism.com/images/point-of-interest/rewa-poi1.webp",
    },
  ];
  
  // Function to add city markers dynamically
  function addCityMarkers() {
    const mapContainer = document.querySelector('.map-container');
    
    cities.forEach(city => {
      // Create marker
      const marker = document.createElement('div');
      marker.classList.add('marker');
      marker.style.top = city.top;
      marker.style.left = city.left;
      marker.textContent = '📍';
      
      // Create preview
      const preview = document.createElement('div');
      preview.classList.add('preview');
      preview.style.top = `calc(${city.top} + 2%)`;
      preview.style.left = `calc(${city.left} + 2%)`;
  
      const image = document.createElement('img');
      image.src = city.imageUrl;
      preview.appendChild(image);
  
      const cityName = document.createElement('div');
      cityName.classList.add('city-name');
      cityName.textContent = city.name;
      preview.appendChild(cityName);
  
      // Append marker and preview to the map
      mapContainer.appendChild(marker);
      mapContainer.appendChild(preview);
  
      // Add hover effect to show preview
      marker.addEventListener('mouseenter', () => {
        preview.style.display = 'block';
      });
      
      marker.addEventListener('mouseleave', () => {
        preview.style.display = 'none';
      });
    });
  }
  
  // Initialize the markers on page load
  window.onload = addCityMarkers;
  