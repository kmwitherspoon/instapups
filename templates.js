var template = {
  instaTmpl: [
    '<div class="col-md-3">',
    '<div class= "favorites-info"><span class="likes">Likes</span><span class="glyphicon favorite"></span><span class="number"><%= likes %></span></div>',
      '<img class = "picture" src ="<%= picture_url %>">',
      '<p class="caption" src="<%= text%>"><%= text%></p></div>'
  ].join("")
}
