# Web_Worker_Practice

## Brief Description

This project focuses on evaluating the impact of employing Web Workers on website performance, particularly in scenarios involving computationally intensive tasks such as sorting large arrays.

## Instructions for Running Locally

### Steps

1. **Clone the project repository:**
   ```bash
   git clone https://github.com/Laiba51-CS/Web_Worker_Practice

2.  Install dependencies:npm install
3.  Start the local development server:npm start
## Summary of Findings
### Reduced Processing Time:
Web Workers significantly reduced the time required for sorting large arrays compared to single-threaded execution.
### Enhanced Responsiveness: 
Parallel processing with Web Workers prevented the main thread from being blocked during heavy computations, resulting in a more responsive user interface.
## Challenges Faced and Solutions
Challenge:   Inter-thread communication overhead impacted performance gains.
Solution:   Employed optimized data transfer
## References
- [MDN Web Docs - Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [Web Workers Basics](https://web.dev/articles/workers-basics)
- [Web Workers in JavaScript and When to Use Them](https://benestudio.co/web-workers-in-javascript-and-when-to-use-them/)



