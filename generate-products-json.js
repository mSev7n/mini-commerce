const fs = require('fs');
const path = require('path');

const imageDir = './src/assets/images';
const outputPath = './src/assets/data/products.json';

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

const products = fs.readdirSync(imageDir).filter(file => /\.(jpg|png|jpeg)$/i.test(file)).map((filename, index) => {
  const name = productNames[filename] || filename.replace(/\.[^/.]+$/, '').replace(/-/g, ' ');
  const slug = filename.replace(/\.[^/.]+$/, '').toLowerCase();

  return {
    id: index + 1,
    title: name,
    slug,
    price: parseFloat((Math.random() * 100 + 20).toFixed(2)),
    image: `assets/images/${filename}`,
    description: `This is a ${name}.`
  };
});

fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
console.log(`✅ products.json created at ${outputPath}`);
