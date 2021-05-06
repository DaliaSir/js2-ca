export function displayMessage(messagetype, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="message ${messagetype}">${message}</div>`;
}
