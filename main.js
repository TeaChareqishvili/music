

window.addEventListener('keydown', function(e){
    console.log(e.keyCode);
      const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
    // // const audio = document.querySelector('audio[data-key="65"]')
     console.log(audio);
})

