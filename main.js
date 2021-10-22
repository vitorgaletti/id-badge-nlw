const linksSocialMedia = {
  github: 'vitorgaletti',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'devvitorgaletti',
  twitter: 'DevVitorGaleti',
  linkedin: 'vitorgaleti'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    if (social === 'linkedin') {
      return (li.children[0].href = `https://${social}.com/in/${linksSocialMedia[social]}`)
    }
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}
getGitHubProfileInfos()
