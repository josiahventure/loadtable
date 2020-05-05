(function($) {   // contact list load
  $('.row').on( "click", ".link-profile", function() {
    const myClass = $(this).attr("class");
    const tmp = myClass.split(" ");
    const id = tmp[0].split("-");
    if ($("#profile" + id[1]).is(':visible')) {
      $("#profile" + id[1]).hide();
    } else {
      $(".profiles").hide();
    $("." + tmp[0]).after("<tr id='profile" + id[1] + "' class='profiles' style='display: none; height: 400px;'><td colspan=10 class=\"profile_hide\"><div id='content" + id[1] + "'>LOADING</div></td></tr>");
    $('#profile' + id[1]).slideDown("slow");
    $.ajax({
      type: "get",
      url: '/contact_summary_organisations?contact_id=' + id[1], // profile url
      data: "id=" + id[1], // contact id
      cache: false,
      success: function (html) {
        $("#content" + id[1]).html(html);
      }
    });
  }
  });

})(jQuery)
