const clicker =document.getElementById("clickMe")

clicker.addEventListener('click', runMe)

function runMe(){
    console.log('you dummy')
    const search = document.querySelector('input').value


    fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
        .then(res=>res.json())
        .then(updateDom)    
        .catch(err=>
            console.warn(err))
    
}

function updateDom(data){
    console.log(data)
    document.querySelector('h1').innerText = data.data[0].title
    document.querySelector('img').src = data.data[0].images.jpg.large_image_url
    document.querySelector('p').innerText = data.data[0].synopsis
}

//let test = 'https://api.jikan.moe/v4/anime/{id}'