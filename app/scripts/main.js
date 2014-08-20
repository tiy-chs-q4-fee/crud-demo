$(document).ready(function () {
  myBlog.init();
});


var myBlog = {
  init: function () {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function () {
    myBlog.getPosts();

  },
  initEvents: function () {

    $("form").on("submit", function (event) {
      event.preventDefault();
      var newPost = {
        title: $(".title").val(),
        content:$("#blogContent").val(),
        author: $(".author").val(),
        createDate: new Date()
      };

      myBlog.createPost(newPost);

    });
    $(".container").on("click", ".destroy", function (event) {
      event.preventDefault();
      var postId = $(this).closest("article").data("postid");
      console.log(postId);
      myBlog.deletePost(postId);
    });

    $(".container").on("click", ".editPost", function (event) {
      event.preventDefault();
      // toggle visibility of edit form
      $(this).closest("article").find("form").toggleClass("hide");
    });
    $(".container").on("click", ".update",function (event) {
event.preventDefault();
        var postId = $(this).closest("article").data("postid");
        var updatedPost = {
          title: $(this).closest("article").find(".editTitle").val(),
          content:$(this).closest("article").find(".editContent").val(),
          author:$(this).closest("article").find(".editAuthor").val()
        };
        myBlog.updatePost(postId, updatedPost);

$(this).closest("article").find("form").addClass("hide");

    })

  },
  render: function (template, data, $el) {
    var markup = _.template(template, data);

    $el.html(markup);

  },
  url: "http://tiy-fee-rest.herokuapp.com/collections/crud-demo",
  getPosts: function () {

    $.ajax({
      url: myBlog.url,
      type: 'GET',
      success: function (response) {
        var posts = window.posts = response;

        myBlog.render(postsTmpl, posts, $("section"));

      }
    });

  },
  createPost: function (newPost) {
      $.ajax({
        url: myBlog.url,
        data: newPost,
        type: 'POST',
        success: function (response) {
          myBlog.getPosts();

        }
      });
  },
  deletePost: function (postId) {
    $.ajax({
      url: myBlog.url + "/" + postId,
      type: 'DELETE',
      success: function () {
          myBlog.getPosts();
      }
    });

  },
  updatePost: function (postId, updatedPost) {

    $.ajax({
      url: myBlog.url + "/" + postId,
      type: "PUT",
      data: updatedPost,
      success: function (response) {
        // something goes here
        console.log(response);
        myBlog.getPosts();
      }
    });

  }


};
















/// comment
