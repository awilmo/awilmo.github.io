document.addEventListener("DOMContentLoaded", () => {
  const dateInputFrom = document.getElementById("dateInputFrom");
  const selectedDateFrom = document.getElementById("selectedDateFrom");

  const dateInputTo = document.getElementById("dateInputTo");
  const selectedDateTo = document.getElementById("selectedDateTo");

  selectedDateFrom.addEventListener("click", () => {
    dateInputFrom.showPicker();
  });

  selectedDateTo.addEventListener("click", () => {
    dateInputTo.showPicker();
  });

  dateInputFrom.addEventListener("change", () => {
    selectedDateFrom.textContent = formatDate(dateInputFrom.value);
  });

  dateInputTo.addEventListener("change", () => {
    selectedDateTo.textContent = formatDate(dateInputTo.value);
  });

  function formatDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day); // month is 0-based
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const fromDate = localStorage.getItem("fromDate");
  const toDate = localStorage.getItem("toDate");

  if (fromDate) {
    document.getElementById("dateInputFrom").value = fromDate;
    document.getElementById("selectedDateFrom").textContent = formatDate(fromDate);
  }

  if (toDate) {
    document.getElementById("dateInputTo").value = toDate;
    document.getElementById("selectedDateTo").textContent = formatDate(toDate);
  }

  // function formatDate(value) {
  //   const date = new Date(value);
  //   return date.toLocaleDateString(undefined, {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });
  // }

  // function formatDateFixed(value) {
  //   const date = new Date(value);
  //   date.setMinutes(date.getMinutes() + date.getTimezoneOffset()); // fix UTC shift
  //   return date.toLocaleDateString(undefined, {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });
  // }

  function formatDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day); // month is 0-based
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dateInputFrom = document.getElementById("dateInputFrom");
  const dateInputTo = document.getElementById("dateInputTo");

  const confirmButton = document.getElementById("confirmButton"); // Add an id to the button

  confirmButton.addEventListener("click", () => {
    const fromDate = new Date(dateInputFrom.value);
    const toDate = new Date(dateInputTo.value);

    if (!dateInputFrom.value || !dateInputTo.value) {
      alert("Please select both dates.");
    } else if (fromDate > toDate) {
      alert("⚠️ 'From' date must be before the 'To' date. Please re-enter.");
    } else {
      alert("✅ Date range applied successfully!");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.href;
  const navStack = JSON.parse(localStorage.getItem("navStack")) || [];

  // Prevent duplicate consecutive entries
  if (navStack[navStack.length - 1] !== currentPage) {
    navStack.push(currentPage);
    localStorage.setItem("navStack", JSON.stringify(navStack));
  }
});

document.getElementById("backButton").addEventListener("click", () => {
  let navStack = JSON.parse(localStorage.getItem("navStack")) || [];

  if (navStack.length > 1) {
    // Pop current page
    navStack.pop();
    const previousPage = navStack.pop(); // get the one before
    localStorage.setItem("navStack", JSON.stringify(navStack));
    window.location.href = previousPage;
  }
});