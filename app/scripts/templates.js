var postsTmpl = [
  "<% _.each(posts, function(element, index, list) { %>",
  "<article data-postid=\"<%= element._id %>\" class=\"post\">",
    "<h2><%= element.title %></h2>",
    "<p><%= element.content %></p>",
    "<p>- <%= element.author %>, created on <%= element.createDate %></p>",
    "<p><button class=\"destroy\">Delete</button> | <button class=\"editPost\">Edit</button> </p>",

  "<form name=\"editPost\" class=\"hide\">",
    "<input type=\"text\" class=\"editTitle\" name=\"title\" value=\"<%= element.title %>\">",
    "<textarea name=\"editContent\" class=\"editContent\" cols=\"30\" rows=\"10\">",
    "<%= element.content %>",
    "</textarea>",
    "<input type=\"text\" class=\"editAuthor\" name=\"editAuthor\" value=\"<%= element.author %>\">",
    "<input type=\"submit\" class=\"update\" value=\"Update\">",
  "</form>",
  "</article>",
  "<% }); %>"
].join("\n");
