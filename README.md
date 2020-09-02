# web-dev-playground

1. clone this repo
2. add html template in `html` dir
3. start webpack-dev-server
4. work with style in `style` dir
5. save your modify and get result in browser

## clone this repo

just type

```bash
git clone https://github.com/sinsong/web-dev-playground.git
```

## webpack-dev-server

type command

```bash
npm run dev
```

on your browser in http://localhost:8080

## html template

default html template filename is `index.html` in `html` dir.
you can use multiply template in `html` dir, change filename in `webpack.config.js` and restart the webpack-dev-server.

```js
new HtmlWebpackPlugin({
    template: path.join(__dirname, 'html/index.html'), // change filename here, reserve prefix html/
    filename: 'index.html', // output filename, output in dist dir
    inject: true,
    hash: true
})
```

tips:
> save webpage in browser(Ctrl + S) and put html file into `html` dir.
> remember to remove script and link tag, then refactoring style.

## `static` dir

`static` dir is map to webroot(root dir of website)

## webpack things

entry point(of resources) is `index.js`, and `index.js` `require` the `../style/index.scss` relative.