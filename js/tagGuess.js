const tagOptions = document.getElementById('tag-options');
const photos = document.getElementById('random-photos');
const tags = ['Dog','Pasta','Horse','Snow','Chocolate','Rice','Cake','Rain','Ocean','Orange','Plane','Bear','Brown','White'];
randomTag = tags[Math.floor(Math.random()*tags.length)];
tags.splice(tags.indexOf(randomTag),1)
randomTag2 = tags[Math.floor(Math.random()*tags.length)];
tags.splice(tags.indexOf(randomTag2),1)
randomTag3 = tags[Math.floor(Math.random()*tags.length)];
tags.splice(tags.indexOf(randomTag3),1)
randomTag4 = tags[Math.floor(Math.random()*tags.length)];
const options = [randomTag,randomTag2,randomTag3,randomTag4]

options.sort().forEach(option => {
    liOption = document.createElement('li')
    liOption.innerHTML = option
    tagOptions.appendChild(liOption)
    liOption.onclick = function (event) {
        console.log(event.target)
        if (event.target.innerText==randomTag) {
            window.alert('Correct Answer!')
            location.reload()
        }
        else {
            window.alert('Sorry, the answer is ' + randomTag + '! Please try again!')
            location.reload()
        }
    }
});

fetch('https://api.tumblr.com/v2/tagged?tag='+ randomTag +'&api_key=Wrd7Ly6crcXnpb0ETZXELqdpsEH76J0cHXyPPNJqDODaZUFyh5')
.then(function(response){
    return response.json()
})
.then(function(result){
    posts = result.response
    posts.forEach(post => {
        if (post.photos) {
            const fetchedPhotos = post.photos[0].alt_sizes[3].url
            const img = document.createElement('img')
            img.src = fetchedPhotos;
            const li = document.createElement('li')
            li.appendChild(img)
            photos.appendChild(li)
        }
    });
})
.catch(function(err){
    console.log(err)
})
