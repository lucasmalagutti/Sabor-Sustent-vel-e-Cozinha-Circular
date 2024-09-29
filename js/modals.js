$(document).ready(function () {
  $("#openModalSopa").click(function (event) {
    event.preventDefault();
    $("#modalContainer").load("modals/modal-sopa.html", function () {
      $("#recipeModal").modal("show");
    });
  });
  $("#openModalTortilha").click(function (event) {
    event.preventDefault();
    $("#modalContainer").load("modals/modal-tortilha.html", function () {
      $("#recipeModal").modal("show");
    });
  });

  $("#openModalSalada").click(function (event) {
    event.preventDefault();
    $("#modalContainer").load("modals/modal-salada.html", function () {
      $("#recipeModal").modal("show");
    });
  });

  $("#openModalBolinho").click(function (event) {
    event.preventDefault();
    $("#modalContainer").load("modals/modal-bolinho.html", function () {
      $("#recipeModal").modal("show");
    });
  });

  // $("#openModalFrutas").click(function (event) {
  //   event.preventDefault();
  //   $("#modalContainer").load("modals/modal-frutas.html", function () {
  //     $("#recipeModal").modal("show");
  //   });
  // });

  // $("#openModalHamburguer").click(function (event) {
  //   event.preventDefault();
  //   $("#modalContainer").load("modals/modal-hamburguer.html", function () {
  //     $("#recipeModal").modal("show");
  //   });
  // });
});
