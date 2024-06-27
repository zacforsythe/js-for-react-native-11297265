# DCIT202 Mobile Application Development - Assignment 1

## Student Information
- **Student ID:** [11297265]

## Overview
This repository contains the JavaScript code for Assignment 1 of the DCIT202 Mobile Application Development course. The assignment consists of four tasks, each designed to enhance your understanding and skills in JavaScript programming.

## Tasks

### Task 1: Array Manipulation
- **File:** `arrayManipulation.js`
- **Function:** `processArray`
- **Description:** This function takes an array of numbers as an argument and returns a new array where each even number is squared and each odd number is tripled.

### Task 2: Format Array Strings
- **File:** `arrayManipulation.js`
- **Function:** `formatArrayStrings`
- **Description:** This function takes two arrays as arguments (an array of strings and an array of numbers processed by `processArray`). It modifies each string based on its corresponding number: capitalizes the entire string if the number is even and converts the string to lowercase if the number is odd.

### Task 3: Create User Profiles
- **File:** `userInfo.js`
- **Function:** `createUserProfiles`
- **Description:** This function takes an array of names and the array of modified names from Task 2. It returns an array of objects, each containing `originalName`, `modifiedName`, and an `id` (auto-incremented starting from 1).

### Task 4: README File
- **File:** `README.md`
- **Description:** This file includes the student ID and a brief explanation of each task.

## Instructions
1. **GitHub Repository Setup:**
   - Create a GitHub account using your student email (...@st.ug.edu.gh). If you already have an account, you can add your student email to your account.
   - Create a repository named `js-for-react-native-[Your Student ID]` (e.g., `js-for-react-native-1129884`).
   - Clone it to your local machine.

2. **Commit Process:**
   - Commit each task separately to the repository with clear commit messages. For example:
     - `git commit -m "Add processArray function for Task 1"`
     - `git commit -m "Add formatArrayStrings function for Task 2"`
     - `git commit -m "Add createUserProfiles function for Task 3"`
     - `git commit -m "Add README file for Task 4"`

3. **Submission:**
   - Submit a compressed folder of your repository as per the submission instructions provided.

## Example Usage
Here are some example usages for the functions implemented in the tasks:

### Task 1: processArray
```javascript
const { processArray } = require('./arrayManipulation');
console.log(processArray([1, 2, 3, 4])); // Output: [3, 4, 9, 16]
