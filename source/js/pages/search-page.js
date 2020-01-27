import $ from 'jquery';

export default class SearchPage {
    init() {
        var val = $('#wsp_category').val();
        if (val == 'prod') $('#wsp_sort_option').css('display', 'block')
        else $('#wsp_sort_option').css('display', 'none');
        $('#wsp_category').change(function (event) {
            var val = event.currentTarget.value;
            if (val == 'prod') $('#wsp_sort_option').css('display', 'block')
            else $('#wsp_sort_option').css('display', 'none');
        });
    }
}
