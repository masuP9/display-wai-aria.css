(function(){
  document.getElementById('tryButton').addEventListener('click', function(){
    var dwa = document.createElement('link');
    dwa.href = "https://rawgit.com/masuP9/display-wai-aria.css/master/display-wai-aria.css";
    dwa.rel = "stylesheet";
    document.head.appendChild(dwa);

    this.setAttribute('disabled', 'disabled');
  })
})();