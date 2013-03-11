var page = {
    create: function() {

        var headNavBar = document.createElement('div');
        headNavBar.setAttribute('id', 'super');
        document.body.insertBefore(headNavBar, document.body.firstChild);

        headNavBar.innerHTML = '<div class="imageHeader">' +
                '<a href="http://plus.gdgomsk.org/" target="_blank">' +
                '<img src="../images/logo.png" style="height:100px;border:0" title="GDG Omsk" alt="GDG Omsk"/>' +
                '</a>' +
                '<br />' +
                '</div>' +
                '<nav class="menu">' +
                    '<ul>' +
                        '<li>' +
                            '<a href="blog.html">Блог</a>' +
                        '</li>' +
                        '<li>' +
                            '<a href="twitter.html">Твиттер</a>' +
                        '</li>' +
                        '<li>' +
                            '<a href="plus.html">G+</a>' +
                        '</li>' +
                        '<li>' +
                            '<a href="popup.html">Ссылки</a>' +
                        '</li>' +
                        '<li>' +
                            '<a href="about.html">?</a>' +
                        '</li>'+
                    '</ul>' +
                '</nav>';

        $('nav.menu a').each(function(index, elem) {
            if (document.URL.indexOf(elem.getAttribute('href')) != -1)
            {
                $(elem).addClass('current');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
  page.create();
});