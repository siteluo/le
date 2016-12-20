~function () {
    function Banner(id,duration){
        this.duration=duration||2000;
        this.$box=$('#'+id);
        this.$boxInner=this.$box.find('.banner-inner');
console.log(this.$boxInner);
        this.$aImg=this.$boxInner.children('a');
        this.n=0;
        this.timer=null;
        this.data=null;
        this.init();
    }
    Banner.prototype= {
        constructor: Banner,
        init: function () {
            var _this = this;
            clearInterval(this.timer);
            this.timer = setInterval(function () {
                _this.autoMove();
            }, this.duration);
        },

        autoMove: function () {
            if (this.n >= this.$aImg.length - 1) {
                this.n = -1;
            }
            this.n++;
            this.setBanner();
            console.log(this.n);
        },
        setBanner: function () {
            var _this = this;
            $.each(this.$aImg, function (index, item) {
                if (index == _this.n) {
                    $(item).css('zIndex', 1).stop().fadeIn(1000, function () {
                        $(this).siblings().stop().fadeOut();
                    });
                } else {
                    $(item).css('zIndex', 0);
                }
            });

        }
    }
    window.Banner = Banner;
}();