<script>
    export let mobile;
    let links = [ {title: "About", ref: "/about"}, {title: "Gallery", ref: "/gallery"} ]
    $: {
        console.log(mobile)
    }
</script>

<nav class="{mobile ? "mobile-nav" : "" }">
    <ul class="{mobile ? "nav-list-mobile" : "nav-list"}">
        {#each links as link}
            <li class="nav-li"><a class="nav-link" href={link.ref}>{link.title}</a></li>
        {/each}
    </ul>
</nav>

<style>
    /* Mobile */
    .mobile-nav{
    background-color: rgb(158, 204, 220);
    width: 100%;
    }

    .nav-list-mobile{
        width: 100%;
    }

    .nav-list-mobile .nav-li{
        width: 100%;    
    }

    .nav-list-mobile .nav-li:not(:last-child){
        border-bottom: 1px solid whitesmoke; 
        border-image: linear-gradient(90deg, rgba(158,204,220,1) 0%, rgba(255,255,255,1) 50%, rgba(158,204,220,1) 100%);
        border-image-slice: 1;

    }

    .nav-list-mobile .nav-li .nav-link{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px 0px;
        font-size: 1.75rem;
    }

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

    .nav-li{
        text-emphasis: none;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px;
    }


    .nav-link{
        font-size: 1.35rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 30px;
    }
    .nav-link:hover{
        background-color: rgb(140, 195, 213);
    }


</style>