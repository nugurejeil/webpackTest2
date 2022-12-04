// 이제 plus 함수는 직접 접근이 불가능합니다.
// console.log(obj.plus(2, 3));

// 모듈 시스템
import { plus } from './plus.js';
import './style.css';
import tiger from './tiger.png';
import rabbit from './rabbit.png';
import android from './android.png';


console.log(plus(7, 3));
document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${tiger}"><img src="${rabbit}"><img src="${android}">`;
})