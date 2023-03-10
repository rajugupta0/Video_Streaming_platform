let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});


// comment
const form = document.querySelector('#comment-form');
const commentList = document.querySelector('#comment-list');

      form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.elements.name.value;
        const comment = form.elements.comment.value;

        const newComment = document.createElement('li');
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
        commentList.appendChild(newComment);

        form.reset();
      });
      // end 