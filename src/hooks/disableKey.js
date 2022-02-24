/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-02-24 16:38:59
 * @LastEditors: MiKin
 * @LastEditTime: 2022-02-24 16:38:59
 * @FilePath: \cartoon-avatar\src\hooks\disableKey.js
 */

// Disable key position
export const disableKey = () => {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        window.scrollBy(0, -100)
      } else if (e.keyCode === 40) {
        window.scrollBy(0, 100)
      }
    })
  
    document.oncontextmenu = function () {
      return false;
    }
    document.onkeydown = function () {
      if (window.event && window.event.keyCode == 123) {
        return false;
      }
    }
    document.onkeydown = function () {
      if (window.event && window.event.ctrlKey) {
        if (window.event.keyCode == 67) {
          return false;
        }
      }
    }
  }