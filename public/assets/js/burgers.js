$(document).on("click", "#eat", function (event) {
  event.preventDefault();
  console.log($(this).attr("data-burgerId"))
  var burgerId = $(this).attr("data-burgerId")
  $.ajax({
    method: "PUT",
    url: "/api/burgers/" + burgerId
  }).then(function (data) {
    console.log(data)
    window.location.reload()
  })
})

$(document).on("click", "#createBurger", function (event) {
  event.preventDefault();
  var newBurger = $("#newBurger").val().trim()
  console.log(newBurger)
  var burgerId = $(this).attr("data-burgerId")
  $.post("/api/burgers", {burger_name: newBurger}).then(function (data) {
    console.log(data)
    window.location.reload()
  })
})