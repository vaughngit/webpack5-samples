
### GH CLI: 

gh repo create 
gh repo create react-portfolio-app
gh repo delete portfolio-app  

# Instructions
## Bundle directly via npx webpack :  
    npx webpack --config webpack.config.js --mode development

## Bundle via package.json script
    "build": "webpack --config webpack.config.js --mode development"
     npm run build 
     
## run bundle with node: 
    node .\dist\bundle.js

## add bundle to index.html file: 
<html>
<head></head>
<body></body>
<script src="../dist/bundle.js"></script>
</html>

## install CSS loaders 
    npm i --save-dev css-loader style-loader
    see Webpack_CSS_Loader\webpack.config.js 

## open index.html in browser 
