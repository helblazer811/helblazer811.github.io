<script>
import { writable } from 'svelte/store';
import Transformer from './Transformer.svelte';
const active = writable(true);
</script>
<svelte:head><title>Attention Residuals — Alec Helbling</title><meta name="theme-color" content="#151a23" /></svelte:head>
<main><Transformer isActive={active} darkMode={true}/></main>
<style>
:global(*){box-sizing:border-box} :global(body){margin:0;background:#10141c;color:#d6dde8;font-family:Arial,Helvetica,sans-serif}main{width:100vw;max-width:1920px;margin-left:calc(50% - min(50vw,960px));padding:20px} @media(max-width:700px){main{padding:0}}
</style>
