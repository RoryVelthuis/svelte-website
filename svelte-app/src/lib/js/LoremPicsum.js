
 export function createRequests(width, height, n){
    const url = `https://picsum.photos/${height}/${width}`
    let requests = []
    for(let i = 0; i < n; i++){
        const imgReq = fetch(`${url}?random=${i+1}`)
        requests = [...requests, imgReq]
    }
    console.log(requests)
    return requests
}

