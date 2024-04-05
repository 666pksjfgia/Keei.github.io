function sendEmail() {
    // 收件人邮箱地址
    var recipient = "mikemilklzy666@gmail.com";
    // 主题
    var subject = "";
    // 邮件正文
    var body = "";

    // 生成邮件链接
    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // 打开邮件客户端
    window.location.href = mailtoLink;
}


