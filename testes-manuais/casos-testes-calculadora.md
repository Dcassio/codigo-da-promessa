# Caso de Teste: Operações Básicas - Calculadora
**CASO 01**

**ID**: CT001  
**Título**: Soma de dois números  
**Funcionalidade**: Soma  
**Pré-requisitos**: Calculadora aberta  
**Passos**:
1. Abrir a Calculadora do Windows
2. Inserir o número 10
3. Pressionar o operador +
4. Inserir o número 5
5. Pressionar =

**Resultado Esperado**: 15  
**Resultado Obtido**: A soma de 10 + 5 foi igual a 15.

**Evidência-** https://gyazo.com/6d4aabcea83f6aa599a9397b8d9b99aa  
**Status**: Aprovado

# Caso de Teste: Divisão por Zero
**CASO 02**

**ID**: CT005  
**Título**: Divisão de número por zero  
**Funcionalidade**: Divisão  
**Pré-requisitos**: Calculadora aberta  
**Passos**:
1. Abrir a Calculadora
2. Inserir o número 10
3. Pressionar o operador ÷
4. Inserir 0
5. Pressionar =

**Resultado Esperado**: Exibir erro ("Não é possivel dividir por zero")  
**Resultado Obtido**: Uma mensagem de texto ("Não é possivel dividir por zero")

**Evidência-** https://gyazo.com/2cb3f3247f48879a713d1a02af67937c   
**Status**: Aprovado

# BUG REPORT — Calculadora
**CASO 03**(caso meramente editado no paint, para simular suposto bug)

**ID**: BUG001  
**Título**: Resultado incorreto na multiplicação de 2.5 x 4  
**Gravidade**: Alta  
**Prioridade**: Média  
**Ambiente**: Windows 10, Calculadora Padrão

**Passos para Reproduzir**:
1. Abrir a Calculadora
2. Inserir 2.5
3. Pressionar ×
4. Inserir 4
5. Pressionar =

**Resultado Esperado**: 10  
**Resultado Obtido**: 9.99999

**Evidência**: https://gyazo.com/c2669a6aa98b0a96ab48f8b2f23152c4

**Status**: Reprovado  
**Responsável**: QA