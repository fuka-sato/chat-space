$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = 
      `<div class="chat-main__messages__message">
      <div class="chat-main__messages__message__top">
        <p class="message__top__user-name">
          ${message.user_name}
        </p>
        <p class="message__top__date">
          ${message.created_at}
        </p>
      </div>
      <div class="chat-main__messages__message__low">
        <p class="chat-main__messages__message__text">
          ${message.body}
        </p>
      </div>
      <img src = ${message.image} >
    </div>`
    return html;
    } else {
      var html =
      `<div class="chat-main__messages__message">
          <div class="chat-main__messages__message__top">
            <p class="message__top__user-name">
              ${message.user_name}
            </p>
            <p class="message__top__date">
              ${message.created_at}
            </p>
          </div>
          <div class="chat-main__messages__message__low">
            <p class="chat-main__messages__message__text">
              ${message.body}
            </p>
          </div>
        </div>`
        return html;
      };
    }
$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.chat-main__messages').append(html);
        $('.chat-main__messages').animate({scrollTop: $('.chat-main__messages')[0].scrollHeight}, 'fast');      
        $('form')[0].reset();
        $("new-message__send-btn").prop('disabled', false);
      })
      .fail(function(){
        alert("メッセージ送信に失敗しました");
      });
      return false;
    });
  });