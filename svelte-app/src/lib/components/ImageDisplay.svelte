<script>
    import { blur } from 'svelte/transition';
    import LoadingCircle from './LoadingCircle.svelte';
    import ArrowRight from '../../images/icons/arrow-left.svg'
    import ArrowLeft from '../../images/icons/arrow-right.svg'
    export let img;
    export let next;
    export let previous;

    let t = 0
    let interval = 3;
    $: {
        setTimeout(() => {
            t = (t + 1) % interval;
        }, 1000)
        if(t == interval - 1){
            next()
        }
    }
</script>

<div class="container">
    {#if img != null}
        <div class="arrow-overlay">
            <div class="side-band" on:click={previous} on:keydown={previous}><img class="arrow" src={ArrowRight} alt=""></div>
            <div class="side-band" on:click={next} on:keydown={next}><img class="arrow" src={ArrowLeft} alt=""></div>
        </div>
        <img in:blur class="display-image" src={img} alt ="">
    {:else}
    <div class="load-container">
        <div class="inner-container">
            <!-- <LoadingCircle /> -->
        </div>
    </div>
    {/if}
</div>

<style>
    .container{
        aspect-ratio: 16 / 9;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin: 0px;
        object-fit:cover;
        object-position: center;
    }

    .arrow-overlay{
        position: absolute;
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0
    }

    .arrow{
        filter: invert(0.8)
    }

    .side-band{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 5%;
    }
    .side-band:hover{
        cursor: pointer;
        opacity: 90%;
    }
    .side-band:nth-child(1){
        background-image: linear-gradient(to right, black 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.7) 100%);
    }
    .side-band:nth-child(2){
        background-image: linear-gradient(to left,  black 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.7) 100%);
    }

    .display-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }


</style>