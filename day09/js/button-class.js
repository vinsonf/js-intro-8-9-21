function createButton() {
    const button = document.createElement("button");
    button.id = "active";
    button.id = "test";
    document.body.append(button);
    button.innerHTML = "<h1>Click this Button</h1>";
    button.innerText = "<h1>innerText</h1>";
    button.style.color = "green";
    button.style.padding = "20px";
    button.classList.add("active");
    button.classList.remove("test");
    return button;
  }
  
  class MyButton {
    constructor() {
      this.button = document.createElement("button");
      this.button.id = "active";
      this.button.id = "test";
      document.body.append(this.button);
      this.button.innerHTML = "<h1>Click this Button</h1>";
      this.button.innerText = "<h1>innerText</h1>";
      this.button.style.color = "green";
      this.button.style.padding = "20px";
    }
  
    add(className) {
      this.button.classList.add(className);
    }
    remove(className) {
      this.button.classList.remove(className);
    }
  
    get color() {
      return this.button.style.color;
    }
  
    set color(colorName) {
      console.log('trying to set color to ', colorName);
      if (colorName === 'cyan') {
          console.log('DENIED: ', 'invalid color');
          return;
      }
      this.button.style.color = colorName;
      console.log('SUCCESS: ', 'changed color to ', colorName)
    }
  
  }
  
  const button1 = new MyButton();
  //  button1.button.classList.add('active');
  button1.add("active");
  button1.remove("active");
  
  
  button1.color = 'red';
  
  console.log(button1.color);
  