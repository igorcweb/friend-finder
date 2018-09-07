const myModal = document.getElementById('mySimpleModal');

const myCloseBtn = document.getElementsByClassName('myCloseBtn')[0];
if (myCloseBtn) {
  function closeModal() {
    myModal.style.display = 'none';
    window.location.href = '/survey';
  }
  myCloseBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', clickOutside);

function clickOutside(e) {
  if (e.target === myModal) {
    myModal.style.display = 'none';
    window.location.href = '/survey';
  }
}
