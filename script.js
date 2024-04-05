// 确保调用marked.parse之前已引入marked库
// fetch('content/test.md')
//     .then(response => response.text())
//     .then(text => {
//         const htmlContent = marked.parse(text);
//         document.getElementById('blog').innerHTML = htmlContent;
//     })
//     .catch(error => console.error(error));
const links = document.querySelectorAll('.nav-link');
const contents = document.querySelectorAll('.content');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        contents.forEach(content => {
            if(content.id === targetId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});




