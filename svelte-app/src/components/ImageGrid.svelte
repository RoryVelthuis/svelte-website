<script>
    import Yellow from "../images/ColorSquares/Yellow.png"
    import Red from "../images/ColorSquares/Red.png"
    import Purple from "../images/ColorSquares/Purple.png"
    import Pink from "../images/ColorSquares/Pink.png"
    import Orange from "../images/ColorSquares/Orange.png"
    import Lime from "../images/ColorSquares/Lime.png"
    import Green from "../images/ColorSquares/Green.png"
    import Cyan from "../images/ColorSquares/Cyan.png"
    import Blue from "../images/ColorSquares/Blue.png"
</script>

<div class="image-grid">
    <div class="grid-item"><img src={Yellow} alt="Yellow"></div>
    <div class="grid-item"><img src={Red} alt="Red"></div>
    <div class="grid-item"><img src={Purple} alt="Purple"></div>
    <div class="grid-item"><img src={Pink} alt="Pink"></div>
    <div class="grid-item"><img src={Orange} alt="Orange"></div>
    <div class="grid-item"><img src={Lime} alt="Lime"></div>
    <div class="grid-item"><img src={Green} alt="Green"></div>
    <div class="grid-item"><img src={Cyan} alt="Cyan"></div>
    <div class="grid-item"><img src={Blue} alt="Blue"></div>

</div>

<style>
    .image-grid{
        width: fit-content;
        display:grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }

    .grid-item{
        height: 100px;
        width: 100px;
        border: 2px solid black;
        gap: 0;
    }

    img{
        width: inherit;
    }
</style>