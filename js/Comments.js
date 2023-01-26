class Comments {
    constructor(postId, userId, comment) {
      this.postId = postId
      this.userId = userId
      this.comment = comment
    }
}

  var commentsList = new Array(
    new Comments(4, 3, "Непогано"),
    new Comments(0, 5, "Піди в джунглі"),
    new Comments(0, 0, "Нащо тобі ті ігри? Краще піди напиши курсач на js. Дізнайся, що таке страждання!"),
    new Comments(3, 4, "АХАХахахахахах, лол"),
    new Comments(3, 2, "Як так можна було?"),
    new Comments(2, 5, "Ніяк"),
    new Comments(4, 0, "Ого!!")
  )

