<script>
    import style from "./app.css"
    //import Navbar from '../lib/components/Navbar.svelte'
    import ImageGrid from '../lib/components/ImageGrid.svelte'
    import ImageDisplay from "../lib/components/ImageDisplay.svelte";
    import Grid from "../lib/components/Grid.svelte"
    import ImageViewer from "../lib/components/ImageViewer.svelte";
    import ResponsiveRectangle from "../lib/components/ResponsiveRectangle.svelte";
    import Articles from "../lib/components/Articles.svelte";
</script>

<section>
    <ImageViewer />
    <Articles />
</section>
<section>
    <!-- <ResponsiveRectangle /> -->
</section>
<section class="grid-container">
</section>

<style>
    .grid-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>

