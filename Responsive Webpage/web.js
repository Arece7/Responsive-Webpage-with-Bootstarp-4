

var web = function(){

    return{
        init: function(){
                // web.registerevent();
                web.pageGallery();
              },
        pageGallery : function(){
            $(".fancybox").fancybox({
                openEffect: "none",
                closeEffect: "none"
            });
        }
    };

}();