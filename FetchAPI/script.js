document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let tableData = "";
      data.forEach((item) => {
        tableData += `<tr>
          <td>${item.postId}</td>
          <td>${item.id}</td>
          <td>${item.name}</td>
        </tr>`;
      });
      document.getElementById("table-body").innerHTML = tableData;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
