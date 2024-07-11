const style = document.createElement('style');
style.textContent = '* { margin: 0; padding: 0; }';
document.head.appendChild(style);

const root = document.getElementById('root');
root.style.width = '100vw';
root.style.height = '100vh';
root.style.display = 'flex';
root.style.flexDirection = 'row';
root.style.alignItems = 'center';
root.style.justifyContent = 'center';
root.style.gap = '50px';

let cardDiv = document.createElement('div');
cardDiv.style.width = '800px';
cardDiv.style.height = '60vh';
cardDiv.style.display = 'flex';
cardDiv.style.flexDirection = 'column';
cardDiv.style.gap = '100px';

cardDiv.setAttribute('id', 'card');

let cardFirstDiv = document.createElement('div');
let FirstDivHOne = document.createElement('h1');
FirstDivHOne.textContent = 'INDENTATION';
let FirstDivPTag = document.createElement('p');
FirstDivPTag.textContent =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos fuga placeat voluptatem unde deleniti iste alias dolorem animi odio, praesentium, doloremque voluptates rem assumenda doloribus, pariatur tempore ullam esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam recusandae quidem architecto praesentium sed, nisi, cupiditate sequi eaque tempora fugit exercitationem atque unde asperiores earum quasi tempore ratione enim. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magni ullam dolores laborum a explicabo, quod possimus quasi saepe quas minus. Beatae non eveniet corrupti sequi eius accusamus enim quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque commodi ab eius modi. Quod quam, odio voluptates, assumenda aperiam nisi eveniet eius corporis cumque est repellendus atque sunt libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quae culpa magni laboriosam repellat officiis porro nobis quaerat, cupiditate voluptate molestias commodi nesciunt! Fugiat vitae quos laboriosam adipisci architecto doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam aspernatur, unde rerum non eos minima modi animi quas? Quae laboriosam deleniti porro, illo et ipsa? Sequi iure error ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab optio debitis ex. Quas dignissimos, perspiciatis doloribus reprehenderit odio sunt esse repellat nobis ex? Voluptates porro dolorem ad rem ducimus cum?';
cardFirstDiv.appendChild(FirstDivHOne);
cardFirstDiv.appendChild(FirstDivPTag);
let cardSecondDiv = document.createElement('div');
let secondDivHOne = document.createElement('h1');
secondDivHOne.textContent = 'EXLUSIVE';
let secondDivPTag = document.createElement('p');
secondDivPTag.textContent =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum soluta laborum provident quisquam laudantium nulla. Fugiat, ducimus nulla pariatur nesciunt, quae, adipisci id praesentium assumenda iste cum explicabo illum magnam?';
cardSecondDiv.appendChild(secondDivHOne);
cardSecondDiv.appendChild(secondDivPTag);
cardDiv.appendChild(cardFirstDiv);
cardDiv.appendChild(cardSecondDiv);

let arrowDiv = document.createElement('div');
arrowDiv.style.width = '60px';
arrowDiv.style.height = '20px';
arrowDiv.textContent = '이것은 화살표다';

let sideBar = document.createElement('div');
sideBar.style.width = '20px';
sideBar.style.height = '60vh';
sideBar.style.marginLeft = '400px';
sideBar.textContent = '이것은 사이드바이다';

root.appendChild(cardDiv);
root.appendChild(arrowDiv);
root.appendChild(sideBar);
