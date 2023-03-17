<script>
    import style from "./app.css"
    import Navbar from '../components/Navbar.svelte'
    import ImageGrid from '../components/ImageGrid.svelte'
</script>

<section class="grid-container">
    <ImageGrid />
</section>

<style>
    .grid-container{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>
