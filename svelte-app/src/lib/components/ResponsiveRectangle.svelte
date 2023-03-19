<script>
    import ImageDisplay from "./ImageDisplay.svelte";
</script>

<div class="container">
    <div class="responsive-rect">
        <div class="area"></div>
        <div class="square"></div>
    </div>
</div>


<style>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 50px 0px
    }
    .responsive-rect{
        aspect-ratio: 16 / 6;
        display: flex;
        align-content: center;
        justify-content: center;
        width: 80%;
        height: 100%;
        border: 1px dashed red;
    }
    .square{
        aspect-ratio: 1 / 1;
        height: 100%;
        max-width: 100%;
        border: 1px solid black;
    }
    .area{
        border: 1px solid yellow;
        width: 100%;
        height: 100%;
    }
</style>