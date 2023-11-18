document.addEventListener('DOMContentLoaded', function () {
    var productIdToDelete;
    var deleteForm = document.forms['delete-product-form'];
    var btnDeleteProduct = document.getElementById('btn-delete-product');
    var deleteProductModal = document.getElementById('delete-product-modal');
  
    // Khi xác nhận trong hộp thoại được bật
    deleteProductModal.addEventListener('show.bs.modal', function (event) {
      var button = event.relatedTarget;
      productIdToDelete = button.getAttribute('data-id');
    });
  
    btnDeleteProduct.onclick = function () {
      // Logic xử lý khi nút xóa được nhấn
      deleteForm.action = `/products/${productIdToDelete}?_method=DELETE`;
      deleteForm.submit();
    };
  });