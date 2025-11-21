# Detalhes de uma planta 3D - Indústria

## Introdução 
A ideia do projeto é trabalhar com plantas de casas/cômodos de maneira mais interativa e fornecendo uma melhor experiência visual. Serve como um complemento para as plantas 2D com as dimensões já especificadas. Neste projeto, a intenção é expandir as possibilidades, permitindo que, clicando no modelo, você obtenha informações e detalhes sobre os objetos dentro dele, incluindo até links para redirecionamento para páginas de compras.

Dependendo do modelo, o projeto pode ser expandido para que seja possível selecionar cada objeto dentro do modelo de maneira individual.

## Funcionamento
Quando apontar a câmera para o marcador **Hiro**, um quarto 3D será mostrado, contendo alguns objetos em seu modelo. 
Fazendo uso do gesture-detector, é possível que o usuário possa dar zoom-in e zoom-out no modelo. Também é possível que, quando o usuário mantiver o dedo pressionado na tela, seja feito um zoom de 30% enquanto permite a rotação do modelo.

**Interação principal**: Quando o usuário clicar no modelo, vai acionar o evento de clique que fará surgir um painel em HTML no topo da tela. O painel é de uma altura limitada para que não atrapalhe a visualização do modelo. Todo o conteúdo é scrollable, procurando aprimorar a experiência do usuário.

## Otimizações Realizadas
Embora no site do sketchfab o modelo tenha sido denominado como low poly, ele ainda possuía muitas faces e vértices. O arquivo .glb original possui por volta de 13MB. Foi necessário abrir o arquivo no Blender, retirar alguns objetos e diminuir a quantidade de polígonos, assim conseguindo reduzir o tamanho do arquivo para 3,6MB.
No código foi necessário criar uma animação adicional pois o animation_grow e animation_shrink causam um efeito irregular quando há a opção de zoom-in e zoom-out na aplicação. 


## Créditos
( FREE ) Cartoon Room Low-poly" (https://skfb.ly/opzQ6) by SDC PERFORMANCE™️ is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
