var md = window.markdownit();
var container = window.markdownitContainer;

// md.use('container' , 'Figure', {

//   validate: function(params) {
//     return params.trim().match(/^Figure\s+(.*)$/);
//   },

//   render: function (tokens, idx) {
//     var m = tokens[idx].info.trim().match(/^Figure\s+(.*)$/);

//     if (tokens[idx].nesting === 1) {
//       // opening tag
//       return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

//     } else {
//       // closing tag
//       return '</details>\n';
//     }
//   }
// });
md.use(container , 'Figure',{

  validate: function(params) {
    return params.trim().match(/^Figure(.)+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^Figure+(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="Figure w3-border w3-padding-large w3-padding-32 w3-center">';

    }else{
      return '</div>'
    }
  }
});
md.use(container , 'Question');
md.use(container , 'Exercise');


console.log(md.render(':::Figure click me\n*content*\n:::\n'));



function doRendering(md_text){
    
    var markdown = md_text;
    return md.render(markdown);
  }

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = doRendering(this.responseText);}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            updateRoutine()
            includeHTML()
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        updateRoutine();
        return;
        
      }
    }
  };
  
  function activeincludeHTML(file) {
    var z, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementById("mdcontent");
    
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {z.innerHTML = doRendering(this.responseText);}
          if (this.status == 404) {z.innerHTML = "<h1>This lab is not available yet!</h1>";}
          updateRoutine();
          /*remove the attribute, and call this function once more:*/
        }
      }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
        
      }
    
    
  };

  function changepage(file){


    activeincludeHTML(file)
  }
  function updateRoutine(){
    idheaders()
    movefig()
    renderMathInElement(document.body, {
      delimiters:[
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true}
      ]})

  }



  function movefig() {
    var z, i, elmnt;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByClassName("Figure");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];

      elmnt.className = "Figure w3-border w3-padding-large w3-padding-32 w3-center";
     
    }

    return
  };


function idheaders() {
  headers=document.getElementsByTagName("h1");
  for (i = 0; i < headers.length; i++) {
    elmnt = headers[i];
    if (i>0){
    elmnt.innerHTML= "Part " + romanize(i) +": "+elmnt.innerHTML
    }
   
    elmnt.id = "part" +i ;
   
  }

}


75

function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}