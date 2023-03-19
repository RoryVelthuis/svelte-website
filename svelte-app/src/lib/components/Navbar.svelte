
<script>
import { fly } from 'svelte/transition'
import Hamburger from '../../images/hamburger.png'
import NavDesktop from './NavDesktop.svelte';
import NavMobile from './NavMobile.svelte';

let links = [ {title: "About", ref: "/about"}, {title: "Gallery", ref: "/gallery"} ]

    let menuActive = false;
    let collapsed
    let width;
    $: {
        if(width <= 600){
            collapsed = true;
        } else {
            menuActive = false;
            collapsed = false
        }
    }

    const toggleMenu = () => {
        menuActive = !menuActive
    }
</script>

<svelte:window bind:innerWidth={width} />


<section class="nav-header">
    <a href="/"><h1 class="title">Svelte App</h1></a>
    {#if width != null}
        {#if collapsed}
        <div class="hamburger-icon-container" on:click={toggleMenu} on:keydown={toggleMenu}>
            <img class="hamburger-icon" src={Hamburger} alt="">
        </div>
        {:else}
        <NavDesktop links={links} />
        {/if}
    {/if}

</section>
{#if menuActive}
<NavMobile links={links} />
{/if}

<style>
    .title{
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .nav-header{
        background-color: lightblue;
        box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.75);
        display: flex;
        justify-content: space-between;
        height: 80px;
        padding: 0px 40px;
        position: relative;
        z-index: 10;
    }

    .hamburger-icon-container{
        height: 80px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hamburger-icon-container:hover{
        background-color: rgb(140, 195, 213);
    }
    .hamburger-icon{
        width: 50px;
        height: 50px;
    }
</style>