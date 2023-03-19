<script>
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-45.87&longitude=170.50&hourly=temperature_2m'

    const weatherData = (async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    })()

</script>


<div>
    {#await weatherData}
	    <p>...waiting</p>
    {:then data}
        <div>Data</div>
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</div>