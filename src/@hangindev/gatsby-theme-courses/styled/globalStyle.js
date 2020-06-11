const globalStyle = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: 'Raleway', sans-serif;
  font-variant-numeric: lining-nums;
  -moz-font-feature-settings:"lnum" 1; 
  -moz-font-feature-settings:"lnum=1"; 
  -ms-font-feature-settings:"lnum" 1; 
  -o-font-feature-settings:"lnum" 1; 
  -webkit-font-feature-settings:"lnum" 1; 
  font-feature-settings:"lnum" 1;
  -moz-osx-font-smoothing: grayscale;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  
  font-weight: normal;
  color: rgb(52, 63, 72);
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

.active div {
  background: #ff9100;
}

.active p {
  color: white;
}


`

export default globalStyle
