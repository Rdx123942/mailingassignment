document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Add your logic to handle the form submission here
    // You can access email and message values using:
    // document.getElementById("email").value
    // document.getElementById("message").value
  });

  function closeChat() {
    document.querySelector(".chat-box").style.display = "none";
  }

  // Simulate automated message after a delay
  setTimeout(function () {
    appendAgentMessage("Hi! This is an automated message. How can I help you?");
  }, 1000);

  function appendAgentMessage(message) {
    var chatBody = document.querySelector(".chat-body");
    var agentMessageDiv = document.createElement("div");
    agentMessageDiv.className = "message agent-message";
    agentMessageDiv.textContent = message;
    chatBody.appendChild(agentMessageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
  }