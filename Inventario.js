window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }
}
$(document).ready(function(){
    // Realiza una solicitud AJAX al archivo PHP para obtener los datos
    $.ajax({
      url: 'archivo_php.php',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        // Inserta los datos en la tabla HTML
        var tableBody = $('#tablaDatos tbody');
        $.each(data, function(index, row){
          tableBody.append('<tr><td>' + row.idProducto + '</td><td>' + row.nombreProducto + '</td><td>' + row.tipo + '</td></tr>');
          // Añade más celdas según sea necesario
        });
      },
      error: function(xhr, status, error){
        console.error(xhr.responseText);
      }
    });
  });