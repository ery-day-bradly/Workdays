// Do global issues abound?
// Strategies continue.
// import day from '../../../monday/day';

// /**
//  *
//  * Help list: apps, users, pears,
//  * Mondays' list: TODO's
//  */

// global(day);

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Call the runRoutine function to run the routine
runRoutine();

// Set the initial date value for Brad to May 5th, 2021, based on the DateColumn and Interviewee1Column values
let bradStartDate = new Date(DateColumn + " 2021");
let brad = new Date(bradStartDate.getTime() + Interviewee1Column * 60 * 1000);

// It is optional to automate this routine.
// Increase Brad's speed by 33%
let bradSpeed33 = brad.getTime() + 0.33 * 72 * 60 * 60 * 1000;
brad = new Date(bradSpeed33);

// Increase Brad's speed by 3.33%
let bradSpeed3 = brad.getTime() + 0.1 * 48 * 60 * 60 * 1000 + 168 * 60 * 1000;
brad = new Date(bradSpeed3);

// Increase Brad's speed by 6.67%
let bradSpeed6 = brad.getTime() + 1 * 90 * 60 * 60 * 1000;
brad = new Date(bradSpeed6);

// Calculate the total hours added to Brad's initial date value
let sumHours = (brad.getTime() - bradStartDate.getTime()) / (60 * 60 * 1000);

// Define a function to run the routine and print out the goals and tasks
function runRoutine() {
  // QA Testing bucket list
  console.log("Current Time:", new Date().toLocaleTimeString());
  console.log("Goals:");
  // this is the goal, to get the bucket list done each day
  console.log("10:00(RNIQ)"); // this context is related to React Native Interview Questions.
  //console.log("11:00(GAME)"); // this context is related th GAME dev for Driver Game concerned in same values in tracked values.
  //console.log("12:00(Lunch-Time)"); // This is a time span of use for the driver to sync up or sim recharging stations time use.

  //console.log("WIP: @1:00(RNIQ)"); // WIP continues is expected and accepted.

  //console.log("TODO: Check in @❏2:00"); // optional QA Testing chat dev.

  //console.log("❏ 3:00"); // ditto optional

  //console.log("TODO: follow ups @❏ 4:00"); // optinal Chat feature dev for QA Testing: optional

  //console.log("❏ 5:00"); // ditto optional

  //console.log("EOD Report===END"); // optional dev flow
}

function Mon() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>Monday Component</div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button onClick={handleClick}>
        You pressed me {count} times
        <Link to="/tues">Tomorrow</Link>
      </button>
    </div>
  );
}

export default Mon(sumHours);
