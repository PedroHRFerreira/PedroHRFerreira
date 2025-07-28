# 👋 Olá! Eu sou o Pedro Henrique

### 💻 Desenvolvedor Full Stack

Tenho **18 anos**, sou desenvolvedor **Full Stack**.  
Atualmente atuo profissionalmente em **vários micro-serviços back-end**, além de contribuir no **desenvolvimento front-end de uma plataforma**.  

---

### 🧠 Tecnologias & Stack

```javascript
import React from 'react';

const PedroHenrique = () => {
  const pedroHenrique = {
    name: "Pedro Henrique",
    code: ["TypeScript", "JavaScript", "PHP", "HTML", "CSS", "Sass"],
    askMeAbout: ["web dev", "Vue.js", "Nuxt.js", "Next.js", "laravel"],
  };

  return (
    <aside>
      <h1>{pedroHenrique.name}</h1>
      <p><strong>Code:</strong> {pedroHenrique.code.join(', ')}</p>
      <p><strong>Ask me about:</strong> {pedroHenrique.askMeAbout.join(', ')}</p>
    </aside>
  );
};

export default PedroHenrique;
