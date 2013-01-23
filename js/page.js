var page = {
    create: function() {


        var headNavBar = document.createElement('div');
        headNavBar.setAttribute('id', 'super');
        document.body.insertBefore(headNavBar, document.body.firstChild);



        headNavBar.innerHTML = '<div class="imageHeader">' +
                '<a href="http://www.gdgomsk.org/" target="_blank">' +
                '<img src="../images/icon19.png" style="height:100px;border:0" title="GDG Omsk" alt="GDG Omsk"/>' +
                '</a>' +
                '<br />' +
                '</div>' +
                '<div class="nav">' +
                '<a href="blog.html">Blog posts</a> &nbsp; | ' +
                '<a href="twitter.html">Tweets</a> &nbsp; | ' +
                '<a href="popup.html">Links</a> &nbsp; | ' +
                '<a href="about.html">About</a> &nbsp; ' +
                '</div>';


    }
};

document.addEventListener('DOMContentLoaded', function () {
  //document.querySelector('button').addEventListener('click', clickHandler);
  page.create();
});