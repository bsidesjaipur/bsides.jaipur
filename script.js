document.getElementById("myVideo").loop = true;

// function sendNotificationOnLoad() {
  
//   Swal.fire({
//     title: '<strong>Use Coupons</strong>',
//     icon: 'info',
//     html:
//       'You can use these coupon code to get <b>discount</b>, </br> Student & Individual : <b>NULLCON</b></br>Professional & Contributor : <b>BSIDESJAIPUR</b>',
//     showCloseButton: true,
//     showCancelButton: true,
//     focusConfirm: false,
//     confirmButtonText:
//       '<i class="fa fa-thumbs-up"></i> Great!',
//     confirmButtonAriaLabel: 'Thumbs up, great!',
//     cancelButtonText:
//       '<i class="fa fa-thumbs-down"></i>',
//     cancelButtonAriaLabel: 'Thumbs down'
//   })
// };

  
  window.addEventListener('load', sendNotificationOnLoad);
  

Swal.fire({
    title: '<strong>Use Coupons</strong>',
    icon: 'info',
    html:
      'You can use these coupon codes to get a <b>discount</b>:<br>' +
      'Student & Individual: <b>NULLCON</b><br>' +
      'Professional & Contributor: <b>BSIDESJAIPUR</b>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
    customClass: {
      container: 'custom-swal-container',
      title: 'custom-swal-title',
      content: 'custom-swal-content',
      closeButton: 'custom-swal-close-button',
      confirmButton: 'custom-swal-confirm-button',
      cancelButton: 'custom-swal-cancel-button'
    }
  });
  