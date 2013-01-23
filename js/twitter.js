var twitter = {
    create: function() {



            new TWTR.Widget({
                version: 2,
                type: 'profile',
                rpp: 5,
                interval: 6000,
                width: 290,
                height: 300,
                theme: {
                    shell: {
                        background: '#333333',
                        color: '#ffffff'
                    },
                    tweets: {
                        background: '#ffffff',
                        color: '#000000',
                        links: '#0000FF'
                    }
                },
                features: {
                    scrollbar: true,
                    loop: false,
                    live: true,
                    hashtags: true,
                    timestamp: true,
                    avatars: true,
                    behavior: 'all'
                }
            }).render().setUser('gdgomsk').start();
       





    }
    
  
};

document.addEventListener('DOMContentLoaded', function () {
 
  twitter.create();
});
         
         
         
         
         
         
         
         
         

