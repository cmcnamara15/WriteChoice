const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
  // Stash the event so it can be triggered later.
    deferredPrompt = event;
  // Update UI notify the user they can add to home screen
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Log the result
    console.log(`User response to the install prompt: ${outcome}`);
    // Hide the button
    butInstall.style.display = 'none';
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
