//  Start coding here

class User {
    constructor (id,name,email) {
    this.id=id;
    this.name=name;
    this.email=email;
    }
  }
  
  class PostList {
    constructor (posts) {
      this.posts=posts
    }
  
    addPost (post) {
      return this.posts.push(post)
    }
  
    sharePost (postTitle) {
      return console.log(`You've shared post ${postTitle} to your friend`)
    }
  }
  
  class Post {
    constructor (id,title,content,comment) {
      this.id=id;
      this.title=title;
      this.content=content;
      this.comment=comment;
    }
  
    addComment (comment) {
      return this.comment.push(comment)
    }
  }
  
  class Comment {
    constructor (id, content, createdBy, like) {
     this.id=id;
     this.content=content;
     this.createdBy=createdBy;
     this.like=like; 
    }
  
    addLike () {
      return this.like+1;
    }
  }
  
  class Facebook {
    constructor (groupList, pageList) {
      this.groupList=groupList;
      this.pageList=pageList;
    }
  
    addGroup (FacebookGroup) {
      return this.groupList.push(FacebookGroup)
    }
  
    addPage (FacebookPage) {
      return this.pageList.push(FacebookPage)
    }
  }
  
  class FacebookPage {
    constructor (name) {
      this.name=name;
    }
  }
  
  class FacebookGroup {
    constructor (name) {
      this.name=name;
    }
  }
  
  class Notification {
    constructor (id) {
      this.id=id;
    }
  
    send() {
      return console.log(`Notification: ${comment.createdBy} has just commented on this post-"${post.title}"`)
    }
  }