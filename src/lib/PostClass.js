class Post{

  get initPost(){
    return [{
      id: 0,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      preview:"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis",
      comments:[
        {
          id:0,
          author: 'kirill',
          text: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis"
        }
      ],
      commentCount: 1
    }]
  }

  getPosts(fields, postCount){
    if(!localStorage.getItem('data')){
      setTimeout(() => {
          localStorage.setItem('data',JSON.stringify(this.initPost))
      }, 0);
      return this.getByFields(this.initPost, fields)
    }else{ 
      let posts = this.getByFields(JSON.parse(localStorage.getItem('data')), fields)  
      if(postCount) {
        posts.data = posts.data.slice(0, postCount)
        return posts
      }
      return posts
    }
  }

  loadPosts(postCount, len){
    const posts = JSON.parse(localStorage.getItem('data'))
    const lastPosts = posts.slice(postCount-len, postCount)
    return lastPosts
  }

  getPost(id){
    const posts = JSON.parse(localStorage.getItem('data'))
    return posts.find(post=>post.id==id)
  }

  createPost(title, body){
    const newPost = {}
    const getPosts = JSON.parse(localStorage.getItem('data'))

    newPost.id = this.incrementId(getPosts)
    newPost.title = title
    newPost.preview = body.slice(0,70).trim()
    newPost.body = body.trim()

    getPosts.push(newPost) 
    localStorage.setItem('data',JSON.stringify(getPosts))   

    return true  
  }

  updatePost(postId, title, body){
    const post = this.getPost(postId)
    let posts = this.getPosts().data

    post.title = title
    post.body = body

    posts = this.writePostItem(postId, post, posts)

    localStorage.setItem('data',JSON.stringify(posts))
    
    return post
  }

  removePost(postId){
    let posts = this.getPosts().data
    posts = posts.filter(pst=> pst.id != postId)
    localStorage.setItem('data',JSON.stringify(posts))
  }

  addComment(postId, name, text){
    const post = this.getPost(postId)
    const comments = post.comments
    let posts = this.getPosts().data
    const newComment = {
      id: this.incrementId(comments),
      author: name,
      text: text
    }
    if(!comments){
      post.comments = [newComment]
      post.commentCount = 1
    }
    else{
      comments.push(newComment)
      post.comments = comments
      post.commentCount = comments.length
    }

    posts = this.writePostItem(postId, post, posts)

    localStorage.setItem('data',JSON.stringify(posts)) 

    return post
  }

  removeComment(postId, commentID){
    const post = this.getPost(postId)
    const comments = post.comments
    let posts = this.getPosts().data

    post.comments = post.comments.filter(cmnt=>cmnt.id != commentID)

    posts = this.writePostItem(postId, post, posts)

    localStorage.setItem('data',JSON.stringify(posts)) 

    return post.comments
  }

  writePostItem(postId, post, posts){
    return posts.map(pst=>{
      if(pst.id == postId){
        return post
      }
      return pst
    })
  }

  incrementId(posts){
    if(!posts) return 0
    let getMaxid = 0
    posts.forEach(post => {
      if(post.id > getMaxid){
          getMaxid = post.id 
      }
    })
    return ++getMaxid
  } 

  getByFields(posts, fields){
    const postData = {}
    if(!fields || !fields.length) return {data:posts, count: posts.length}

    postData.data = posts.map(oldEl=>{
      let newEl = {}
      fields.forEach(field=>{
        newEl[field] = oldEl[field]
      })
      return newEl
    })

    postData.count = postData.data.length
    return postData
  }

}

export default new Post()