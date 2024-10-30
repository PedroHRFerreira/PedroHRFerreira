```
import React from "react";

const Profile: React.FC = () => {
  const personalProfile = () => {
    const information = {
      Name: "Pedro Henrique",
      Age: "17 years",
      Location: "Governador Valadares, MG, Brazil",
    };

    return (
      <div>
        {Object.entries(information).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    );
  };

  return <div>{personalProfile()}</div>;
};

export default Profile;

```

## 💻 Some statistics 💻
<div>
    <div align="center">
         <a href="https://github.com/PedroHRFerreira?tab=repositories">
            <img width="800" height="220" src="https://streak-stats.demolab.com/?user=PedroHRFerreira&theme=dark&hide_border=true&border_radius=5&card_width=1000">
         </a>
    </div>
    </div>
    <div align="center">
      <a href="https://github.com/PedroHRFerreira?tab=repositories">
        <img align="center" src="https://github-readme-stats.vercel.app/api?username=PedroHRFerreira&show_icons=true&theme=dark&hide_height=27" alt="PedroHRFerreira github stats"/>
      </a>
    </div>

---

<div align="center">
  <img src="https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />
  <img src="https://img.shields.io/badge/Nuxt-%2335495e.svg?style=for-the-badge&logo=nuxtdotjs&logoColor=%234FC08D" />
  <img src="https://img.shields.io/badge/React-%23007ACC?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-00758F.svg?style=for-the-badge&logo=MySQL&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white" />
  <br>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
</div>
