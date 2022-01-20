/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-01-20 15:16:03
 * @LastEditors: MiKin
 * @LastEditTime: 2022-01-20 15:58:09
 * @FilePath: \scary ux\src\hooks\showBigImage.js
 */
const aCssText = (top) => `position: absolute;
right: 10%;
margin:auto;
transform: translateY(-50%);
padding: 5px 10px;
background: #fff;
border-radius: 5px;
border: 1px solid #ccc;
cursor: pointer;
text-decoration: none;`;

const elAppendChild = (el, cssTop, innerText, callBack) => {
    const aEl = document.createElement('a');
    aEl.style.cssText = aCssText(cssTop);
    aEl.innerText = innerText;
    el.appendChild(aEl);
    aEl.onclick = callBack;
}

export const showBigImage = (el) => {
    const div = document.createElement('div');
    div.className = 'big-image';
    div.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999; 
    display: flex;
    justify-content: center;
    align-items: center;
  `;
    const img = document.createElement('img');
    img.src = el.target.src;
    img.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  `;
    div.appendChild(img);
    elAppendChild(div, 60, 'download', () => {
        fetch(el.target.src).then(res => {
            res.blob().then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'image.jpg';
                a.click();
            })
        })
    });
    document.body.appendChild(div);
    
    img.onclick = () => {
        div.remove();
    }
    // esc
    document.onkeydown = (e) => {
        if (e.keyCode === 27) {
            div.remove();
        }
    }
}