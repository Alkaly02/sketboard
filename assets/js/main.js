const videos = document.querySelectorAll('video')
const avatar = document.querySelector('.most_watched_avatar')
const avatarIcon = document.querySelector('.most_watched_avatar i')
const avatarSpan = document.querySelector('.most_watched_avatar span')

console.log(videos);
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    const videoParent = video.parentElement.parentElement
    console.log(avatar.style.width)
    videoParent.style.height = '165px'
    avatarSpan.style.bottom = '2px'
    avatar.style.width = '40px'
    avatar.style.height = '40px'
    avatarIcon.style.fontSize="12px"
    console.log(avatarIcon.style );
    video.autoplay = true
    video.load()
  })
  video.addEventListener('mouseleave', () => {
    console.log('leave');
    const videoParent = video.parentElement.parentElement
    videoParent.style.height = '120px'
    avatarSpan.style.bottom = '5px'
    avatarIcon.style.fontSize="14px"
    avatar.style.width = '50px'
    avatar.style.height = '50px'
    video.autoplay = false
    video.load()
  })
})