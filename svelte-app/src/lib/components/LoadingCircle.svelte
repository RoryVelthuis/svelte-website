<script>

</script>


<div class="loading-circle">
    <div class="circle"></div>
</div>


<style>
    .loading-circle{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

    }

    .circle{
        height: 60%;
        width: 60%;
        border: 5px solid;
        border-color: lightblue transparent lightblue lightblue;
        border-image: initial;
        border-radius: 50%;
        animation-name: rotate;
        animation-duration: 0.8s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes rotate {
		0% {
			transform: rotate(0);
		}
		50% {
			transform: rotate(360deg);
		}
        100% {
			transform: rotate(720deg);
		}
	}
</style>