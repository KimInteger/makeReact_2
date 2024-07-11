interface ElementDataType {
  root: {
    styles: React.CSSProperties;
    children: {
      card: {
        style: React.CSSProperties;
        children: {
          cardOne: {
            style: React.CSSProperties;
            children: {
              hOne: {
                textNode: string;
              };
              pTag: {
                textNode: string;
              };
            };
          };
          cardTwo: {
            style: React.CSSProperties;
            children: {
              hOne: {
                textNode: string;
              };
              pTag: {
                textNode: string;
              };
            };
          };
        };
      };
      arrow: {
        style: React.CSSProperties;
        textNode: string;
      };
      sideBar: {
        style: React.CSSProperties;
        textNode: string;
      };
    };
  };
}

const elementData: ElementDataType = {
  root: {
    styles: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '50px',
    },
    children: {
      card: {
        style: {
          width: '800px',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '100px',
        },
        children: {
          cardOne: {
            style: {},
            children: {
              hOne: {
                textNode: 'INDENTATION',
              },
              pTag: {
                textNode:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos fuga placeat voluptatem unde deleniti iste alias dolorem animi odio, praesentium, doloremque voluptates rem assumenda doloribus, pariatur tempore ullam esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam recusandae quidem architecto praesentium sed, nisi, cupiditate sequi eaque tempora fugit exercitationem atque unde asperiores earum quasi tempore ratione enim. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magni ullam dolores laborum a explicabo, quod possimus quasi saepe quas minus. Beatae non eveniet corrupti sequi eius accusamus enim quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque commodi ab eius modi. Quod quam, odio voluptates, assumenda aperiam nisi eveniet eius corporis cumque est repellendus atque sunt libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quae culpa magni laboriosam repellat officiis porro nobis quaerat, cupiditate voluptate molestias commodi nesciunt! Fugiat vitae quos laboriosam adipisci architecto doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam aspernatur, unde rerum non eos minima modi animi quas? Quae laboriosam deleniti porro, illo et ipsa? Sequi iure error ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab optio debitis ex. Quas dignissimos, perspiciatis doloribus reprehenderit odio sunt esse repellat nobis ex? Voluptates porro dolorem ad rem ducimus cum?',
              },
            },
          },
          cardTwo: {
            style: {},
            children: {
              hOne: {
                textNode: 'EXLUSIVE',
              },
              pTag: {
                textNode:
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum soluta laborum provident quisquam laudantium nulla. Fugiat, ducimus nulla pariatur nesciunt, quae, adipisci id praesentium assumenda iste cum explicabo illum magnam?',
              },
            },
          },
        },
      },
      arrow: {
        style: {
          width: '60px',
          height: '20px',
        },
        textNode: '이것은 화살표다',
      },
      sideBar: {
        style: {
          width: '20px',
          height: '60vh',
          marginLeft: '400px',
        },
        textNode: '이것은 사이드바이다',
      },
    },
  },
};

export default elementData;
