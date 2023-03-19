<script>
    import { slide } from 'svelte/transition'
    export let links
</script>

<nav transition:slide >
    <ul class="nav-list">
        {#each links as link}
            <li><a class="nav-link" href={link.ref}>{link.title}</a></li>
        {/each}
    </ul>
</nav>

<style>
     /* Mobile */
    nav{
    background-color: rgb(158, 204, 220);
    width: 100%;
    }

    .nav-list{
        width: 100%;
    }

    .nav-list li{
        width: 100%;
    }

    .nav-list li:not(:last-child){
        border-bottom: 1px solid whitesmoke; 
        border-image: linear-gradient(90deg, rgba(158,204,220,1) 0%, rgba(255,255,255,1) 50%, rgba(158,204,220,1) 100%);
        border-image-slice: 1;
    }

    .nav-link{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px 0px;
        font-size: 1.75rem;
    }
</style>