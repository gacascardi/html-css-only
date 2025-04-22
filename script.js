function convertDecimalToBase(decimalPart, base, precision = 5) {
    let result = ".";
    for (let i = 0; i < precision; i++) {
        decimalPart *= base;
        let integerPart = Math.floor(decimalPart);
        result += integerPart.toString(base);
        decimalPart -= integerPart;

        if (decimalPart === 0) break;
    }
    return result;
}

function convertValue() {
    const inputValue = document.getElementById("inputValue").value;
    const inputBase = parseInt(document.getElementById("inputBase").value);

    const parts = inputValue.split('.');
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? `0.${parts[1]}` : 0;

    let decimalValueInt = parseInt(integerPart, inputBase);
    let decimalValueDec = parseFloat(decimalPart);

    document.getElementById("outputBinary").textContent = decimalValueInt.toString(2) + convertDecimalToBase(decimalValueDec, 2);
    document.getElementById("outputOctal").textContent = decimalValueInt.toString(8) + convertDecimalToBase(decimalValueDec, 8);
    document.getElementById("outputDecimal").textContent = decimalValueInt.toString(10) + (decimalPart === 0 ? "" : ".");
    document.getElementById("outputHex").textContent = decimalValueInt.toString(16).toUpperCase() + convertDecimalToBase(decimalValueDec, 16);
}

// Seleciona todos os vídeos na página
const videos = document.querySelectorAll('video');

// Adiciona eventos para reproduzir o vídeo ao passar o mouse
videos.forEach((video) => {
  video.addEventListener('mouseenter', () => {
    video.play(); // Reproduz o vídeo
  });

  video.addEventListener('mouseleave', () => {
    video.pause(); // Pausa o vídeo
    video.currentTime = 0; // Reinicia o vídeo
  });
});

//teste redes sociais
$(document).ready(function() {
  $('i').hide();
})

$(window).load(function() {
  $('i').show();

  var whatsappPos = $('#whatsapp').position();
  var githubPos = $('#github').position();
  var instagramPos = $('#instagram').position();
  var linkedinPos = $('#linkedin').position();
  var codePos = $('#code').position();
  var facebookPos = $('#facebook').position();
  var mailPos = $('#mail').position();
  var imgPos = $('.me').position();
  
  // Ajuste a posição inicial dos ícones para ficarem mais próximos da imagem
  $('i').css({
    position: 'absolute',
    zIndex: '1',
    top: imgPos.top + 50, // Reduzido de 100 para 50
    left: '47%'
  });
  
  setTimeout(function() {
    $('#whatsapp').animate({
      top: whatsappPos.top + 30, // Reduzido de 50 para 30
      left: whatsappPos.left - 5 // Ajuste fino
    }, 500);
  }, 250);
  
  setTimeout(function() {
    $('#whatsapp').animate({
      top: whatsappPos.top,
      left: whatsappPos.left
    }, 250);
    
    $('#github').animate({
      top: githubPos.top + 5, // Reduzido de 10 para 5
      left: githubPos.left - 3 // Ajuste fino
    }, 500);
  }, 500);
  
  setTimeout(function() {
    $('#github').animate({
      top: githubPos.top,
      left: githubPos.left
    }, 250);
    
    $('#instagram').animate({
      top: instagramPos.top + 5, // Reduzido de 10 para 5
      left: instagramPos.left - 2 // Ajuste fino
    }, 500);
  }, 750);
  
  setTimeout(function() {
    $('#instagram').animate({
      top: instagramPos.top,
      left: instagramPos.left
    }, 250);
    
    $('#linkedin').animate({
      top: linkedinPos.top + 5, // Reduzido de 10 para 5
      left: linkedinPos.left
    }, 500);
  }, 1000);
  
  setTimeout(function() {
    $('#linkedin').animate({
      top: linkedinPos.top,
      left: linkedinPos.left
    }, 250);
    
    $('#code').animate({
      top: codePos.top + 5, // Reduzido de 10 para 5
      left: codePos.left - 2 // Ajuste fino
    }, 500);
  }, 1250);
  
  setTimeout(function() {
    $('#code').animate({
      top: codePos.top,
      left: codePos.left
    }, 250);
    
    $('#facebook').animate({
      top: facebookPos.top + 5, // Reduzido de 10 para 5
      left: facebookPos.left + 3 // Ajuste fino
    }, 500);
  }, 1500);
  
  setTimeout(function() {
    $('#facebook').animate({
      top: facebookPos.top,
      left: facebookPos.left
    }, 250);
    
    $('#mail').animate({
      top: mailPos.top + 5, // Reduzido de 10 para 5
      left: mailPos.left + 5 // Ajuste fino
    }, 500);
  }, 1750);
  
  setTimeout(function() {
    $('#mail').animate({
      top: mailPos.top,
      left: mailPos.left
    }, 250);
  }, 2000);
  
})

// by Grazz
convertValue();
