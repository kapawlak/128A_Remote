// Check the file to be loaded based on URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var linkfile = urlParams.get('linkfile')
if (linkfile == null){
  linkfile=0
}


//Load markdown it and container plugin
var md = window.markdownit()
md.set({ html: true})
var container = window.markdownitContainer;

//Markdownit Container special settings


const preamble='<div class="w3-row" style="margin: 50px 0px;"><div class="w3-col l2 m2 s12 "> </div>'
const postamble='</div><div class="w3-col l2 m2 s12 "></div>'

md.use(container , 'Figure:Equation',{
  render: function (tokens, idx) {
     if (tokens[idx].nesting === 1) { 
      // This places an opening tag
      return preamble+'<div class="w3-col Equation roundbox s12 m8 l8 w3-center">';

    }else{
      // This places a closing tag
      return postamble + '</div>'
    }}
  })
md.use(container , 'Question',{
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) { 
       // This places an opening tag
       return  preamble+'<div class="w3-col Question roundbox  s12 m8 l8 w3-center">'
 
     }else{
       // This places a closing tag
       return postamble + '</div>'
      }
     }
  
  });
md.use(container , 'Exercise',
{
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
      // This places an opening tag
      return  '<div class="w3-row"><div class="w3-col Exercise roundbox s12 m12 l12 w3-center">'

    }else{
      // This places a closing tag
      return '</div></div>'
    }
  }
  })
md.use(container,'Figure:Simulation', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
     // This places an opening tag
     return '<div class="w3-row"> <div class="w3-col Simulation roundbox s12 m12 l12 w3-center">';

   }else{
     // This places a closing tag
     return  '</div></div>'
   }}
})
md.use(container,'Note',{
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
     // This places an opening tag
     return  preamble+'<div class="w3-col Note roundbox  s12 m8 l8 w3-center">'

   }else{
     // This places a closing tag
     return postamble + '</div>'
    }
   }
})
md.use(container,'Video', {
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
     // This places an opening tag
     return '<div class="w3-row"> <div class=" Video roundbox w3-center">';

   }else{
     // This places a closing tag
     return  '</div></div>'
   }}
})


// Full Width Figure
md.use(container , 'Figure:Figure',{
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) { 
     // This places an opening tag
     return '<div class="w3-row Figure Fig roundbox w3-center">';

   }else{
     // This places a closing tag
     return  '</div>'
   }}
});

// Right Float Figure
md.use(container , 'Figure:RFigure',{



  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="RFigure Fig roundbox">';

    }else{
      return '</div>'
    }
  }
});

//Left Float Figure
md.use(container , 'Figure:LFigure',{

  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="LFigure Fig roundbox w3-center">';

    }else{
      return '</div>'
    }
  }
});

// column
md.use(container , 'col',{

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^col(.*)$/);
    console.log(m)
    if (tokens[idx].nesting === 1) {
      console.log('regex', md.utils.escapeHtml(m[1]))
      // opening tag
      return '<div class="w3-col'+md.utils.escapeHtml(m[1])+'">';

    }else{
      return '</div>'
    }
  }
});

md.use(container , 'row',{

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^row(.*)$/);
    console.log(m)
    if (tokens[idx].nesting === 1) {
      console.log('regex', md.utils.escapeHtml(m[1]))
      // opening tag
      return '<div class="w3-row '+md.utils.escapeHtml(m[1])+'">';

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
  replace_icon()
  tableOfContents('[data-toc]', '[data-content]')
  setLightBox()
  document.getElementById('collapsible').style.bottom='0px'
 
  }
    

    




function idheaders() {
  headers=document.getElementsByTagName("h1");
  for (i = 0; i < headers.length; i++) {
    elmnt = headers[i];
    if (i>0){
    elmnt.innerHTML= "Part " + romanize(i) +": "+elmnt.innerHTML
    }
    //elmnt.classList.toggle('w3-row')
   
    elmnt.id = "part" +i ;
   
  }
  // headers=document.getElementsByTagName("h2");
  // for (i = 0; i < headers.length; i++) {
  //   elmnt = headers[i];
  //   elmnt.classList.add('prettyhead') ;
   
  // }


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


function setLightBox(){
  // all images inside the image modal content class
  const lightboxImages = document.querySelectorAll('.Fig img');

  // dynamically selects all elements inside modal popup
  const modalElement = element =>
    document.querySelector(`.image-modal-popup ${element}`);

  const body = document.querySelector('body');
  const modalPopup = document.querySelector('.image-modal-popup');

  // closes modal on clicking anywhere and adds overflow back
  document.addEventListener('click', () => {
    body.style.overflow = 'auto';
    modalPopup.style.display = 'none';
  });



  // loops over each modal content img and adds click event functionality
  lightboxImages.forEach(img => {
    const data = img.dataset;
    img.addEventListener('click', e => {
      body.style.overflow = 'hidden';
      e.stopPropagation();
      modalPopup.style.display = 'block';
      modalElement('h3').innerHTML = img.alt;
      modalElement('img').src = img.src;
    });
    });
}



function replace_icon(){
  text=document.querySelectorAll('#mdcontent h3, #mdcontent h2, #mdcontent p, .Table td')
  for(i=0;i<text.length;i++){
    emojified=text[i].innerHTML.replaceAll(/(\@)(.*)(\@)/g, "<i class='fa $2'></i>")
    text[i].innerHTML=emojified
  }
}
