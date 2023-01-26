class Post {
    constructor (id, name, game, comment, img, likes) {
      this.id = id
      this.name = name
      this.game = game
      this.comment = comment
      this.img = img
      this.likes = likes
      this.comments = new Array()
    }

    create(id, name, game, comment, img, likes) {
      return new Post(id, name, game, comment, img, likes)
    }
    createFinished(post) { //в JS не можна робити перегрузку методів, тому довелось імпровізувати
      return post
    }
    add() {
      if (this.id != null && this.name != null && this.game != null && (this.comment != null || this.img != null) && this.likes != null){
        document.getElementById("stylesheet").append(createPost.addPost(this.id, this.name, this.game, this.comment, this.img, this.likes, this.comments));
        document.getElementById("homepage").prepend(createPost.addLinkedPost(this.id, this.name, this.game, this.comment, this.img, this.likes));
      }
    }

    restart() {
      document.getElementById("stylesheet").remove()
      createPost.addGeneral()
      createPost.addHomePage()
    }
  }

class CreatePostLogic {
    addGeneral() {
      var stylesheet = document.createElement('div')
      stylesheet.id = "stylesheet"
      var x = document.getElementById("leftblock")
      x.append(stylesheet)
    }
    addHomePage() {
      var homepage = document.createElement('div')
      homepage.id = "homepage"
      homepage.className = "selected-stylesheet-block"
      document.getElementById("stylesheet").append(homepage)
    }
    addLinkedPost(id, name, game, comment, img, likes) {
      var stylesheetLinkedBlock = document.createElement('a')
      stylesheetLinkedBlock.className = "link"
      stylesheetLinkedBlock.href = "#" + id
      var stylesheetBlock = document.createElement('div')
      stylesheetBlock.className = "stylesheet-block"
      var userName = document.createElement('span')
      userName.innerHTML = name + "<br>"
      var gameName = document.createElement('span')
      gameName.innerHTML = game + "<br>"
      var textComment = document.createElement('span')
      textComment.innerHTML = comment + "<br>"
      var imageComment = document.createElement('img')
      imageComment.src = img
      var likeBox = document.createElement('div')
      likeBox.className = "likebox"
      var likeIcon = document.createElement('img')
      likeIcon.src = "img/like_icon.png"
      likeIcon.className = "like"
      likeBox.innerHTML += likes
      likeBox.append(likeIcon)
      stylesheetBlock.append(userName)
      stylesheetBlock.append(gameName)
      if (comment != null)
        stylesheetBlock.append(textComment)
      if (img != null)
        stylesheetBlock.append(imageComment)
      stylesheetBlock.append(likeBox)
      stylesheetLinkedBlock.append(stylesheetBlock)
      return stylesheetLinkedBlock
    }
    addPost(id, name, game, comment, img, likes) {
      var post = document.createElement('div')
      post.id = id
      post.classList.add("unselected-stylesheet-block")
      var backButton = document.createElement('a')
      backButton.href = "#homepage"
      backButton.className = "link"
      var backImg = document.createElement('img')
      backImg.src = "img/back.png"
      backImg.style = "width: 5%;"
      backButton.append(backImg)

      var stylesheetBlock = document.createElement('div')
      stylesheetBlock.className = "stylesheet-block"
      var userName = document.createElement('span')
      userName.innerHTML = name + "<br>"
      var gameName = document.createElement('span')
      gameName.innerHTML = game + "<br>"
      var textComment = document.createElement('span')
      textComment.innerHTML = comment + "<br>"
      var imageComment = document.createElement('img')
      imageComment.src = img
      stylesheetBlock.append(userName)
      stylesheetBlock.append(gameName)
      if (comment != null)
        stylesheetBlock.append(textComment)
      if (img != null)
        stylesheetBlock.append(imageComment)

      var commentBlock = document.createElement('div')
      commentBlock.className = "stylesheet-block"
      
      post.append(backButton)
      post.append(stylesheetBlock)
      post.append(createPost.addCommentInput(id))
      post.append(createPost.addComments(id))
      return post
    }
    addCommentInput(id) {
        var commentBlock = document.createElement('div')
        commentBlock.className = "stylesheet-block"
        var commentForm = document.createElement('form')
        commentForm.name = "myform"
        commentForm.method = "post"
        var commentField = document.createElement('input')
        commentField.type = "text"
        commentField.name = "comment_line"
        commentField.id = id
        commentField.placeholder = "Коментувати"
        var commentButton = document.createElement('input')
        commentButton.type = "submit"
        commentButton.class = "send-comment"
        commentButton.value = "Відправити"
        commentForm.append(commentField)
        commentForm.append(commentButton)
        commentBlock.append(commentForm)
        return commentBlock
    }
    addComments(id) {
      var commentsBlock = document.createElement('div')
      commentsBlock.className = "stylesheet-block"
      var comments = document.createElement('table')
      comments.id = "comments"
      var commentsLine = document.createElement('tr')
      var commentatorName = document.createElement('td')
      commentatorName.style = "width: 20%;"
      commentatorName.innerHTML = "Імена:"
      var commentatorPost = document.createElement('td')
      commentatorPost.style = "width: 80%;"
      commentatorPost.innerHTML = "Коментарі:"
      commentsLine.append(commentatorName)
      commentsLine.append(commentatorPost)
      comments.append(commentsLine)

      for (var i=commentsList.length-1; i>=0; i--)
        if (commentsList[i].postId == id) {
          var commentsLine = document.createElement('tr')
          var commentName = document.createElement('td')

          for (var j=0; j<usersList.length; j++)
            if (usersList[j].id == commentsList[i].userId)
              commentName.innerText = usersList[j].name

          var commentPost = document.createElement('td')
          commentPost.innerText = commentsList[i].comment
          commentsLine.append(commentName)
          commentsLine.append(commentPost)
          comments.append(commentsLine)
        }
      commentsBlock.append(comments)
      return commentsBlock
    }
  }
  
  var postList = new Array(
    new Post(0, "@wellke", "Terraria", "Почав проходити Terraria. З чого почати?", "img/photo_2022-10-02_20-58-55.jpg", 2),
    new Post(1, "@Pants_down_kyodai", "The Witcher 3: Wild Hunt", "Вау, тільки гляньте, які круті обладунки мені трапилась!", "img/photo_2022-10-02_21-09-06.jpg", 16),
    new Post(2, "@Luckych", "The Legend of Zelda: Breath of the Wild", "Допоможіть встановити BCML для USB helper", null, 25),
    new Post(3, "@Pants_down_kyodai", "Disco Elysium", "Ой, негарно вийшло...", "img/photo_2022-10-02_21-22-50.jpg", 81),
    new Post(4, "@Luckych", "Geoguessr", "😎😎😎", "img/photo_2022-10-02_23-32-11.jpg", 27),
    new Post(5, "@123", "Test", null, null, 0)
  )


  const createPost = new CreatePostLogic()
  createPost.addGeneral()
  createPost.addHomePage()
  fillPosts()

  const pageModeChanger = {
    isDarkMode: false,
    dark: "img/dark mode.png",
    light: "img/light mode.png"
  }
    
  document.querySelector(".btn-toggle").addEventListener("click", function () {
    document.body.classList.toggle("Dark-theme");
    document.querySelector(".general").classList.toggle('Dark-theme');
    document.querySelector("#stylesheet").classList.toggle('Dark-theme');
    document.querySelector("#logodiv").classList.toggle('Dark-theme');
    for(var i=0; i<$(".stylesheet-block").length; i++)
      $(".stylesheet-block")[i].classList.toggle('Dark-theme');
    for(var i=0; i<$("input[type=submit]").length; i++)
      $("input[type=submit]")[i].classList.toggle('Dark-theme');
    for(var i=0; i<$(".filter-button").length; i++)
      $(".filter-button")[i].classList.toggle('Dark-theme');
    for(var i=0; i<$("input[type=text]").length; i++)
      $("input[type=text]")[i].classList.toggle('Dark-theme');
    for(var i=0; i<$("table#comments").length; i++)
      $("table#comments")[i].classList.toggle('Dark-theme');
      
    if (pageModeChanger.isDarkMode) {
      pageModeChanger.isDarkMode = false
      document.getElementById("image").src = pageModeChanger.light
    }
    else {
      pageModeChanger.isDarkMode = true
      document.getElementById("image").src = pageModeChanger.dark
    }
  })

