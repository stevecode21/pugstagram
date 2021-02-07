<script>
  import Profile from "./Profile.svelte";
  import Stories from "./Stories.svelte";
  import Footer from "./Footer.svelte";

  // Get the props frm parent componente (in this case App.svelte that get the dara from an API)
  export let nickname, name;
</script>

<div class="Sidebar">
  <div class="Sidebar-container">
    <Profile {nickname} {name} />
    <Stories />
    <Footer />
  </div>
</div>

<style>
  .Sidebar {
    position: relative;
    padding: 4.5em 0 0 0;
  }
  .Sidebar-container {
    position: fixed;
  }
</style>
