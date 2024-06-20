# Projeto Challenge AluraGeek

Olá! Este projeto foi desenvolvido durante o progama de formação Alura One Next T6 em parceria com a Oracle **CardsView**.
O projeto inicial era um site geek para cadastros de produtos com titulo, preço e imagem(url) e incluir também a opção exclusão

# Visualização do projeto

No projeto trabalhei com design responsivo para adaptar a dispositivos móveis, ontem utilizei o flexbox e grid em partes do site para melhorar a experiência. Prints do projeto abaixo:

> ### Visualização WEB
>
> ![enter image description here](https://i.postimg.cc/44MGGpDx/Captura-de-tela-2024-06-19-205900.png)

### Visualização Mobile

 <div style="display: flex; align-items: center; justify-content: center">
<img src="https://i.postimg.cc/gJFM4kQd/Captura-de-tela-2024-06-19-205828.png"/> >>
<img src="https://i.postimg.cc/63rMPxxZ/Captura-de-tela-2024-06-19-205852.png"/></div>
 
## Diagrama do LocalStorage

Lógica criada para o cadastro de novos produtos e exclusão do existente

```mermaid
graph LR
A[New Card]  --> E -- Envida dados --> B
B[localStorage]
C[View Cards]
D[Delete Cards]
E[[id,<br>titulo,<br>preco,<br>url]]
F(busca por id)
B -- Disponibiliza dados --> C
D --> F -- Exclui pelo ID--> B
```
