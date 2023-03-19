<script>
    import { flip } from 'svelte/animate';
    import { blur } from 'svelte/transition';
    import LoadingCircle from './LoadingCircle.svelte';

    // Props
    export let urls;
    export let index;
    export let onClick;

    // Variables
    let hover;
    let hoverIndex;
    let x;
    let y;

    // Options object for flip transition
    const options = {
        duration: 350
    }

    // Function to set the hover index
    const setHoverIndex = (value) => hoverIndex = value;
    
    // Function to calculate position from grid index
    function setPosition(index){
        x = Math.floor(index % 3) + 1;
        y = Math.floor(index / 3) + 1;
    }


    $: {
        if(index != null){
            if(hover){                      // If the user is hovering over the image grid
                options.duration = 150      // Increase speed of transition
                setPosition(hoverIndex)     // Set the position
            }
            else{
                options.duration = 350      // Default transition speed
                setPosition(index)          // Set the position
            }
        }
    }

</script>

<div class="grid-container">
    <div class="click-overlay"                      
        on:mouseenter={() => hover = true}
        on:focus={() => hover = true}
        on:mouseleave={() => hover = false}
        on:blur={() => hover = false}>
        {#if urls.length != 0}
            {#each Array(9) as _, i}
                <div class="clickable"
                on:click={() => onClick(i)}
                on:keydown={() => onClick(i)}
                on:mouseover={() => setHoverIndex(i) }
                on:focus={() => setHoverIndex(i) }></div>
            {/each}
        {/if}
    </div>
    <div class="selector-overlay">
        {#if urls.length != 0}
            {#each Array(1) as _, i (i)}
            <div animate:flip={options} style:grid-column={x} style:grid-row={y} class="selector">
                <svg>
                    <rect with=100% height=100%/>
                </svg>
            </div> 
            {/each}
        {/if}
    </div>
    <div class="image-grid">
        {#if urls.length != 0}
            {#each urls as url, i}
                <div in:blur class="grid-item"><img src={url} alt="Lorem Picsum random"></div>  
            {/each}
        {:else}
            {#each Array(9) as _, i}
            <div class="grid-item">
                <!-- <LoadingCircle /> -->
            </div>  
            {/each}
        {/if}
    </div>
</div>


<style>

    .grid-container{
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
    }

    .click-overlay{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    .clickable{
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

    .selector-overlay{
        position: absolute;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .selector{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        gap: 0;
        z-index: 2;
        background-image: 
            linear-gradient(to right, rgba(0, 0, 0, 0.5) 5%, transparent 10%, transparent 100%),
            linear-gradient(to left, rgba(0, 0, 0, 0.5) 5%, transparent 10%, transparent 100%),
            linear-gradient(to top, rgba(0, 0, 0, 0.5) 5%, transparent 10%, transparent 100%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 5%, transparent 10%, transparent 100%);

    }

    .selector svg{
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .selector svg rect {
        aspect-ratio: 1/1;
        position: absolute;
        stroke: rgb(15, 15, 15);
        stroke-width: 4%;
        fill: none;
        width: 100%;

    }

    .image-grid{
        position: absolute;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: 100%;
        height: 100%;
    }

    .grid-item{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        gap: 0;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>