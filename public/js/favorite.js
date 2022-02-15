async function favoriteClickHandler(event) {
  event.preventDefault();

  const craft_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/favorite`, {
    method: "POST",
    body: JSON.stringify({
      craft_id: craft_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".favorite-btn")
  .addEventListener("click", favoriteClickHandler);
