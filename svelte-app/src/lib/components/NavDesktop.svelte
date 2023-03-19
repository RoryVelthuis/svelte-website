<script>
    import { fade } from 'svelte/transition'
    export let links
</script>

<nav in:fade >
    <ul class="nav-list">
        {#each links as link}
            <li><a class="nav-link" href={link.ref}>{link.title}</a></li>
        {/each}
    </ul>
</nav>

<style>
     /* Desktop */
    nav{
        height: 100%;  
    }

    .nav-list{
        list-style: none;
        display: flex;
        height: 100%;
        padding: 0px 20px;
    }

    .nav-list li{
        text-emphasis: none;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px;
    }

    .nav-link{
        color: white;
        font-size: 1.35rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 30px;
    }

    .nav-link:hover{
        background-color: rgb(15, 15, 15)    }

</style>