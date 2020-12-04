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
md.use(container , 'Figure');
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
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        movefig()

        return;
        
      }
    }
    
  };




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


  // function doLaTeX(){
  //   renderMathInElement(document.body, {
  //     delimeters:[
  //             {left: "$$", right: "$$", display: true},
  //             {left: "$", right: "$", display: false},
  //             {left: "\\(", right: "\\)", display: false},
  //             {left: "\\[", right: "\\]", display: true}
  //           ]
  // });
  // }