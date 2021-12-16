const messageModal = document.getElementById("message-modal"),
      closeMessage = document.getElementById("close-modal-message"),
      message = document.getElementById("message-body"),
      messageButton = document.getElementById("message-button"),
     inputs = document.getElementsByClassName("inputForm")
     coments = document.getElementById("coments");
      

function initializeMassageModal() {
    messageButton.addEventListener("click", closeMessageModal);
    closeMessage.addEventListener("click", closeMessageModal);
}

function showMessageModal(messageText) {
    message.innerText = messageText;
    messageModal.style.display = "block";
}

function closeMessageModal() {
    message.innerText = "";
    messageModal.style.display = "none";
}


function cleanModal() {

    Array.prototype.slice.call(inputs).forEach(function (el) {
        el.value = '';
    });

    coments.value = '';
}