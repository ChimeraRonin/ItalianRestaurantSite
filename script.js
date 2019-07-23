// Moved constants to top to make function easier to read and run

const form = document.querySelector('.form');
const reservationBtn = document.getElementById('jf-button-reservation');
const reservationModal = document.getElementById("reservations");
const blurModal = document.getElementById("blur-modal");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("See you then!");
  console.log(event);
  closeModal()
});

// Begin Modal Window for Reservations 
reservationBtn.addEventListener('click', openModal)


// Function to blur background when modal is open

function openModal() {
  reservationModal.classList.add("jf-modal-container-show");
  blurModal.classList.add("blur-show");
}

function closeModal() {
  reservationModal.classList.remove("jf-modal-container-show");
  blurModal.classList.remove("blur-show");
}

// End Modal Window for Reservations 

