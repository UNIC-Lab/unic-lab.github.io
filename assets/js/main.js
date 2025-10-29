(function($){
  $(function(){
    $(".button-collapse").sideNav();
    
    // 处理侧边栏菜单的展开/收起
    $('.collapsible-header').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next('.collapsible-body').slideToggle(300);
    });
  });
})(jQuery);
