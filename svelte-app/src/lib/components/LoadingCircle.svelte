<script>

</script>

<div class="load-container">
    <div class="inner-container">
        <div class="loading-circle">
            <div class="circle"></div>
        </div>
    </div>
</div>




<style>
    .load-container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
    
    .inner-container{
        height: 300px;
        width: 300px;
    }

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