function fillPosts() {
    const fabricPost = new Post()
    fabricPost.restart()
    for (var j = 0; j < postList.length; j++) {
        fabricPost.createFinished(postList[j]).add()
    }
    
    $(".send-comment").click(function(){
      setCookie("openedHref", openedHref, 10)
    })
    
    $(".link").click(function(){
      openedHref=$(this).attr('href').substring(1);
      document.getElementsByClassName("selected-stylesheet-block")[0].classList.replace('selected-stylesheet-block', 'unselected-stylesheet-block')
      document.getElementById(openedHref).classList.replace('unselected-stylesheet-block', 'selected-stylesheet-block')
      setCookie("openedHref", openedHref, 10)
    })
  }


  function bubbleSortByGameName() {
    var array = new Array()
    for(var i=0; i < postList.length; i++)
    array.push(postList[i].game)
    for(var i=0; i < array.length; i++)
      for(var j=0; j < array.length-i-1; j++)
        if(array[j] < array[j+1]) {
          var x = array[j]
          array[j] = array[j + 1]
          array[j+1] = x
        }

  var intermediateList = new Array()
  for(var i = 0; i < array.length; i++)
    for(var j = 0; j < postList.length; j++)
      if (postList[j].game == array[i])
        intermediateList.push(postList[j])
  postList = intermediateList
  fillPosts()
}
function bubbleSortByLikes() {
    var array = new Array()
    for(var i=0; i < postList.length; i++)
    array.push(postList[i].likes)
    for(var i=0; i <= array.length-1; i++)
      for(var j=0; j < array.length-i-1; j++)
        if(array[j] > array[j+1]) {
          var x = array[j]
          array[j] = array[j + 1]
          array[j+1] = x
        }

  var intermediateList = new Array()
  for(var i = 0; i < array.length; i++)
    for(var j = 0; j < postList.length; j++)
      if (postList[j].likes == array[i])
        intermediateList.push(postList[j])
  postList = intermediateList
  fillPosts()
}
  function bubbleSortById() {
    var array = new Array()
    for(var i=0; i < postList.length; i++)
    array.push(postList[i].id)
    for(var i=0; i <= array.length-1; i++)
      for(var j=0; j < array.length-i-1; j++)
        if(array[j] > array[j+1]) {
          var x = array[j]
          array[j] = array[j + 1]
          array[j+1] = x
        }

    var intermediateList = new Array()
    for(var i = 0; i < array.length; i++)
      for(var j = 0; j < postList.length; j++)
        if (postList[j].id == array[i])
          intermediateList.push(postList[j])
    postList = intermediateList
    fillPosts()
  }