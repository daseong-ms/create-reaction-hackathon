// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from "react";
import "./App.css";
import * as microsoftTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import { MainPage } from "./MainPage";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {
  // Check for the Microsoft Teams SDK object.
  if (microsoftTeams) {
    return (
      <Router>
        <MainPage />
      </Router>
    );
  } else {
    return <h3>Microsoft Teams SDK not found.</h3>;
  }
}

function Parent() {
  const query = new URLSearchParams(useLocation().search);
  console.log(query.toString());
  return (
    <Child
      messageId={query.get("messageId")}
      userId={query.get("userId")}
      convId={query.get("convId")}
    />
  );
}

function Child({ messageId, userId, convId }) {
  return (
    <div>
      <h1>messageId: {messageId} </h1>
      <h1>userId: {userId} </h1>
      <h1>convId: {convId} </h1>
      <MainPage messageId={messageId} userId={userId} convId={convId} />
    </div>
  );
}

export default App;
