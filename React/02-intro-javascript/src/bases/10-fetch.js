const apiKey = 'YFkVJQgTL9F2DJjgZAG5SFdZ3uZj0cDI';

const api = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

api.then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url)
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)