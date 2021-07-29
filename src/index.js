console.log('You Got This Bud')

const title = document.getElementById('fg-title')
const image = document.getElementById('fg-image')
const likes = document.getElementById('fg-likes')
const comments = document.getElementById('fg-comments')
const form = document.getElementById('fg-comment-form')



fetch('http://localhost:3000/images/1')
.then(res => res.json())
.then(handleData)

function handleData(data){
    title.innerText = data.title
    image.src = data.image
    likes.innerText = `${data.likes} likes`
    comments.innerHTML = `
    <li>${data.comments[0].content}<li>
    <li>${data.comments[1].content}<li>
    <li>${data.comments[2].content}<li>
    `

    const likeButton = document.getElementById('fg-like-button')
    likeButton.addEventListener('click', increaseLikes)

    function increaseLikes(){
        likes.innerText = `${data.likes++} likes`
    }

    form.addEventListener('submit', e => {
        e.preventDefault()
        const commentText = e.target.comment.value
        const newComment = document.createElement('li')
        newComment.innerText = commentText
        comments.append(newComment)
        e.target.reset()
    })
}