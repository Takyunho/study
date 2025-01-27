//! 반복문(For statement)
//=> for (시작조건; 종료조건; 변화조건) { 실행문 }

export default function app() {
    
    const ulEl = document.querySelector('ul');

    for (let i = 0; i < 10; i++) {
        
        const li = document.createElement('li');
        li.textContent = `list-${i + 1}`

        if ((i + 1) % 2 === 0) {      // i + 1이 짝수일 때
            li.addEventListener('click', function () {
                console.log(li.textContent)
            })
        }
        ulEl.appendChild(li);
    }
   
}