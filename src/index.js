import App from './containers/App.svelte';

// Create the app to configure my entry point
const app = new App({
    // Where am I send my app?
    target: document.querySelector('main')
})

export default app;