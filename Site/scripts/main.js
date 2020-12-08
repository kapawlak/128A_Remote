


const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

var linkfile = urlParams.get('linkfile')
console.log(linkfile)
if (linkfile == null){
  linkfile=0
}
console.log(linkfile)


var md = window.markdownit()
md.set({ html: true})


var container = window.markdownitContainer;

md.use(container , 'Figure:Equation',{
 
  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^Figure\:Equation\s*$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="Equation roundbox w3-padding-large w3-padding-32 w3-center">';

    }else{
      return '</div>'
    }}}
  )



md.use(container , 'Figure:Figure',{

  validate: function(params) {
    return params.trim().match(/^Figure\:Figure+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^Figure+(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="Figure roundbox w3-padding-large w3-padding-32 w3-center">';

    }else{
      return '</div>'
    }
  }
});
md.use(container , 'Question',{

  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    // opening tag
    return '<div class="Question roundbox w3-padding-large w3-padding-32 w3-center">';

  }else{
    return '</div>'
  }
}

});
md.use(container , 'Exercise',
{

  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    // opening tag
    return '<div class="Exercise roundbox w3-padding-large w3-padding-32 w3-center">';

  }else{
    return '</div>'
  }
}

});
md.use(container , 'Figure:Table',
{
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    // opening tag
    return '<div class="Table roundbox w3-padding-large w3-padding-32 w3-center">';

  }else{
    return '</div>'
  }
}
});

md.use(container,'Figure:Simulation', {
  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^Figure\:Simulation+(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="Simulation roundbox w3-padding-large w3-padding-32 w3-center">';

    }else{
      return '</div>'
    }
  }
})


md.use(container,'Note',{

  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
    // opening tag
    return '<div class="Note roundbox w3-padding-large w3-padding-32 w3-center">';

  }else{
    return '</div>'
  }
}

})



  
  function activeincludeHTML(filenum=linkfile) {
    var z, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementById("mdcontent");

    file= "lab"+filenum+".md"
    
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {z.innerHTML = doRendering(this.responseText) ;}
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
    urlParams.set("linkfile", file);
    activeincludeHTML(file)
  }

  function doRendering(md_text){
    
    var markdown = md_text;
    return md.render(markdown);
  }

  function updateRoutine(){
    renderMathInElement(document.body, {
      delimiters:[
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true}
      ]})
 
    idheaders()
    tableOfContents('[data-toc]', '[data-content]')
    movefig()
    
  }
    

    

  function movefig() {
    var z, i, elmnt;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByClassName("Figure");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];

      elmnt.className = "Figure w3-padding-large w3-padding-32 w3-center";
     
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





