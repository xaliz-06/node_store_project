const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  const productElement = btn.closest("article");

  //   let xhr = new XMLHttpRequest();

  //   xhr.open("DELETE", "http://localhost:3000/admin/product/" + prodId, true);

  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState == 4 && xhr.status == 200) {
  //       productElement.parentNode.removeChild(productElement);
  //     }
  //   };
  //   xhr.send();

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      productElement.parentNode.removeChild(productElement);
    })
    .then((err) => {
      comsole.log(err);
    });
};
