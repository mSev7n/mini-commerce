// import Node.js file system and path modules
const fs = require('fs');
const path = require('path');

// to define the folder where product images are stored
const imageDir = './src/assets/images';

// to define where the output JSON should be saved
const outputPath = './src/assets/data/products.json';

// for custom, clean display names for products
const productNames = {
  'retro-sneakers.jpg': 'Retro Sneakers',
  'wireless-headphones.jpg': 'Wireless Headphones',
  'smart-watch.jpg': 'Smart Watch',
  'backpack.jpg': 'Backpack',
  'gaming-mouse.jpg': 'Gaming Mouse',
  'desk-lamp.jpg': 'Desk Lamp',
  'bluetooth-speaker.jpg': 'Bluetooth Speaker',
  'water-bottle.jpg': 'Water Bottle'
};

// custom descriptions for each product — keep all keys lowercase for safety
const descriptionMap = {
  'retro-sneakers.jpg': 'Step into classic style with our retro sneakers — durable, comfy, and always in fashion.',
  'wireless-headphones.jpeg': 'Experience immersive sound with wireless headphones built for long hours and deep bass.',
  'smart-watch.jpeg': 'Track your fitness and stay connected on the go with this stylish smart watch.',
  'backpack.jpeg': 'Modern, lightweight backpack for daily commutes, travel, or study sessions.',
  'gaming-mouse.jpeg': 'Ergonomic RGB gaming mouse with lightning-fast precision and sleek design.',
  'desk-lamp.jpeg': 'Adjustable LED desk lamp with minimalist design — perfect for work or study.',
  'bluetooth-speaker.jpeg': 'Portable Bluetooth speaker with rich bass and long-lasting battery life.',
  'water-bottle.jpeg': 'Eco-friendly stainless steel bottle that keeps drinks hot or cold for hours.'
};


// read all files in the image directory
const products = fs.readdirSync(imageDir)

  // only keep image files (jpg, jpeg, png)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))

  // to create a product object from each file
  .map((filename, index) => {
    const normalizedKey = filename.toLowerCase(); // Match lowercase keys
    const name = productNames[normalizedKey] || filename.replace(/\.[^/.]+$/, '').replace(/-/g, ' ');
    const slug = filename.replace(/\.[^/.]+$/, '').toLowerCase();
    const description = descriptionMap[normalizedKey] || `This is a high-quality ${name}.`;

    if (!descriptionMap[normalizedKey]) {
      console.warn(`⚠️ No custom description found for: ${normalizedKey}`);
    }

    return {
      id: index + 1,
      title: name,
      slug,
      price: parseFloat((Math.random() * 100 + 20).toFixed(2)), // Random price between 20–120
      image: `assets/images/${filename}`,
      description
    };
  });

// to save the final product list to products.json
fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
console.log(`✅ products.json created at ${outputPath}`);

// <--mSeven-->
