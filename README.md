# Tailwind CSS Hover Effect Bug

This repository demonstrates an uncommon bug in Tailwind CSS where hover effects do not work correctly on elements that are added to the DOM dynamically after the initial render.  The issue is specifically observed when using React's `useState` hook to update the UI.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the button's hover effect does not work as expected.

## Solution

The solution involves using the `forceUpdate` method of the component to refresh the styles, which forces Tailwind to re-apply the styles to the dynamically added elements.