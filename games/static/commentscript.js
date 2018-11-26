jQuery("document").ready(function(){
    console.log('hello')
    jQuery(".likecomment").on('click', function(){
        console.log("hello");
            var href = document.getElementById('likecomment').name;
            jQuery.ajax({
                type: "GET",

                url: "/games/addliketocomment/commentajax/",

                data:{ "addliketocomment" : id,},

                dataType: "text",

                catch: false,

                success: function(data){

                    jQuery("#com_count_likes").html(data);
                }
            });
    });
});