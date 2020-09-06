function  createLines(amount, parent) {
    let lines;
    function r(min, max) {
      return parseInt(Math.random() * ((max + 1) - min) + min, 10);
    }
    function flying(width, speed) {
      for(let i = 0; i < amount; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.speed = -r(speed / 2, speed);
        line.top = r(0, parent.clientHeight);
        line.left = r(0, parent.clientWidth);
        line.width = width;
        line.style.top = `${line.top}px`;
        line.style.left = `${line.left}px`;
        line.style.width = `${width}px`;
        parent.appendChild(line);
      }
      lines = document.querySelectorAll(`.line`);
      anim();
    }
    function anim() {
      lines.forEach((line) => {
        line.left += line.speed;
        if(line.left + line.width < 0) {
          line.left = parent.clientWidth;
          line.top = r(0, parent.clientHeight);
        }
        line.style.left = `${line.left}px`;
        line.style.top = `${line.top}px`;
      });
      requestAnimationFrame(anim);
    }
    return {
        flying: flying,
    }
  }
  createLines(3, Loader).flying(300, 100);