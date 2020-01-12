import $ from 'jquery';


export default class Favorites {
    init() {
        this._initialDom();

        this.checkIsFavorite = this.checkIsFavorite.bind(this);
        this.checkIsFavorite();
    }

    _initialDom() {
        const checkIsFavorite = this.checkIsFavorite;
        $('.card__add-features').on('click', function() {
            const parent = $(this).parent(); 
            const title = parent.find('.card__title-link').text(); 
            const image = parent.find('.card__image').attr('src');
    
            let arr = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
            
                const index = arr.findIndex(card => card.title === title);
                if (index === -1) {
                    arr.push({title, image});
                } else {
                    arr = [...arr.slice(0, index), ...arr.slice(index + 1)];        
                }
            localStorage.setItem('favorites', JSON.stringify(arr))
            checkIsFavorite();
        })
    }

    checkIsFavorite() {
        let arr = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
            $('.card').each(function() {
                const fv = $(this).find('.card__add-features');
                const title = $(this).find('.card__title-link').text();
        
                if (arr.findIndex(card => card.title === title) >= 0) {
                    fv.addClass('card__add-features--active');
                } else {
                    fv.removeClass('card__add-features--active');
                }
            });

            arr.length > 0 ? 
            $('.header__favorites').addClass('header__favorites--yes') : 
            $('.header__favorites').removeClass('header__favorites--yes');   
    }
}