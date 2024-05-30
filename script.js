function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (message) {
        addMessage('user', message);
        input.value = '';
        // Simulate AI response
        setTimeout(() => {
            addMessage('ai', 'Model is not deployed with website yet');
        }, 1000);
    }
}

function addMessage(sender, message) {
    const chatWindow = document.getElementById('chatWindow');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv); // Add message at the bottom
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page
}
