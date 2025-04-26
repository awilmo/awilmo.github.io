document.getElementById("x1").addEventListener("click", () => {
	const element = document.getElementById("srow1");
	element.remove();
});

document.getElementById("x2").addEventListener("click", () => {
	const element = document.getElementById("srow2");
	element.remove();
});

document.getElementById("x3").addEventListener("click", () => {
	const element = document.getElementById("srow3");
	element.remove();
});

document.getElementById("x4").addEventListener("click", () => {
	const element = document.getElementById("srow4");
	element.remove();
});


var users;

if (post_search) {
	users = [
	  { name: "veratar", rowId: "srow1" },
	  { name: "psikoe", rowId: "srow2" },
	  { name: "commonkat", rowId: "srow3" },
	  { name: "jacksonabat", rowId: "srow4" }
	];
}
else {
	users = [
	  { name: "bob", rowId: "srow1" },
	  { name: "margaret", rowId: "srow2" },
	  { name: "phillip", rowId: "srow3" },
	  { name: "greg", rowId: "srow4" }
	];

}

document.getElementById("search-bar").addEventListener("input", () => {
  const query = document.getElementById("search-bar").value.toLowerCase();

  users.forEach(user => {
    const row = document.getElementById(user.rowId);
    if (row) {
      if (user.name.startsWith(query)) {
        row.style.display = "flex"; 
      } else {
        row.style.display = "none";
      }
    }
  });
});
