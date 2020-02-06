function clickEvents() {
  document.getElementById('filter-modal')
    .addEventListener('click', function(event){
      var ele = document.getElementById('myModal');
      ele.classList.remove("hidden");
      ele.classList.add("show");
    });
    document.querySelector('.close')
      .addEventListener('click', function(event){
        var ele = document.getElementById('myModal');
        ele.classList.remove("show");
        ele.classList.add("hidden");
      });
    filetrContainers = document.querySelectorAll('.filters-conatiner');
    filetrContainers.forEach(function(ele) {
      ele.addEventListener('click', function(event){
          if (event.target.classList.contains('filter')) {
            key = event.target.getAttribute('data-id');
            value = event.target.getAttribute('data-value');
            appendParams(key, value);
          }
        });
    })
   
}
function appendParams (key, value) {
  var url = window.location.href ;
  var url = new URL(window.location.href);
  var query_string = url.search;
  var search_params = new URLSearchParams(query_string);
  search_params.append(key, value);
  url.search = search_params.toString();
  var new_url = url.toString();
  window.location = new_url;
}
clickEvents();
