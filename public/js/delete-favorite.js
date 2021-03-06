async function deleteFormHandler(event) {

  event.preventDefault();

  var testId = document.querySelector('#recordThing').value;
  // const id = window.location.toString().split("/")[
  //   window.location.toString().split("/").length - 1
  // ];

  const response = await fetch(`/api/favorite/${testId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".remove-btn")
  .addEventListener("click", deleteFormHandler);
