# HURUF · Arabic Class

A mobile first Arabic vocabulary app for French and Chinese learners. It is based on the 75 reference photographs supplied for this project. The original book photographs are not redistributed.

## Features

- 752 manually organized study entries across 17 themes, including answers to French-only vocabulary prompts
- French / Chinese interface, meanings, and grammar notes
- Flip cards, audio recognition, finger tracing, and Arabic writing recall with an on-screen keyboard
- Arabic text to speech through the browser's `speechSynthesis` API
- Local spaced review progress and installable offline PWA
- Printed page references and page filters for checking and studying the original photographs
- Access code entry for opening the study interface on a phone without an account login

Open `dist/index.html` in a web server. No build step or API key is required.

Audio quality depends on an Arabic voice being available on the device. The handwriting animation is a visual tracing aid, not formal stroke order. Progress is stored in the browser's `localStorage`.

The static site's access-code screen is a convenience gate. Because the JavaScript and vocabulary files are publicly served, it is not a security boundary for private material.

## Free learning references

- [Al Jazeera Learning Arabic — introductory lessons](https://learning.aljazeera.net/en/lessons/level/introductory)
- [Madinah Arabic — free grammar course](https://madinaharabic.com/free-content/grammar)
- [Madinah Arabic — free content](https://madinaharabic.com/free-content)

This project contains original learning annotations and interface code; it is not affiliated with those educational sites.

