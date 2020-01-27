import $ from 'jquery';


export default class Search {
    init() {
        $('#web_search_string').keyup(function(event){

            var value = event.currentTarget.value, data
        
            data = {'web_search_action': 'search_helper', 'web_search_string': value}
        
            if(value.length > 1){
        
                $.ajax({
        
                    type : 'POST',
        
                    url : window.location.href,
        
                    data : data,
        
                    success : function(json){
        
                        var html = '', txt = ''
        
                        $.each(json, function(key, val){
        
        // собираем список товаров хелпера
        
        txt = val['txt_show_all']
        
        html += '<div class="search-helper-row"><a href="'+val['url']+'" class="search-helper_img"><img src="' + ( (val['image']!=null)? val['image'] : '/assets/snippets/phpthumb/noimage.png' ) + '" /></a>' 
        
        html += '<a href="'+val['url']+'" class="search-helper_t">'+val['pagetitle']+'</a>'
        
        html += '<span class="search-helper_price">'+val['price']+' грн</span>'
        
        html += '</div>'
        
        })
        
                        if(html.length > 0){
        
                            html += '<span class="search-helper_show-all">'+txt+'</span>'
        
                            $('#web_search_ajax_helper').html(html)

                            $('.search-helper_show-all').click(() => {
                                $("#WS-search").submit()
                            })
        
                        }
        
                        else{
        
                            $('#web_search_ajax_helper').html('')
        
                        }
        
                    },
        
                    dataType : 'json'
        
                })
        
            }
        
            else $('#web_search_ajax_helper').html('')
        
        })
        
    }
}
