const videos = document.querySelectorAll('video')
const avatar = document.querySelector('.most_watched_avatar')
const avatarIcon = document.querySelector('.most_watched_avatar i')
const avatarSpan = document.querySelector('.most_watched_avatar span')
const sidebarLists = document.querySelectorAll('.sidebar_navbar_list')
const discoverPage = document.querySelector('.discover')
const trendingPage = document.querySelector('.trending')

// console.log(sidebarLists);
sidebarLists.forEach((list) => {
  list.addEventListener('click', function () {
    // console.log(this);
    // console.log(this.classList.contains('active'));
    // console.log(this.children[0].classList.contains('active'));
    if (this.children[0].classList.contains('active')) {
      discoverPage.style.display = 'block'
      trendingPage.style.display = 'none'
      this.children[0].style.backgroundColor = "#ff7551";
      this.children[0].children[0].style.color = "#ffffff";
      this.children[1].style.color = "#ffffff";
    }
    else {
      discoverPage.style.display = 'none'
      trendingPage.style.display = 'block'
      this.children[0].style.backgroundColor = "#6c5ecf";
      this.children[0].children[0].style.color = "#ffffff";
      this.children[1].style.color = "#ffffff";
    }
    // console.log(this.children[1]);
  })
})

// ! video auto play
videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    const videoParent = video.parentElement.parentElement
    // console.log(avatar.style.width)
    videoParent.style.height = '165px'
    avatarSpan.style.bottom = '2px'
    avatar.style.width = '40px'
    avatar.style.height = '40px'
    avatarIcon.style.fontSize = "12px"
    // console.log(avatarIcon.style);
    video.autoplay = true
    video.load()
  })
  video.addEventListener('mouseleave', () => {
    // console.log('leave');
    const videoParent = video.parentElement.parentElement
    videoParent.style.height = '120px'
    avatarSpan.style.bottom = '5px'
    avatarIcon.style.fontSize = "14px"
    avatar.style.width = '50px'
    avatar.style.height = '50px'
    video.autoplay = false
    video.load()
  })
})