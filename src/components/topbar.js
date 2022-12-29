export default function TopBar(){
  /*html*/
  const render = () => `
  <div class="header | h-header p-2 bg-primary text-white flex items-center sticky-top">
    <div class="brand">
      <h1 class="logo | text-xlarge">v-wallet</h1>
    </div>
  </div>
  `
  return {render}
}