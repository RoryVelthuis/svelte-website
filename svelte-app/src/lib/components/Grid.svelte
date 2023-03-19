<script>

</script>

<div class="square-container">
    <div class="square">
        <div class="grid">
            {#each Array(16) as _, i}
                <div class="grid-item"></div>
            {/each}
        </div>
    </div>
</div>


<style>
    .square-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 500px;
        border: 1px dashed blue;
    }

    .square{
        aspect-ratio: 1 / 1;
        height: 100%;
        max-width: 100%;
        border: 1px solid black;
    }

    .grid{
        display: grid;
        grid-template-rows: auto auto auto auto;
        grid-template-columns: auto auto auto auto;
        width: 100%;
        height: 100%;
    }

    .grid-item{
        width: 100%;
        height: 100%;
        border: 1px solid black;
    }
</style>