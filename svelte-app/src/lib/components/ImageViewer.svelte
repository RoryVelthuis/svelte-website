<script>
    import ImageDisplay from "./ImageDisplay.svelte";
    import ImageGrid from "./ImageGrid.svelte";
    import { createRequests } from "../js/LoremPicsum";
    import LoadingCircle from "./LoadingCircle.svelte";

    const height = 1080;
    const width = 1920;

    let urls = []
    let requests = createRequests(height, width, 9)
    let data = Promise.all(requests)
    data.then((res) => {
        res.forEach(data => {
            urls = [...urls, data.url]
        })
    });

    function mod(n, m) {
        return ((n % m) + m) % m;
    }

    let index = 0;

    const next = () => { index = mod(index + 1, 9) }
    const previous = () => { index = mod(index - 1, 9) }
    const setIndex = (value) => { index = value; }

</script>

<div class="image-viewer">
    <div class="responsive-rect">
        {#if urls.length != 0}
        <ImageDisplay img={urls[index]} next={next} previous={previous}/>
        <div class="square">
            <ImageGrid urls={urls} index={index} onClick={setIndex} />
        </div>
        {:else}
            <LoadingCircle />
        {/if}
    </div>
</div>


<style>
    .image-viewer{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 40px 0px;
        background-color: rgb(30, 30, 30);
    }
    .responsive-rect{
        aspect-ratio: 16 / 6;
        display: flex;
        align-content: center;
        justify-content: center;
        width: 85%;
        height: 100%;
    }
    .square{
        aspect-ratio: 1 / 1;
        height: 100%;
        max-width: 100%;
    }

</style>