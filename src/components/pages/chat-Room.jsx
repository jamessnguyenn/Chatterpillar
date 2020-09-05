import React from 'react'
import './chat.css'
function ChatLogIn(){
    return(
  // <head>
  //   <meta charset="UTF-8" />
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //   <link
  //     rel="stylesheet"
  //     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
  //     integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
  //     crossorigin="anonymous"
  //   />
  //   <link rel="stylesheet" href="css/style.css" />
  //   <title>LetsChat App</title>
  // </head>
  <body>
    <div class="chat-container">
      <header class="chat-header">
        <h1><i class="fas fa-smile"></i> LetsChat</h1>
        <a href="index.html" class="btn">Leave Room</a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name"></h2>
          <h3><i class="fas fa-users"></i> Online Users</h3>
          <ul id="users"></ul>
        </div>
        <div class="chat-messages"></div>
      </main>
      <div class="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          />
          <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js"
      integrity="sha256-TDxXjkAUay70ae/QJBEpGKkpVslXaHHayklIVglFRT4="
      crossorigin="anonymous"
    ></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="js/main.js"></script>
  </body>
      );
  }


  export default ChatLogIn;
