const path = require('path')

module.exports = {
    entry: "./src/index.js", 
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.css$/, 
                use: ["style-loader","css-loader"] // executes from the right to the left (the css-loader loads all css files, processes the css statements and passes the data to the style loader to load inside the html document via a style tags ) 
            }
        ]
    }
}