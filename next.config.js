const path = require('path');
const withFonts = require('next-fonts');
const dev = process.env.NODE_ENV !== 'production';
module.exports = withFonts({
    env: {
        BASE_URL: dev ? 'http://localhost:3000' : 'http://52.14.64.252:3000'
      },
  
  webpack: config => {

    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
   
    domains: ['res.cloudinary.com'],
    loader: 'imgix',
    path: '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
 


 
 
})